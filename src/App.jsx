import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [star, setStar] = useState([]);

  const minus = () => {
    setCount(count - 1);
    let a = [...star];
    a.pop();
    setStar(a);
  };

  const add = () => {
    setCount(count + 1);

    if (count >= 0) {
      let a = [...star];
      a.push('*');
      setStar(a);
    }
  };

  console.log(star);
  return (
    <div id='container'>
      <nav >STARS</nav>
      <div >
        <button  onClick={minus}>
          Remove
        </button>
        <span >{count}</span>
        <button  onClick={add}>
          Add
        </button>
      </div>
      <div id="star">
        <span>{star}</span>
      </div>
    </div>
  );
}
export default App;
