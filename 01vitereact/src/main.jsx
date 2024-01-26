import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function NewApp(){
  return (
    <h1>Aman is here !</h1>
  )
}

// custom react 
/*
const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'clickme to visit Google mamu'

}
*/

// 2nd
const anotherElement = (
  <a href="https://google.com" target="_blank">Visit google.com </a>
)

const anotheruserInReact = "Chai peelo in react"

// 3) using react library - react element
const reactElement = React.createElement(
  'a', // first expected parameter is tag 
  { href:'https://google.com', target:'_blank'},
  'Google check',    // second parameter is expected an object it ads and set properties   give attributes
  anotheruserInReact // we cant use if else ect in objects thats this is the only reasaon for const user ass well 

)


ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement
  
)
