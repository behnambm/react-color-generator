import React, { useState, useEffect } from 'react'

const SingleColor = ({ color }) => {
  const [alert, setAlert] = useState(false)
  const css_rgb = `rgb(${color.rgb.join(',')})`
  const hex = `#${color.hex}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <article
      className='color'
      style={{ backgroundColor: css_rgb }}
      onClick={() => {
        navigator.clipboard.writeText(hex)
        setAlert(true)
      }}
    >
      <p className='percent-value'>{color.weight}%</p>
      <p className='color-value'>{hex}</p>
      <p className={alert ? 'alert' : 'no-alert'}>copied to clipboard</p>
    </article>
  )
}

export default SingleColor
