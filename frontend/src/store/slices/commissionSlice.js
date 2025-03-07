import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


const commissionSlice = createSlice({
    name: "commission",
    initialState:{
        loading: false,
    },

    reducers: {
        postCommissionProofRequest(state, action){
            state.loading = true;
        },
        postCommissionProofSuccess(state, action){
            state.loading = false;
        },
        postCommisiionproofFailed(state, action){
            state.loading = false;
        }
    }
})

export const postCommissionProof = (data) => async (dispatch) => {
    dispatch(commissionSlice.actions.postCommissionProofRequest());
    console.log(data);
    
    try {
        
      const response = await axios.post(
        "http://localhost:5000/api/v1/commission/proof",
        data,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
     
      dispatch(commissionSlice.actions.postCommissionProofSuccess());
      for (let [key, value] of data.entries()) {
        console.log(`${key}: ${value}`);
    }
      toast.success(response.data.message);
    } catch (error) {
      dispatch(commissionSlice.actions.postCommisiionproofFailed());
      toast.error("Payment Failed....");
    }
  };
  
  export default commissionSlice.reducer;