import { useState } from "react"
import Mole from "./Mole"
import EmptySlot from "./EmptySlot"

function MoleContainer({ score, setScore }) {
    let [displayMole, setDisplayMole] = useState(false)
    const handleMoleClick = (e) => {
        setScore(score + 1)
        setDisplayMole(false)
    }
    const handleHillClick = (e) => {
        setScore(score - 1)
        // setDisplayMole(false)
    }

    return (
        <div>
            {displayMole ?
                <Mole setDisplayMole={setDisplayMole} handleClick={handleMoleClick} />
                :
                <EmptySlot setDisplayMole={setDisplayMole} handleClick={handleHillClick} />}
        </div>
    )
}

export default MoleContainer