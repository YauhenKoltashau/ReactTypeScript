import React, {useState} from 'react';


export const UncontrolledOnOff = () => {
    let [on, setOn] = useState(false)
    const onStyle = {
        width: '30px',
        height: '20px',
        padding: '2px',
        border: '2px solid #000',
        backgroundColor: on === true ? 'green': 'white',
        display: "inline-block"

    }
    const offStyle = {
        marginLeft: '2px',
        width: '30px',
        height: '20px',
        padding: '2px',
        border: '2px solid #000',
        backgroundColor: on === false ? 'red': 'white',
        display: "inline-block"
    }
    const detectorStyle = {
        marginLeft: '5px',
        width: '20px',
        height: '20px',
        borderRadius: '15px',
        padding: '2px',
        border: '2px solid #000',
        backgroundColor: on === true ? 'green': 'red',
        display: "inline-block"
    }



    return (<div>
            <div>
                <div style={onStyle} onClick={() => {
                    setOn(true)
                }}>ON
                </div>
                <div style={offStyle} onClick={() => {
                    setOn(false)
                }}>OFF
                </div>
                <div style={detectorStyle}></div>
            </div>


        </div>
    )
}
