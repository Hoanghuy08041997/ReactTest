import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

let greet = (name, timeOfDay) => {
  console.log(`Good ${timeOfDay}, ${name}`);
};

greet("John", "morning");
greet("Alice", "afternoon");

let square = (num) => {
  return num * num;
};

console.log(square(5));
console.log(square(8));

let person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  },
};

person.greet();

function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(`Sum: ${sum(1, 2, 3, 4, 5, 6, 7, 8, 9)}`);

function App() {
  return (
    <div>
      <h1>Let F12</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();