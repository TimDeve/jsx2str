# jsx2str
Can be used instead of React.createElement to use jsx as a template and make it output a string.

Doesn't behave exactly like React.createElement, can be used this way:

```jsx
const Button = (arg) => { return <a href="http://www.google.com" className="Button">{arg}</a> }
console.log(Button("Click Me"))
// => <a href="http://www.google.com" class="Button">Click Me</a>

const Container = (arg1, arg2) => {
  return <div>
    {Button(arg1)}
    {Button(arg2)}
  </div>
}
console.log(Container("Click me", "Don't Click Me"))
// => <div><a href="http://www.google.com" class="Button">Click me</a><a href="http://www.google.com" class="Button">Don't Click Me</a></div>
```
