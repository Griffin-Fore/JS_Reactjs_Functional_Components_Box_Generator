import { useState } from 'react'
// In App.jsx:
  // Needs a setState function
  // Needs a delete selected filter through and return new array function
    // Needs to set the new array as state
// In form.jsx: 
  // text color and text size converted to nummber
// In display.jsx:
  // Needs a display map with index of divs that are squares
  // needs a button that calls on the filter delete to return a new array minus the deleteed at index

import './App.css'
import BoxesForm from './Components/BoxesForm'
import BoxesDisplay from './Components/BoxesDisplay'

function App() {
  // Setp 1) Create a an array of box items in state
  const [ boxes, setBoxes ] = useState([])
  console.log("boxes: ", boxes)
  // Step 2a) Create a function to add box items to the boxes array
  const boxUpdater = (newValue) => {
    console.log("new value: ", newValue)
    setBoxes((prevBoxes)=> [...prevBoxes, newValue])
  }
  // Step 2b) Create a function to remove a selected box from the array by index
  const boxRemover = (selectedIndex) => {
    const boxesMinusSelected = boxes.filter((box, index) => index !== selectedIndex)
    setBoxes(boxesMinusSelected)
  }
  return (
    <>
      {/* Step 3) Pass the setter function into the form component through props */}
      <BoxesForm boxUpdater={boxUpdater}/>
      {/* Step 12) Pass the state array and the state object remover function through props */}
      <BoxesDisplay allBoxes={boxes} boxRemover={boxRemover}/>
    </>
  )
}

export default App
