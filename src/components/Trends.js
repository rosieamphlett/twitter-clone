import React, { Component } from 'react';
import data from '../utils/data';

class Trends extends Component {
    render() {
        const {trends} = data;
        let allTrends = trends.map((trend, i) =>
            <article key={i} className="each-trend">
                <h2>{trend.title} <br /><span>{trend.tweets} Tweets</span></h2>
            </article>)
        
        return (
            <div className="trends">
                <header>
                    <h1>Trends for you </h1>
                    <h4>- Change</h4>
                </header>
                <article>{allTrends}</article> 
            </div>
        );
    }
}

export default Trends;