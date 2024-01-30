import style from "../css/BoxesDisplay.module.css"
const BoxesDisplay = (props) => {
    // Step 13) Take in the state array and the remover function from props
    const {allBoxes, boxRemover} = props;
    return(
        // Step 14) Set the style to flex-wrap
        <div className={style.boxHolster}>
            {
                // Step 15) Create a series of divs for the boxes
                allBoxes.map((box, index) => (
                    // Step 16) Set the style values from the values in the iterated props array object
                    <div key={index} style={{backgroundColor: box.boxColor, width: box.boxSize + "px", height: box.boxSize + "px" }}>
                        {/* Step 17) Inside the mapped box, include a delete button with the input being the index*/}
                        {/* The button must call the function THROUGH an anonymous function to prevent it being called automatcally */}
                        <button onClick={()=>boxRemover(index)}>x</button>
                    </div>
                )
                )
            }
        </div>
    )
}

export default BoxesDisplay