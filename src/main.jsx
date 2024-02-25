import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

export const server = "http://localhost:3000/api"
export const RAZORPAY_ID_KEY="rzp_test_sjNvCjz4XbpjDR"
export const RAZORPAY_SECRET_KEY="5uukgw886e2PpJcgpAWlLgHD"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
