import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleCounterComponent from './components/SimpleCounterComponent'
import PureCounterComponent from './components/PureCounterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SimpleCounterComponent/>
    <PureCounterComponent/>
    </>
  )
}

export default App




// import React, { Component ,PureComponent } from 'react'

// export default class Concept extends PureComponent {
//     constructor() {
//         super()
//         this.state = {
//             data: 10
//         }
//     }
//     render() {
//         console.log(this.state);
//         return (
//             <>
//                 <h1>Pure Component</h1>
//                 <h1>Data : {this.state.data}</h1>
//                 <button onClick={() => {
//                     this.setState({
//                         data: 100
//                     })
//                 }}>Update State</button>
//             </>
//         )
//     }
// }
