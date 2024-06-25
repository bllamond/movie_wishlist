import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import StarRating from './StarRating'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10}/> */}
    {/* <StarRating  maxRating ={5} messages={["poor" , "less poor ", "ok ok " , "enough" , "omg"]}/> */}
  </React.StrictMode>,
)