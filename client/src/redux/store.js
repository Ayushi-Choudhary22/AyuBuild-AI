//Redux gives one common place where every page can read and update data Because many pages need the same data.
import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./userSlice"
//Create one big cupboard and put all slices inside it.
export const store=configureStore({
    reducer:{
      //Create one section in Redux called user and use userSlice to manage it.
      user:userSlice
    }
})