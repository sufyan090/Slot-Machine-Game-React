import React from 'react'

function SlotMachineGame(props) {

    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    let {x,y,z} = props;

    if (x === y && y === z) {
        return (
            <>
                <div className='answer'>
                    <h1 className='emojies'>{x} {y} {z}</h1>
                    <h1 className='text'>This Is Matching</h1>
                    <hr />
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className='answer'>
                    <h1 className='emojies'>{x} {y} {z}</h1>
                    <h1 className='text'>This Is Not Matching</h1>
                    <hr />
                </div>
            </>
        )
    }
}


export default SlotMachineGame;