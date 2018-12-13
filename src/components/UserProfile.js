import React, { Component } from 'react';
import data from '../utils/data';

class UserProfile extends Component {
    render() {
        let {tweets} = data;
        return (
            <article className="user-profile">
                <img src="http://www.movieviral.com/wp-content/uploads/2011/06/pawnee.png" alt="pawnee" />
                <header>
                    <img src={tweets[0].avatar} alt="user-pic"/>
                    <h1>{tweets[0].name}</h1>
                    <h2>@{tweets[0].username}</h2>
                </header>
                <div className="user-stats">
                    <h3>Tweets <br /><span>{tweets[0].tweets}</span></h3>
                    <h3>Following <br /><span>{tweets[0].following}</span></h3>
                    <h3>Followers <br /><span>{tweets[0].followers}</span></h3>
                </div>
            </article>
        );
    }
}

export default UserProfile;