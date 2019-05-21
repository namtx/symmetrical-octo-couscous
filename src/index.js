import React from 'react'
import ReactDOM from 'react-dom'
import "./index.scss"

const App = () => {
  return (
    <div className="container">
      <h1 className="lemon-header">Lemon Header</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
