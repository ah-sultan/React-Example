import React, { memo } from 'react'

const Counter = ({
    handleCount,
    count
}) => {

    // console.log('useCallBack Child Rendered')
    return (
        <div>

            <div>
                <button onClick={() => handleCount()}> Count {count}</button>
            </div>
        </div>
    )
}

export default memo(Counter)