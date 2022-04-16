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
                <button className='btn' onClick={decrement}>{`<`}</button>
                <button className='btn' onClick={increment}>{`>`}</button>
            </div>
            <button className='btn-surprise' onClick={surpriseMe}>Surprise Me</button>
        </footer>
    </>
  )
}

export default Review