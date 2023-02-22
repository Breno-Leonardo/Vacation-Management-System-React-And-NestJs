import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Container } from './components/Container'

let isExpanded = false;

function App() {

return (
<div className="App">
  <Header></Header>
  <div className="bodyContent">
   
    <div className="content">
      <Container title="Time"></Container>
    </div>
  </div>
</div>
)
}

export default App