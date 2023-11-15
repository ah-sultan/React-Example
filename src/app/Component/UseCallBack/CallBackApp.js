'use client'

import React, { useCallback, useState } from 'react'
import Counter from './Counter'

const CallBackApp = () => {
    const [count, setCount] = useState(0)
    const [parentCount, setParentCount] = useState(0)

    const handleCount = useCallback(() => {
        setCount(count + 1)
    }, [count])



    return (
        <>
            <div className='wrapper'>
                <h3 className='title'>useCallBack Example</h3>
                <button onClick={() => setParentCount(parentCount + 1)}>Parent Count{parentCount}</button>
                <Counter handleCount={handleCount} count={count} />
            </div>
        </>
    )
}

export default CallBackApp