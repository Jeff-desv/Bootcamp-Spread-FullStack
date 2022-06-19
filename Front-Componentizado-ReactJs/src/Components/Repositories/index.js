import React, { useEffect, useState } from "react";
import useGithub from "../hooks/github-hooks";
import RepositoryItem from "../RepositoryItem";
import * as S from "./styled";

function Repositories(){

    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [ hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

    useEffect(() => {

        if (githubState.user.login) {
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
          };
          setHasUserForSearchrepos(githubState.repositories);
      
        }, [githubState.user.login]);

    return (

    <>

      {hasUserForSearchrepos ? (
        <S.ContainerTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected">

            <S.ContainerTabList>

              <S.ContainerTab>Repositories</S.ContainerTab>
              <S.ContainerTab>Starred</S.ContainerTab>
                    
            </S.ContainerTabList>

            <S.ContainerTabPanel>
                <S.ContainerTabBorderList>
                    {githubState.repositories.map((item) => (
                        <RepositoryItem 
                        key={item.id}
                        name={item.name}
                        linkToRepo={item.full_name}
                        fullName={item.full_name}/>
                    ))};
                </S.ContainerTabBorderList>
            </S.ContainerTabPanel>

            <S.ContainerTabPanel> 
                <S.ContainerTabBorderList>
                    {githubState.starred.map((item) => (
                        <RepositoryItem 
                        key={item.id}
                        name={item.name}
                        linkToRepo={item.html_url}
                        fullName={item.full_name}/>
                    ))};
                </S.ContainerTabBorderList>
            </S.ContainerTabPanel>

        </S.ContainerTabs>
      ) : (
        <></>
      )}

    </>
    )
}

export default Repositories;