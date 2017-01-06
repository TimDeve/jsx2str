# jsx2str
A stupid function to use jsx as template without react.

Doesn't behave exactly like React.createElement (e.g. Can't pass an object to style attribute...), can be used this way:

```jsx
// Import or paste jsx2str function here
const React = {createElement: jsx2str}

const Tweet = (props) => {
  return (
    <li className="tweet">
      <h3>{props.name}</h3>
      <p>{props.time}</p>
      <p>{props.body}</p>
      <hr />
    </li>
  )
}

const Tweets = (props) => {
  return props.tweets.map((tweet) => <Tweet name={tweet.name} time={tweet.time} body={tweet.body} />).join("")
}

const TweetContainer = (props) => {
  return (
    <ul className="tweetContainer">
      <Tweets tweets={props.tweets} />
    </ul>
  )
}

let tweetsSrc = [
  {name: "Jon Snow", time: "12:40", body: "I am the king in the north"},
  {name: "Uncle Ben", time: "11:35", body: "With great power comes great responsabilities"},
  {name: "That guy from Jaw", time: "08:14", body: "We're gonna need a bigger boat"}
]

let el = document.createElement('div');
el.innerHTML = <TweetContainer tweets={tweetsSrc} />
document.body.appendChild(el);
```
