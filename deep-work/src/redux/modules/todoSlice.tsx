import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Addto } from "../../components/Input";

const initialState : Addto[] = [];

const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action:PayloadAction<Addto>) => {
   return [...state,action.payload]}
    ,

    deleteTodo: (state, action:PayloadAction<String>) => {
      state.filter((i:Addto) => i.id !== action.payload);
    },

    switchTodo: (state, action:PayloadAction<string>) => {
      state.map((state:Addto) =>
      state.id === action.payload
        ? { ...state, isDone: !state.isDone }
        : state
    );
    },
  },
});


export const { addTodo, deleteTodo,switchTodo } = todoSlice.actions;

export default todoSlice.reducer;