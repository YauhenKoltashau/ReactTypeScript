import React from 'react';
export type OnOffType = boolean
export type OnOffPropsType = {
    callBack: (value:OnOffType )=> void
    on: OnOffType
}
export const OnOff = (props:OnOffPropsType) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        padding: '2px',
        border: '2px solid #000',
        backgroundColor: props.on === true ? 'green': 'white',
        display: "inline-block"

    }
    const offStyle = {
        marginLeft: '2px',
        width: '30px',
        height: '20px',
        padding: '2px',
        border: '2px solid #000',
        backgroundColor: props.on === false ? 'red': 'white',
        display: "inline-block"
    }
    const detectorStyle = {
        marginLeft: '5px',
        width: '20px',
        height: '20px',
        borderRadius: '15px',
        padding: '2px',
        border: '2px solid #000',
        backgroundColor: props.on === true ? 'green': 'red',
        display: "inline-block"
    }
    const onClickOn = () => {
        props.callBack(true)
        }
    const onClickOff = () => {
        props.callBack(false)

    }

    return (<div>
            <div>
                <div style={onStyle} onClick={onClickOn}>ON
                </div>
                <div style={offStyle} onClick={onClickOff}>OFF
                </div>
                <div style={detectorStyle}></div>
            </div>


        </div>
    )
}
