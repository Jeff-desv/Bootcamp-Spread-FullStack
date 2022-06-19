import React from "react";
import * as S from '../Profile/styled';
import useGithub from "../hooks/github-hooks";

function Profile(){

    const {githubState} = useGithub();

    return(
           <S.Container>
    
             <S.ContainerImg
             
                src={githubState.user.avatar} alt="Avatar of user"/> 
                
             <S.ContainerInfo>
                    <div>
                        <h1>{githubState.user.name}</h1>
                        <S.ContainerUsername>
                            <h3>Username:</h3>
                            <a href= {githubState.user.html_Url} target={"_blank"} rel="noreferrer">
                                {githubState.user.login}
                            </a>
                        </S.ContainerUsername>

                        <S.ContainerUserGeneric>
                            <h3>location:</h3>
                            <span>{githubState.user.location}</span>
                        </S.ContainerUserGeneric>

                        <S.ContainerStatus>
                            <div>
                                <h4>Followers</h4>
                                <span>{githubState.user.followers}</span>
                            </div>
                            <div>
                                <h4>Gists</h4>
                                <span>{githubState.user.public_gists}</span>
                            </div>
                            <div>
                                <h4>Repos</h4>
                                <span>{githubState.user.public_repos}</span>
                            </div>
                            <div>
                                <h4>Followings</h4>
                                <span>{githubState.user.following}</span>
                            </div>
                        </S.ContainerStatus>
                    </div>
             </S.ContainerInfo>
           </S.Container>
    );
};

export default Profile;