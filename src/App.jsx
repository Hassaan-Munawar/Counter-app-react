import { useState } from 'react';
import './App.css';

function App() {

  let [num, setNum] = useState(0)

  let inc = () => {
   num < 20 ? setNum(num + 1):
   alert('Number is twenty..')
  }

  let dec = () => {

    num > 0 ? setNum(num - 1) :
    alert('Number is zero..')
    
  }

  return (
    <div className='main'>
      <div className="zero">
        {num}
      </div>
      <div className="buttons">
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
