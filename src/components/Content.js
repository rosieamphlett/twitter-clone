import React, { Component } from 'react';
import tweets from '../utils/data';
import moment from "moment";

class Content extends Component {
    render() {

        let allTweets = tweets.map((tweet, i) =>
        <article key={i} className="card">
          <img src= {tweet.avatar} alt="card-img" />
            <div className="user-info">
                <div className="alligned">
                    <h1 className="card-title">{tweet.name}</h1> 
                    <h3 className="username">@{tweet.username}</h3>
                    <h4 className="time">- {moment(tweet.date).startOf().fromNow().toString()}</h4>
                </div>
                <p className="tweet">{tweet.text}</p>
            </div>
        </article>)

        return (
            <div className="content">
                <article className="write-a-tweet">
                    <img src= {require('../utils/defaultUser.png')} alt="user" />                    
                    
                    <div className="form-group">
                        <input type="text" placeholder="What's happening?"/>
                        <span className="glyphicon glyphicon-picture"></span>
                    </div>
                </article>

                <article className="tweets">{allTweets}</article>
            </div>
        );
    }
}

export default Content;