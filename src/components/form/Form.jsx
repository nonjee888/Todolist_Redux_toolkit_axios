import React from "react";
import styled from "styled-components";
import { createTodo } from "../../redux/modules/todos";
import { useDispatch } from "react-redux";
import { useState } from "react";
import nextId from "react-id-generator";

const Form = () => {
    let id = nextId();
    const dispatch = useDispatch();
    const [inputTodo, setInputTodo] = useState ({
        id: id,
        title: "",
        body: "",
        isDone: false
    })
    console.log(inputTodo)

    const onChange = (e) => {
        const { value, name } = e.target
        // console.log(value,name)
        setInputTodo({ ...inputTodo, [name]:value })
    }

    const onSubmit = (e) => {
        dispatch(createTodo({...inputTodo, id})) //...inputTodo 자체는 is not iterable
        e.preventDefault();
        if (inputTodo.title.trim() === "" || inputTodo.body.trim() === "") return alert('텍스트를 입력 해주세요.');
        setInputTodo({...inputTodo, title:'', body:''})
        console.log(inputTodo)
    }

    return(
        <StForm>
            <div>
                <label>할일</label>
                <input 
                name = "title"
                type = "text"
                value = {inputTodo.title}
                onChange={onChange}
                />
                <label>내용</label>
                <input
                name = "body"
                type = "text"
                value = {inputTodo.body}
                onChange={onChange}
                />
                <button
                onClick={onSubmit}
                >
                    등록
                </button>
            </div>
        </StForm>
    )
}

export default Form;

const StForm = styled.div`
background-color: aliceblue;
border: aliceblue 1px solid;
height: 120px;
width: 100%;
`;
