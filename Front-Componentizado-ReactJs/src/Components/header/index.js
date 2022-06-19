import React, { useState } from "react";
import * as S from './styled';
import useGithub from "../hooks/github-hooks";

const Header = () => {

    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameSearch] = useState();

    const submitGetUser = () => {

      if (!usernameForSearch) return;
      return getUser(usernameForSearch);
    };

    return (

        <header>
            <S.Container>
                <input type="text" placeholder="Pesquisar Usuário" 
                onChange={(event) => setUsernameSearch(event.target.value)} />
                <button type="submit" onClick={submitGetUser}>
                   <span>Buscar</span> 
                </button>
            </S.Container>
        </header>
    )
}

export default Header;