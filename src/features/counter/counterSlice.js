import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulate an API call for async increment
export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(amount);
      }, 1000); // Simulate 1 second delay
    });
  }
);

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0, status: 'idle' }, // Add a status for async operations
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    addByAmount: (state, action) => {
      state.count += action.payload;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.count += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

// Export actions
export const { increment, decrement, addByAmount, reset } = counterSlice.actions;

// Export selector for derived state
export const selectDoubleCount = (state) => state.counter.count * 2;

// Export reducer
export default counterSlice.reducer;
