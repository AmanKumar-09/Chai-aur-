import ReactDOM from "react-dom/client"
import React from 'react'
import Header from "./components/Header"


function AppLaout() {
  return (
    <div>App - I have created my first react app by miself</div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render( <Header />)