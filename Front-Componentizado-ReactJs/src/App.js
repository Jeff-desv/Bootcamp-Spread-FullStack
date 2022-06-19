import React from 'react';
import Layout from './Components/Layout/index';
import Profile from './Components/Profile/Profile';
import Repositories from './Components/Repositories';
import useGithub from './Components/hooks/github-hooks';
import NoSerach from './Components/no-search';

function App() {

  const { githubState } = useGithub();

  return (
   
        <Layout>
         {githubState.hasUser ? 

          <>
          {githubState.loading ? (
          <p>loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )};
          </> : <NoSerach />
         }
        </Layout>
  );
};

export default App;
