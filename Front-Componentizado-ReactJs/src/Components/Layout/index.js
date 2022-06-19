import React from "react";
import Header from "../header";
import * as S from "./styled";

function Layout ({ children }){

    return(
       <S.ContainerLayout>
            <Header />
            {children}
       </S.ContainerLayout>
    );
};

export default Layout;