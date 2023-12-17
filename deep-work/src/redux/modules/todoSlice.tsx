import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Addto } from "../../components/Input";


const initialState: Addto[] = [];

const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Addto>) => {
      return state.concat(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<String>) => {
      return state.filter((item: Addto) => item.id !== action.payload);
    },

    switchTodo: (state, action: PayloadAction<string>) => {
      return state.map((state: Addto) =>
        state.id === action.payload
          ? { ...state, isDone: !state.isDone }
          : state
      );
    },
  },
})

export const { addTodo, deleteTodo, switchTodo } = todoSlice.actions;

export default todoSlice.reducer;
