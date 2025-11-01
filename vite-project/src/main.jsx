import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import Page from './pages/Page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Page/>
  </StrictMode>,
)


//  in se we achieve our goal by doing these steps 

// 1. create root -> get the root element from html {document.getElemntById('root)}
// 2. use render() method on selected root inside it define the lement u need  to render 
// 3. thats it for now 

// const h1Element = document.createElement('h1')
// h1Element.className ='header'
// h1Element.textContent = 'React is Great!'
// document.querySelector("#root").appendChild(h1Element)

