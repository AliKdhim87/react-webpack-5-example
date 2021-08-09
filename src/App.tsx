import { useState } from "react"
import "./styles.css"

import WebpackSVG from "./webpack.svg"
import styles from "./app.module.css"

export const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1 className={styles.App}>Hello world!!</h1>
      <p>{process.env.NODE_ENV}</p>
      <img src={WebpackSVG} alt="" width="300" height="300" />
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
      <button onClick={() => setCount(0)}>reset</button>
      <p>{count}</p>
    </div>
  )
}
