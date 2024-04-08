import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:false,
    userdata:null

}




const authSlice=createSlice({

name:'auth',
initialState,

 reducers:{


    loginUser:(state,action)=>
    {


        state.status=true

       state.userdata=action.payload

    },

    logout:(state,action)=>{



        state.status=false,
        state.userdata=null


    }


 }
})



 export const {loginUser,logout}=authSlice.actions;
 export const authreducer= authSlice.reducer









