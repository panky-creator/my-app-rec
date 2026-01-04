import React,{useState} from 'react'

export default function TextFrom(props) {

    const handleUpClick=()=>{
        // console.log("handle up was click"+ text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted into Uppercase", "success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted into Lowercase", "success");
    }

    const handleOnChange=(event)=>{
        // console.log("on onChange");
        setText(event.target.value);
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Has Been Removed", "success");
    }

    const handleCls=()=>{
        setText("");
        props.showAlert("Cleared", "success");
    }
    const[text , setText]=useState('Enter your text here');

  return (
    <>
    <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.tile}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>ConvertToUpperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>ConvertToLowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleCls}>Clear</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    <div className="contianer my-3" style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>Summary of your text</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>Requres {0.008 *text.split(" ").length } to read</p>

        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
