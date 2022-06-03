import React from 'react'

const RepoItem = ({user}) => {
    //get the timestamp of the created date and today
    const before = new Date(user.created_at);
    const now = new Date();

    //find the difference between the two time
    const diff = now.getTime() - before.getTime();

    //convert the difference to days

    /***
     * const seconds = Math.round(diff / 1000)
     * const mins = Math.round(seconds / 60)
     * const hours = Math.round(mins / 60)
     * const days = Math.round(hours / 24)
     */

    const days = Math.round(diff/1000/60/60/24);

    return (
        <div className="gitHub">
            <div className="gitHub__avatar">
                <img src={user.owner.avatar_url} alt="avatar" className="gitHub__avatar--img" />
            </div>

            <div className="gitHub__details">
                <div className="gitHub__details--header">
                    <h3>{user.name}</h3>
                </div>

                <div className="gitHub__details--text">
                    <p>{user.description}</p>
                </div>

                <div className="gitHub__details--stats">
                    <div className="gitHub__details--stat">
                        stars: {user.stargazers_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </div>

                    <div className="gitHub__details--stat">
                        issues: {user.open_issues.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </div>

                    <div className="gitHub__submit">
                        <p>Submitted {days} days ago by {user.owner.login}.</p>
                    </div>
                </div>

            </div>
            
        </div>

    )
}

export default RepoItem