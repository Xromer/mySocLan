import React from 'react';
import classes from './news.module.css';


const News = (props) => {

  let newsItem = props.news.news.map(n => <div>{n.news}</div>);
  return (
    <div className={classes.content}>
      <div className="news">
        {newsItem}
      </div>
    </div>
  );
}

export default News;