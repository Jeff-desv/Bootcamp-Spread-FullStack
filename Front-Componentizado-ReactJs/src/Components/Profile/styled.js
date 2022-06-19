import styled from "styled-components";

//Container geral
export const Container = styled.div `
 display: flex;
 align-itens: flex-start;
`;

//Container Imagem
export const ContainerImg = styled.img `
 width: 10.5rem;
 border-radius: 50%;
 margin: 0.5625rem;
 padding: 0.675rem
`;

//Container 
export const ContainerInfo = styled.div `
 display: flex;
 flex-direction: column;
 align-itens: flex-start;
 justufy-content: space-between;
 margin-left: 0.5rem;
 height: 12.5rem;
 h1 {
   font-size: 2rem;
   font-weight: bold;
 }
 h3 {
   font-size: 1.4rem;
   font-weight: bold;
 }
 h4 {
   font-size: 1.1rem;
   font-weight: bold;
 }
`;

//Container Username
export const ContainerUsername = styled.div `
 display: flex;
 align-itens: center;
 margin-top: 0.7567rem;
 a {
    margin: 0.2em;
    text-decoration: none;
    color: blue;
    font-weight: bold;
    font-size: 1.125rem;
 }
 margin-bottom: 0.5rem;
`;

//Container UserGeneric
export const ContainerUserGeneric = styled.div `
 display: flex;
 align-itens: center;
 margin-top: 0.7567rem;
 margin-bottom: 0.5rem;
 span {
  margin: 0.2rem;
  font-weight: bold;
  font-size: 1.125rem;
 }
`;

//Container Follow/Followings/Starreds
export const ContainerStatus = styled.div `
 display: flex;
 align-itens: center;
 div {
    margin: 0.5rem;
    text-aligne: center;
 }
 margin-bottom: 2rem;
`;



