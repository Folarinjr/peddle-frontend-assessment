import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'

import GitHubContext from '../../context/GitHubContext'

import RepoItem from './RepoItem'

const GitHub = () => {
    //initialize navigation
    const navigate = useNavigate();

    const {users} = useContext(GitHubContext)
  return (
    <>
        {users.map((user)=> (<RepoItem key={user.id} user={user}/>))}
        <div className="back" onClick={()=>navigate('/')}>
            <AiFillHome/> Back Home
        </div>
    </>
  )
}

export default GitHub