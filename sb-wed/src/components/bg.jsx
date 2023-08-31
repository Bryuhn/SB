import React from 'react'
import bottom from "../assests/bottom.jpg"
import top from "../assests/top.jpg"

const Bgtester = () => {
  return (
    <div>
        <img
            className="fixed inset-x-0 top-0"
            src={top}
            alt="top">
        </img>
        <img
            className="fixed inset-x-0 bottom-0"
            src={bottom}
            alt="bottom">
        </img>
    </div>
  )
}

export default Bgtester