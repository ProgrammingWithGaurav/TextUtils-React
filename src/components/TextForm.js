import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('converted to uppercase', 'success')
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('converted to lowercase', 'success')
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert('Text Cleared', 'success')
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopy = () => {
        const text = document.querySelector('#textarea')
        text.select()
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
        props.showAlert('Copied to clipboard!', 'success')
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
        props.showAlert('whitespaces removed!', 'success')
    }

    const handleReadText = () => {
        const speech = new SpeechSynthesisUtterance()
        speech.text = text

        window.speechSynthesis.speak(speech)
        props.showAlert('Reading Texts', 'success')
    }

    const handleTalktoType = () => {
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
        props.showAlert('say to write text', 'success')
    }
    const [text, setText] = useState('');
    // text = 'new text'; // wrong way to change the state
    // setText('new Text');  // correct way to change the state
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white':'black'}}>
                <h1 className="my-3">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? '#13466e': 'white', color: props.mode === 'dark' ? 'white':'black'}} id="textarea" rows="8" placeholder="Enter your text here"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Conver to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Conver to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra WhiteSpcaes</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleReadText}>Read Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleTalktoType}>Talk to Type</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(' ').filter((element) => {return element.length!==0}).length} and {text.length} characters</p>
                <p>{0.008 * text.split(' ').filter((element) => {return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Nothing to preview!'}</p>
            </div>
        </>
    )
}
