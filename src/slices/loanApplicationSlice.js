import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk for fetching loan applications from the backend API
export const loanApplications = createAsyncThunk('loans/application', async () => {
    const response = await axios.get('/api/loans');
    return response.data;
  });
  
  // Thunk for adding a new Loan Application to the backend API
  export const addLoan = createAsyncThunk('loans/apply', async (loanDetails) => {
    const response = await axios.post('/api/loans/apply', { loanDetails: loanDetails, completed: false });
    return response.data;
  });
  
  const loanSlice = createSlice({
    name: 'loans',
    initialState: {
      loans: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(loanApplications.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(loanApplications.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.loans = action.payload;          
        })
        .addCase(loanApplications.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(addLoan.fulfilled, (state, action) => {
          state.loans.push(action.payload);
        });
    },
  });

  export default loanSlice.reducer;