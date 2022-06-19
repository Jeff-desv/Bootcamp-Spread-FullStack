import React from "react";
import * as S from "./styled";

function RepositoryItem({ name, linkToRepo, fullName}){
    return(

        <S.Container>
         <S.ContainerTitle>{name}</S.ContainerTitle> 
           <S.ContainerFullName>fullName:</S.ContainerFullName>
            <S.ContainerLink href= {linkToRepo} target={"_blank"} rel="noreferrer">
                {fullName}
            </S.ContainerLink>
        </S.Container>
    )
}

export default RepositoryItem;