import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeTodo, remove_todos, toggleTodo } from "../../redux/modules/todos";
import { toggle_todos } from "../../redux/modules/todos";

const Todo = ({todo}) => {
    console.log(todo)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onRemove = (id) => {
        dispatch(removeTodo(id))
    }

    const onToggle = (todo) => {
        dispatch(toggleTodo(todo))
    }


    return(
        <StTodos >
            <p
            onClick = {()=>{
                navigate("/detail/"+todo.id)
            }}
            >상세보기</p>
            <div>{todo.title}</div>
            <div>{todo.body}</div>
            <div>
                <button
                onClick = {()=>{onRemove(todo.id)}}
                >삭제</button>
                <button
                onClick = {()=>{onToggle(todo)}}
                >{todo.isDone ? "하는중":"다했음"}</button>
            </div>

        </StTodos>
    )
}

export default Todo;

const StTodos = styled.div`
    height: 200px;
    width: 250px;
    border-radius: 15px;
    background-color: #a68392;
`