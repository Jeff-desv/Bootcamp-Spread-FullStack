import React from "react";
import App from "../../App";
import { ResetCSS } from "../Global/resetCSS";
import GithubProvider from "./Github-provider";

const Provider = () => {

    return(
        <main>
            <GithubProvider>
                <ResetCSS />
                <App />
            </GithubProvider>
        </main>
    );
};

export default Provider;