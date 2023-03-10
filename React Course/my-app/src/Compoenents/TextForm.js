import React, {useState} from 'react'




export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log('Uppercase was clicked: ' + text);
        let newText = text.toUpperCase();
        if(newText===""){
            props.showAlert("Text Area cannot be empty!!","warning");
        }else{    
            setText(newText);
            props.showAlert("Converted to UpperCase","success");
        } 
    }

    const handleOnChange = (event)=> {
        // console.log('On Change');
        setText(event.target.value);
    }

    const handleDownClick = ()=>{
        
        let newText = text.toLowerCase();
        if(newText===""){
                props.showAlert("Text Area cannot be empty!!","warning");
            }else{    
                setText(newText);
                props.showAlert("Converted to LowerCase","success");
            }    // console.log('Lowercase was clikced');
    }
    
    const handleCapClick = ()=>{
        let newText = text.toLowerCase();
        if(newText===""){
            props.showAlert("Text Area cannot be empty!!","warning");
       
        }else{
            let newText = text.toLowerCase().split(" ");
            for (let i = 0; i < newText.length; i++) {
                newText[i] = newText[i][0].toUpperCase()+newText[i].slice(1);
                
            }
            setText(newText.join(" "));
            props.showAlert("Converted to Capitalized","success");
        }
            // console.log('Lowercase was clikced');
    }

    const handleSentenceClick = ()=>{
        
        let newText = text.toLowerCase();
        if(newText===""){
            props.showAlert("Text Area cannot be empty!!","warning");
       
        }else{
            let newText = text.toLowerCase().split(". ");

            for (let i = 0; i < newText.length; i++) {
                
                newText[i] = newText[i][0].toUpperCase() + newText[i].slice(1);
            }
            setText(newText.join(". "));
            props.showAlert("Converted to Sentence Case","success");
            // console.log('Lowercase was clikced');
        }
    }

    const handleAtlClick = ()=>{
        let newText = text.toLowerCase();
        if(newText===""){
            props.showAlert("Text Area cannot be empty!!","warning");
       
        }else{
            let newText = text.toLowerCase().split("");

            for(let i=0;i<newText.length;i+=2){
                newText[i] = newText[i].toUpperCase();
            }
            setText(newText.join(""));
            props.showAlert("Converted to Alternating Case","success");
        }// console.log('Lowercase was clikced');
    }

    const handleCopy = ()=>{
        var newText = document.getElementById('myBox');
        newText.select();
        
        // navigator.clipboard.writeText(newText.value);  
        navigator.clipboard.writeText(newText.value);
        // return props.showAlert(msg,"success");
        // props.showAlert("Text copied to clipboard!","success");
    }

    


    const [text, setText] = useState('');

    const clear = ()=>{
        setText("");
        props.showAlert("Cleared","success");
    }


    return (
        <>
        <div className={`container mt-5`} style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#163a70', color: props.mode==='dark'?'white':'black'}} cols="20" rows="10" placeholder="Enter text here" className="form-control"></textarea>
            </div>
            <div className={`pt-3 d-flex justify-content-start`}>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Upper Case</button>
                <button className="btn btn-primary mx-1" onClick={handleDownClick}>Lower Case</button>
                <button className="btn btn-primary mx-1" onClick={handleSentenceClick}>Sentence Case</button>
                <button className="btn btn-primary mx-1" onClick={handleCapClick}>Capitalized Case</button>
                <button className="btn btn-primary mx-1" onClick={handleAtlClick}>aLtErNaTiNg cAsE</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={clear}>Clear</button>
                
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the TextBox  above to preview it here."}</p>
        </div>
            
        </>

    )
}
