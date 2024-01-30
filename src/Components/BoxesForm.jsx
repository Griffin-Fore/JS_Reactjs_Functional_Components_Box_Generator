import { useState } from "react";

const BoxesForm = (props) => {
    // Step 4) Insert the setter through props
    const { boxUpdater } = props;
    // Step 5) Create state for the two values to be inserted into an object to be added to the state array
    const [boxColor, setBoxColor] = useState("")
    const [boxSize, setBoxSize] = useState("")

    const submitHandler = (e) => {
        // Step 8)  Prevent the page from refreshing
        e.preventDefault();
        // Step 9) Create an object with key/values from state
        let newBox = {
            boxColor,
            boxSize: parseInt(boxSize)
        }
        console.log("newBox color:", newBox.boxColor, "newBox size: ", newBox.size)
        // Step 10) Pass the object into the state setter function that adds the object to the state array
        boxUpdater(newBox)
        // Step 11) Reset the state values
        setBoxColor("")
        setBoxSize("")
    }

    return(
        <div>
            <h1>Box Generator</h1>
            {/* Step 7) Call the submit function */}
            <form onSubmit={submitHandler}>
                <label>Color</label>
                {/* Step 6) Set the future object varaiables in state */}
                <input type="text" value={boxColor} onChange={(e)=> setBoxColor(e.target.value)}/>
                <label>Size (pixels)</label>
                <input type="number" value={boxSize} onChange={(e)=> setBoxSize(e.target.value)}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default BoxesForm