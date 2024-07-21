import React from 'react';
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"


function AppLaout() {
  return (
    <>
    <div className="bg-gradient-to-r from-black to-slate-700 min-h-screen">
    <Header/>

    <Body />
    </div>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render( <AppLaout />)