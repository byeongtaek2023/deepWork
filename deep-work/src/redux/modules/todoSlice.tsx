import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Addto } from "../../components/Input";
import { json } from "../../axios/todo";

const initialState: Addto[] = [];

export const __getTodos = createAsyncThunk(
  "Todo/getTodos",
  async (payload, thunkAPI) => {
    try {
      const data: Addto = (await json.get("/todos")).data;
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const __deleteTodo = createAsyncThunk(
  "Todo/deleteTodo",
  async (payload: string, thunkAPI) => {
    try {
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __switchTodo = createAsyncThunk(
  "Todo/switchTodo",
  async (payload: string, thunkAPI) => {
    try {
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
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
  extraReducers:(builder) => {
    builder
    //getTodo
    .addCase(__getTodos.fulfilled, (state, action) => {
      return [...state, action.payload];
    })

    .addCase(__getTodos.rejected, (state, action) => {
      return console.log('__getTodos error')
    })
    //deleteTodo
    .addCase(__deleteTodo.fulfilled, (state, action) => {
      return state.filter((item: Addto) => item.id !== action.payload);
    })
    .addCase(__deleteTodo.rejected, (state, action) => {
      return console.log('__deleteTodo error')
    })
    //switchTodo
    .addCase(__switchTodo.fulfilled, (state, action) => {
      return state.map((state: Addto) =>
        state.id === action.payload
          ? { ...state, isDone: !state.isDone }
          : state
      );
    })
    .addCase(__switchTodo.rejected, (state, action) => {
      return console.log('__deleteTodo error')
    });
  }
});

export const { addTodo, deleteTodo, switchTodo } = todoSlice.actions;

export default todoSlice.reducer;
