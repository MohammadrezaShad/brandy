import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Payload = {
  id: string;
};
type State = {
  value: number;
};
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  } as State,
  reducers: {
    increment: (state, { payload }: PayloadAction<Payload>) => {
      console.log(payload);
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
