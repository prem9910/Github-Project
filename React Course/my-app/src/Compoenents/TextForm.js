import React, {useState} from 'react'




export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log('Uppercase was clicked: ' + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event)=> {
        // console.log('On Change');
        setText(event.target.value);
    }

    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        // console.log('Lowercase was clikced');
    }
    
    const handleCapClick = ()=>{
        let newText = text.toLowerCase().split(" ");

        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i][0].toUpperCase()+newText[i].slice(1);
            
        }
        setText(newText.join(" "));
        // console.log('Lowercase was clikced');
    }

    const handleSentenceClick = ()=>{
        let newText = text.toLowerCase().split(". ");

        for (let i = 0; i < newText.length; i++) {
            
            newText[i] = newText[i][0].toUpperCase() + newText[i].slice(1);
            
        }
        setText(newText.join(". "));
        // console.log('Lowercase was clikced');
    }

    const handleAtlClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        // console.log('Lowercase was clikced');
    }

    


    const [text, setText] = useState('');

    const clear = ()=>{
        setText("");
    }


    return (
        <>
        <div className='container mt-5'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea id="myBox" value={text} onChange={handleOnChange} cols="20" rows="10" placeholder="Enter text here" className="form-control"></textarea>
            </div>
            <div className="pt-3 d-flex justify-content-start">
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Upper Case</button>
                <button className="btn btn-primary mx-1" onClick={handleDownClick}>Lower Case</button>
                <button className="btn btn-primary mx-1" onClick={handleSentenceClick}>Sentence Case</button>
                <button className="btn btn-primary mx-1" onClick={handleCapClick}>Capitalized Case</button>
                <button className="btn btn-primary mx-1" onClick={handleAtlClick}>aLtErNaTiNg cAsE</button>
                <button className="btn btn-primary mx-1" onClick={clear}>Clear</button>
                
            </div>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
            
        </>

    )
}
