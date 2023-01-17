
import React, {useState} from "react";
export default function Textform(props){
  const [text,setText]=useState('Enter text here...');
  function Reverse(text){
    let ReverseStr=" ";
    for(let i=text.length-1;i>=0;i--){
      ReverseStr=ReverseStr + text[i];
    }
    return ReverseStr; 

  }
  const ChangeToUppercase=()=>{
    //console.log("Uppercase is clicked");
    let upperCase=text.toUpperCase();
    setText(upperCase);
   // props.showAlert("Converted to Uppercase","success")

  }
  const ChangeToLowercase=()=>{
    ////console.log("Lowercase is clicked");
    let lowerCase=text.toLowerCase();
    setText(lowerCase);
   // props.showAlert("Converted to Lowercase","success")
  }
  const ReverseString=()=>{
    console.log("Reverse is clicked");
    let ReverseS=Reverse(text);
    setText(ReverseS)
    //props.showAlert("String reversed","success")
  }
  const ClearString=()=>{
    let clear="";
    setText(clear)
    //props.showAlert("Cleared","success")
  }

  const handleOnchange=(event)=>{
    console.log("On change");
    setText(event.target.value)

  }
  //setText("UpperCase");
    return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>     
      <div className="mb-3">
       <label htmlFor="Textarea" className="form-label"><h1>{props.heading}</h1></label>
    <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}id="textarea" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-3" onClick={ChangeToUppercase}>Convert to upperCase</button>
    <button className="btn btn-primary mx-3" onClick={ChangeToLowercase}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-3" onClick={ReverseString}>Reverse</button>
    <button className="btn btn-primary mx-3" onClick={ClearString}>ClearText</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}} >
      <h2>Text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>Time required to read: {0.008*text.split(" ").length}</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Enter in the textbox to preview here.'}</p>
      </div>
    </>
    )
}


