import React, { Component } from 'react';
import data from '../utils/data';

class RecommendedFriends extends Component {
    render() {
        const {peopleToFollow} = data;
        let recommendations = peopleToFollow.map((person, i) => 
            <article key={i} className="recommendations">
                <div className="aligned-users">
                    <img src={person.avatar} alt="icon"/>
                    <h1 className="name">{person.name}</h1>
                    <h3 className="username">@{person.username}</h3>
                </div>
                <button>Follow</button>
            </article>)
        return (
        <article className="who-to-follow-card">
            <header>
                <h1 className="title">Who to follow</h1>
                <h3 className="subtitle"> - Refresh - </h3>
                <h3 className="subtitle">View all</h3>
            </header>
            <article>{recommendations}</article>
            <footer>
                <span className="glyphicon glyphicon-user"><i>Find people you know</i></span>
            </footer>
        </article>
        );
    }
}

export default RecommendedFriends;