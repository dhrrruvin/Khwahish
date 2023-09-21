import React, {useState, useEffect} from 'react'
import './Cursor.css'

const Cursor = ({cursorStyle, expand}) => {

  console.log(cursorStyle);
  console.log(expand);

  return (
    <>
      <div
      className={`cursor ${expand ? 'expand' : ''}`}
      style={{
        top: cursorStyle.top +'px',
        left: cursorStyle.left +'px'
      }}></div>
    </>
  )
}

export default Cursor