import { useState } from 'react'

const ComplexState = () => {
    const [left, setLeft] = useState(0)
    const [right, setRigth] = useState(0)
    return (
        <div>
            {left}
            <button onClick={() => setLeft(left + 1)}>left</button>
            <button onClick={() => setRigth(right + 1)}>Right</button>
            {right}
        </div>
    )
}

export default ComplexState