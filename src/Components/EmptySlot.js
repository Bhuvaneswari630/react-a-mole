import { useEffect } from 'react';
const hillImg = require('../images/molehill.png')
function EmptySlot({ setDisplayMole, handleClick }) {
    useEffect(() => {
        let randSecs = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            setDisplayMole(true)
        }, randSecs)
        return () => clearTimeout(timer)
    })

    return (
        <div className='slot'>
            <img src={hillImg} alt='Hill' onClick={handleClick} />
        </div>
    )
}

export default EmptySlot