import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 width: 100%;
 justify-content: space-betwee;
 padding: 0.25rem;

 input{
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    width: 80%;
    height: 2.75rem;
    padding: 0.5rem;
    font-weight: 500;
 }

 button {
    background-color: #e0e4ce;
    padding: 0.5rem;
    margin: 0 0.3rem;
    border: 1px solid #ccc;
    border-radius: 0.5625rem;
    font-weight: bold;
    font-size: 1rem;

    &:hover{
        background-color: #6d7578;
        box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
        font-weight: bold;
        color: #fff;
    }
 }
`;
