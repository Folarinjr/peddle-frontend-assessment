import { createContext, useState, useEffect } from "react";

const GitHubContext = createContext();

export const GitHubProvider = ({children}) => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getRepo();
        //eslint-disable-next-line
    },[])

    //fetch data from github API
    const getRepo = async () =>{
        const res = await fetch(`https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc`);
        const data = await res.json();

        setUsers(data.items)
    }

    return(
        <GitHubContext.Provider
            value={{
                users,
                getRepo
            }}
        >
            {children}
        </GitHubContext.Provider>
    );

}

export default GitHubContext