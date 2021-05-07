import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
      admin:null
    },
    reducers: {
      adminOn: (state,action) => {
        state.admin=action.payload
        
      
    },
      adminOff: state => {
        state.admin=null
      },
      
    },
  });
  
  export const { adminOn,adminOff } = adminSlice.actions;

  export const selectAdmin = state => state.admin.admin;
  
  export default adminSlice.reducer;
 