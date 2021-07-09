import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(prevState => prevState + 1)
  }

  const countDown = () => {
    setCount(prevState => prevState - 1)
  }

  useEffect(() => {
    // console.log("Current count is...", count);
    console.log('didmount');
  }, [])

  return (
    <div>
      <p>現在のカウント：{count}</p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>Down</button>
    </div>
  )
}

export default Counter;