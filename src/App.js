import React, { useState } from 'react'
import Review from './components/Review';
import reviews from './components/data';
import './components/styles.css'

const App = () => {
  const [id, setId] = useState(0);
  const length = reviews.length;

  const increment = () => {
    setId((id + 1) % length)
  }

  const decrement = () => {
    if(id === 0) {
      setId(length - 1);
    }
    else {
      setId((id - 1) % length)
    }
    
  }

  const surpriseMe = () => {
    const randomNumber = Math.floor((Math.random() * length))
    if(randomNumber === id) {
      setId((id + 1) % length);
    }
    else {
      setId(randomNumber);
    }
  }

  return (
    <main>
      <div className='title'>
        <h2>Our Reviews</h2>
        <div className='underline'></div>
      </div>
      <article>
        <Review id={id} increment={increment} decrement={decrement} surpriseMe={surpriseMe} />
      </article>
    </main>
  );
}

export default App;
