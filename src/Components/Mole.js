import { useEffect } from "react"
const moleImg = require('../images/mole.png')
function Mole({ setDisplayMole, handleClick }) {
    useEffect(() => {
        let randSecs = Math.ceil(Math.random() * 2000)
        let timer = setTimeout(() => {
            setDisplayMole(false)
        }, randSecs)
        return () => clearTimeout(timer)
    })

    return(
        <div className="slot">
             <img src={moleImg} alt='Mole' onClick={handleClick} />
        </div>
    )
}

export default Mole