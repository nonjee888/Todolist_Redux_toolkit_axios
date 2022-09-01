import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const __getTodos = createAsyncThunk(
    "todos/getTodos",
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get("http://localhost:3001/todos");
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
          return thunkAPI.rejectWithValue(error);
        }
    }
);

export const todos = createSlice({
    name:"todos",
    initialState: {
        todos: [],
        isLoading: false,
        error: null,
    },
  reducers: {
    createTodo(state, action){
        state.todos.push(action.payload);
        axios.post("http://localhost:3001/todos", action.payload);
    },
    removeTodo(state, action){
        let index = state.todos.findIndex(todo => todo.id === action.payload);
        state.todos.splice(index,1);
        axios.patch(`http://localhost:3001/todos/${action.payload.id}`, action.payload);
    },
    toggleTodo(state, action){
        let todos = state.todos.map(todo => {
            if(todo.id === action.payload) {
                return {
                    ...todo,
                    isDone: !todo.isDone
                };
            }else {
                return{...todo}
            }
        }); state.todos = todos
        axios.patch(`http://localhost:3001/todos/${action.payload.id}`, todos)
    },
  },
  extraReducers: {
    [__getTodos.pending]: (state) => {
        state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.todos = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    },
  },
  
})

export let {createTodo, removeTodo, toggleTodo} = todos.actions;
export default todos;



// //Actions

// const CREATE_TODOS = "CREATE_TODOS"
// const TOGGLE_TODOS = "TOGGLE_TODOS"
// const REMOVE_TODOS = "REMOVE_TODOS"

// //Action Creator

// export const create_todos = (payload) => {
//     return {
//         type: CREATE_TODOS,
//         payload: payload,
//     };
// };

// export const toggle_todos = (payload) => {
//     return {
//         type: TOGGLE_TODOS,
//         payload: payload,
//     }
// }

// export const remove_todos = (payload) => {
//     return {
//         type: REMOVE_TODOS,
//         payload: payload,
//     }
// }

// const initialState = {
//     todos:[{
//         id:"1",
//         title: "연습용",
//         body: "todo list",
//         isDone: false
//     },
//     {
//         id:"2",
//         title: "연습해 툴킷",
//         body: "todo list",
//         isDone: true
//     }],
//     todo: {
//         id:"0",
//         title: "",
//         body: "",
//         isDone: false
//     }
// };

// //reducer
// const todos = (state = initialState, action) => {
//     switch (action.type) {
//         case CREATE_TODOS:
//             return {
//                 ...state,
//                 todos: [...state.todos, action.payload],
//             }

//         case REMOVE_TODOS:
//             return {
//                 ...state,
//                 todos: state.todos.filter((todo) => todo.id !== action.payload),
//             }
            
//         case TOGGLE_TODOS:
//             return {
//                 ...state,
//                 todos: state.todos.map((todo) => {
//                     if(todo.id === action.payload) {
//                         return {
//                             ...todo,
//                             isDone: !todo.isDone,
//                         };
//                     } else {
//                         return todo; 
//                     }

//                 }),
//             }
//     default:
//         return state;
//     }
// }

// export default todos;