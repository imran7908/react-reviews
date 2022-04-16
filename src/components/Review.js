import React from 'react'
import reviews from './data.js'
import './styles.css'

const Review = ({ id, increment, decrement, surpriseMe }) => {
    const { name, job, image, text } = reviews[id];
  return (
    <>
        <img src={image} alt={name} />
        <div>
            <h4>{name}</h4>
            <h4>{job}</h4>
        </div>
        <footer>
            <p>{text}</p>
            <div>
                <button onClick={decrement}>{`<`}</button>
                <button onClick={increment}>{`>`}</button>
            </div>
            <button onClick={surpriseMe}>Surprise Me</button>
        </footer>
    </>
  )
}

export default Review