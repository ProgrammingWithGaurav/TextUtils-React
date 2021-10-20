import React from 'react'

export default function Commands(props) {
    return (
        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h2 className="text-danger">By pressing say commands button you can say the following commands:</h2>
            <p className="fs-5 my-3"><b className="fs-4 text-success">uppercase</b> : say this command to convert text into uppercase</p>
            <p className="fs-5 my-3"><b className="fs-4 text-success">lowercase</b> : say this command to convert text into lowercase</p>
            <p className="fs-5 my-3"><b className="fs-4 text-success">clear</b> : say this command to clear the whole text</p>
            <p className="fs-5 my-3"><b className="fs-4 text-success">copy</b> : say this command to copy the whole text</p>
            <p className="fs-5 my-3"><b className="fs-4 text-success">remove whitespace</b> : say this command to remove extra whitespace</p>
            <p className="fs-5 my-3"><b className="fs-4 text-success">read</b> : say this command when you want computer to read your text</p>
            <p className="fs-5 my-3"><b className="fs-4 text-success">sort</b> : say this command when you want to sort thr words according to alphabet order</p>
            <p className="fs-5 my-3"><b className="fs-4 text-success">reverse line</b> : say this command when you want to reverse all lines</p>
            <p className="fs-5 my-3"><b className="fs-4 text-success">reverse word</b> : say this command when you want to reverse each word of whole line</p>

        </div>
    )
}
