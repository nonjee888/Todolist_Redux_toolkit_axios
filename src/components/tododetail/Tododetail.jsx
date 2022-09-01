import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const Tododetail = () => {
    const navigate = useNavigate();
    const todos = useSelector((state)=>state.todos.todos)
    console.log(todos)
    const {id} = useParams();
    console.log({id})
    const todo = todos.find((todo) => {
        console.log(todo)
        return todo.id === id;})
    
    return(
        <>
        <div>
        <div>{id}</div> 
        <p
        onClick={()=>{
            navigate("/")
        }}
        >이전으로</p>
        </div>
        <div>
            <div>할일 :{todo.title}</div>
            <div>내용 :{todo.body}</div>
        </div>


        </>
    )
}

export default Tododetail;