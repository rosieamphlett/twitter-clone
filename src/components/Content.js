import React, { Component } from 'react';
import data from '../utils/data';
import moment from "moment";
import UserProfile from './UserProfile';
import RecommendedFriends from './RecommendedFriends';
import Trends from './Trends';

class Content extends Component {
    render() {
        const {tweets} = data;
        let allTweets = tweets.map((tweet, i) =>
        <article key={i} className="card" id="height">
          <img src= {tweet.avatar} alt="card-img" />
            <div className="card-body">
                <div className="aligned">
                    <h1 className="card-title">{tweet.name}</h1> 
                    <h3 className="username">@{tweet.username}</h3>
                    <h4 className="time">- {moment(tweet.date).startOf().fromNow().toString()}</h4>
                </div>
                <p className="tweet">{tweet.text}</p>
                <ul className="aligned-icons">
                    <li className="glyphicon glyphicon-comment"> 
                        <i className="tweet-info"> {tweet.replies}</i></li>
                    <li className="glyphicon glyphicon-retweet"> 
                        <i className="tweet-info"> {tweet.retweets}</i></li>
                    <li className="glyphicon glyphicon-heart"> 
                        <i className="tweet-info"> {tweet.likes}</i></li>
                    <li className="glyphicon glyphicon-envelope"></li>
                </ul>
            </div>
        </article>)

        return (
            <div className="content">
                <article className="write-a-tweet">
                    <img src={tweets[6].avatar} alt="user" />                    
                    <div className="form-group">
                        <input type="text" placeholder="What's happening?"/>
                        <span className="glyphicon glyphicon-picture"></span>
                    </div>
                </article>
                <article className="tweets">{allTweets}</article>
                <div className="desktop-additions">
                <RecommendedFriends query="(min-device-width: 1024px)"/>
                <UserProfile />
                <Trends />
                </div>
            </div>
        );
    }
}

export default Content;