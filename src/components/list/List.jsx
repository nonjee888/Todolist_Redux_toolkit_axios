import React from "react";
import Todo from "../todo/Todo";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getTodos } from "../../redux/modules/todos";

const List = () => {
    let dispatch = useDispatch();
    const { isLoading, error, todos } = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(__getTodos()); 
    }, [dispatch]);

    if (isLoading) {
        return <div>로딩중...</div>
    }

    if(error) {
        return <div>{error.message}</div>
    }

    console.log(todos) // 만들어진 배열 todo는 initialState
    return(

        <StList>
            <div>
                <h1>오늘의 할일</h1>
                    {todos.map((todo)=> {
                        console.log(todo)
                    if(todo.isDone === false)
                    return <Todo key={todo.id} todo={todo}/>
                })}
            </div>
            <div>
                <h1>다 했 음</h1>
                {todos.map((todo)=> {
                    if(todo.isDone === true)
                    return <Todo key={todo.id} todo={todo}/>
                })}
            </div>
        </StList>
    )
}

export default List;

const StList = styled.div`
    height: 600px;
    width:100%;
    background-color: #afa4eaaf;
    border: aliceblue 1px solid;
`

