import React, { useState } from 'react'
import { traverseTwoPhase } from 'react-dom/test-utils';


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log('on change')
        setText(event.target.value)
    }

    const handleCopy = () => {
        const text = document.querySelector('#textarea')
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
    }

    const handleReadText = () => {
        const speech = new SpeechSynthesisUtterance()
        speech.text = text

        window.speechSynthesis.speak(speech)
    }

    const handleAutoWrite = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
        const recognition = new SpeechRecognition()
        recognition.onstart = () => {
            console.log('voice is activated, you can to microphone')
        }
        
        recognition.onresult = (event) => {
            const current = event.resultIndex
            const transcript = event.results[current][0].transcript
            console.log(transcript)
            setText(text + transcript)
        
        }
        recognition.start()        
    }
    const [text, setText] = useState('');
    // text = 'new text'; // wrong way to change the state
    // setText('new Text');  // correct way to change the state
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="textarea" rows="8" placeholder="Enter your text here"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Conver to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Conver to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra WhiteSpcaes</button>
                <button className="btn btn-primary mx-2" onClick={handleReadText}>Read Text</button>
                <button className="btn btn-primary mx-2" onClick={handleAutoWrite}>Say the Text</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(' ').length} and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
