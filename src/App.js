import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

const defaultColor = new Values('#f15025').all(10)

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(defaultColor)
  const [percent, setPercent] = useState(10)

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(parseInt(percent))
      colors = colors.slice(1) // remove first color -> #fff
      colors.pop() // remove last color   -> #000

      setList(colors)
      setError(false)
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            generate
          </button>
          <input
            type='range'
            min='5'
            max='20'
            step='5'
            className='right-input'
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
          />
          <p className='right-percent'>{percent}% shade</p>
        </form>
      </section>
      <section className='colors'>
        {list.map((item, idx) => {
          return <SingleColor color={item} key={idx} />
        })}
      </section>
    </>
  )
}

export default App
