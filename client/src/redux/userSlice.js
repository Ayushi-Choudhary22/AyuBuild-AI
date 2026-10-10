import { createSlice } from "@reduxjs/toolkit";
//the app starts the initial value should be null
const userSlice=createSlice({
    name:"user",
    initialState:{
        userData:null
    },
    //Reducers are functions that update Redux data.

    reducers:{
      //state is Current Redux data and action is  The new data coming. 
        setUserData:(state,action)=>{
            //Store the new user inside Redux
                //Payload is data being sent.
          state.userData=action.payload
        }
    }

})
//this export is used when you want to change Redux data.
export const {setUserData}=userSlice.actions
//Used only once in store.js
export default userSlice.reducer