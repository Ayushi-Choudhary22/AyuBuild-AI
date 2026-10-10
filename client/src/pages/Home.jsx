import React, { useEffect, useState } from 'react' //usestate stores data that can change.
//useeffect- When something happens, automatically run this code
import { AnimatePresence, motion } from "motion/react" //animatepresence gives exit animations
import LoginModal from '../components/LoginModal'
import { useDispatch, useSelector } from 'react-redux' //selector-Read data from Redux, dispatch-Put or update data inside Redux.
import { Coins } from "lucide-react" //icon library
import { serverUrl } from '../App'
import axios from 'axios' //used for API calls and send req like login logout get save
import { setUserData } from '../redux/userSlice' //Update the user stored in Redux.
import { useNavigate } from 'react-router-dom' //move between pages
function Home() {

    const highlights = [
        "AI Generated Code",
        "Fully Responsive Layouts",
        "Production Ready Output",
    ]

    const [openLogin, setOpenLogin] = useState(false) //change open to set with initial val is false
    const { userData } = useSelector(state => state.user)
    const [openProfile, setOpenProfile] = useState(false)
    const [websites, setWebsites] = useState(null)
    const dispatch = useDispatch() //Send an instruction to Redux when we want to change data in redux
    const navigate = useNavigate()
    //When the user clicks Logout, handleLogOut runs. It is an async function because it makes an API call. Using axios.get, the frontend sends a logout request to the backend along with cookies using withCredentials: true. After the backend successfully clears the session, Redux is updated by setting userData to null, and the profile popup is closed. The try-catch block handles any errors that may occur during the API request
    //Functions that respond to button clicks often start with handle
    const handleLogOut = async () => {
        console.log("logout click")
        try {
            //axios -used for talking to backend
            await axios.get(`${serverUrl}/api/auth/logout`, { withCredentials: true }) //true means axios send cookies also so we know which user wants to logout
            dispatch(setUserData(null)) //Remove logged-in userand update redux
            setOpenProfile(false)
        } catch (error) {
            console.log(error)
        }
    }
    //fetch all the websites that the currently logged-in user has generated
//useEffect runs after the component loads. First, it checks whether a user is logged in using if (!userData) return;. If no user exists, it stops execution. Otherwise, it calls the asynchronous handleGetAllWebsites function. Inside this function, axios.get() sends a GET request to the backend to fetch all websites. await waits for the server response, and withCredentials: true ensures the authentication cookie is sent. After receiving the response, the website data is stored in React state using setWebsites(), which automatically updates the UI. A try-catch block is used to handle any API errors.`
    useEffect(() => {
        //If there is no logged-in user, stop here.
        if (!userData) return;
        const handleGetAllWebsites = async () => {

            try {

                const result = await axios.get(`${serverUrl}/api/website/get-all`, { withCredentials: true })
                setWebsites(result.data || [])

            } catch (error) {
                console.log(error)

            }
        }
        //Now React starts drawing what you see on the screen
        handleGetAllWebsites()
    }, [userData]) //Run this useEffect whenever these values change
    return (
        //min h -Even if there is very little content,page still fills the entire screen
        <div className='relative min-h-screen bg-[#040404] text-white overflow-hidden'>
            <motion.div //animation
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10'
            >
                <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
                    <div className='text-lg font-semibold'>
                        AyuBuild.ai
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='hidden md:inline text-sm text-zinc-400 hover:text-white cursor-pointer' onClick={() => navigate("/pricing")}>
                            Pricing
                        </div>
                        {userData && <div className='hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm cursor-pointer hover:bg-white/10 transition' onClick={() => navigate("/pricing")}>
                            <Coins size={14} className='text-yellow-400' />
                            <span className='text-zinc-300'>Credits</span>
                            <span>{userData.credits}</span>
                            <span className='font-semibold'>+</span>
                        </div>}


                        {!userData ? <button className='px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-sm'
                            onClick={() => setOpenLogin(true)}
                        >

                            Get Started
                        </button>
                            :
                            <div className='relative'>
                                <button className='flex items-center' onClick={() => setOpenProfile(!openProfile)}>
                                    <img src={userData?.avatar || `https://ui-avatars.com/api/?name=${userData.name}`} alt="" referrerPolicy='no-referrer' className='w-9 h-9 rounded-full border border-white/20 object-cover' />
                                </button>
                                <AnimatePresence>
                                    {openProfile && (
                                        <>
                                            <motion.div
                                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                                className="absolute right-0 mt-3 w-60 z-50 rounded-xl bg-[#0b0b0b] border border-white/10 shadow-2xl overflow-hidden"
                                            >
                                                <div className='px-4 py-3 border-b border-white/10'>
                                                    <p className='text-sm font-medium truncate'>{userData.name}</p>
                                                    <p className='text-xs text-zinc-500 truncate'>{userData.email}</p>
                                                </div>

                                                <button className='md:hidden w-full px-4 py-3 flex items-center gap-2 text-sm border-b border-white/10 hover:bg-white/5' onClick={() => navigate("/pricing")}>
                                                    <Coins size={14} className='text-yellow-400' />
                                                    <span className='text-zinc-300'>Credits</span>
                                                    <span>{userData.credits}</span>
                                                    <span className='font-semibold'>+</span>
                                                </button>

                                                <button className='w-full px-4 py-3 text-left text-sm hover:bg-white/5' onClick={() => navigate("/dashboard")}>Dashboard</button>
                                                <button className='w-full px-4 py-3 text-left text-sm text-red-400 hover:bg-white/5' onClick={handleLogOut}>Logout</button>

                                            </motion.div>
                                        </>

                                    )}

                                </AnimatePresence>

                            </div>

                        }

                    </div>
                </div>
            </motion.div>

            <section className='pt-44 pb-32 px-6 text-center'>
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight"
                >
                    Build Stunning Websites <br />
                    
                    <span className='bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>with AI</span>
                </motion.h1> 

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='mt-8 max-w-2xl mx-auto text-zinc-400 text-lg'
                >
                    Describe your idea and let AI generate a modern,
                    responsive, production-ready website.
                </motion.p>


                <button className="px-10 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition mt-12" onClick={() =>userData? navigate("/dashboard"):setOpenLogin(true)}>{userData ? "Go to dashboard" : "Get Started"}</button>

            </section>
            {!userData && <section className='max-w-7xl mx-auto px-6 pb-32'>
                
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {highlights.map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }} //jaise jaise scroll karenge vaise vaise card dikhega
                            className="rounded-2xl bg-white/5 border border-white/10 p-8"
                        >
                            <h1 className='text-xl font-semibold mb-3'>{h}</h1>
                            <p className='text-sm text-zinc-400'>
                                AyuBuild.ai builds real websites — clean code,
                                animations, responsiveness and scalable structure.
                            </p>

                        </motion.div>
                    ))}
                </div>
            </section>}


            {userData && websites?.length > 0 && (
                <section className='max-w-7xl mx-auto px-6 pb-32'>
                    <h3 className='text-2xl font-semibold mb-6'>Your Websites</h3>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {websites.slice(0, 3).map((w, i) => (
                            <motion.div
                                key={w._id}
                                whileHover={{ y: -6 }}
                                onClick={() => navigate(`/editor/${w._id}`)}
                                className="cursor-pointer rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
                            >
                                <div className='h-40 bg-black'>
                                    <iframe
                                        srcDoc={w.latestCode}
                                        className='w-[140%] h-[140%] scale-[0.72] origin-top-left pointer-events-none bg-white'
                                    />
                                </div>
                                <div className='p-4'>
                                    <h3 className='text-base font-semibold line-clamp-2'>{w.title}</h3>
                                    <p className='text-xs text-zinc-400'>Last Updated {""}
                                        {new Date(w.updatedAt).toLocaleDateString()}
                                    </p>
                                </div>


                            </motion.div>
                        ))}

                    </div>
                </section>

            )}



            <footer className='border-t border-white/10 py-10 text-center text-sm text-zinc-500'>
                &copy; {new Date().getFullYear()} AyuBuild AI
            </footer>

            {openLogin && <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />}

        </div>
    )
}

export default Home
