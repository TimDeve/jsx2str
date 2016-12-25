# jsx2str
A stupid function to use jsx as template without react.

Doesn't behave exactly like React.createElement, can be used this way:

```jsx
// Import or paste jsx2str function here
const React = {createElement: jsx2str}

const Tweet = (name, body, time) => {
  return (
    <li className="tweet">
      <h3>{name}</h3>
      <p>{time}</p>
      <p>{body}</p>
    </li>
  )
}

const Tweets = (tweets) => {
  return tweets.map((tweet) => Tweet(tweet.name, tweet.body, tweet.time)).join("")
}

const TweetContainer = (tweets) => {
  return (
    <ul className="tweetContainer">
      {Tweets(tweets)}
    </ul>
  )
}


let tweetsSrc = [
  {name: "Jon Snow", time: "12:40", body: "I am the king in the north"},
  {name: "Uncle Ben", time: "11:35", body: "With great power comes great responsabilities"},
  {name: "That guy from Jaw", time: "08:14", body: "We're gonna need a bigger boat"}
]

let el = document.createElement('div');
el.innerHTML = TweetContainer(tweetsSrc)
document.body.appendChild(el);
```
