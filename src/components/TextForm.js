import React, {useState} from 'react';


export default function TextForm(props) {

  const handleUpclick = ()=>{
      //console.log("Uppercase was clicked"+text);
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to Uppercase!" ,"success");
  }

  const handleLoclick = ()=>{
    //console.log("Uppercase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!" ,"success");
}
  
const handleclearclick = ()=>{
  //console.log("Uppercase was clicked"+text);
  let newText = '';
  setText(newText)
  props.showAlert("Text cleared!" ,"success");
}

const handlecopy = ()=>{
  var text = document.getElementById("myBox");
  text.select();
  text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copy to Clipboard!" ,"success");
}

const handleExtraSpaces = ()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra Spaces Removed!" ,"success");
}



  const handleOnChange =(event)=>{
      //console.log("On change");
      setText(event.target.value);
  }
  const [text, setText] = useState("");
  
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
         <div className="mb-3">
        <textarea className="form-control mb-2" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary mx-1 " onClick={handleUpclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 " onClick={handleLoclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 " onClick={handleclearclick}>Clear text</button>
        <button className="btn btn-primary mx-1 " onClick={handlecopy}>Copy text</button>
        <button className="btn btn-primary mx-1 " onClick={handleExtraSpaces}>Remove Extra Spaces</button>
       </div>
</div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.0008 *text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
    </div>
  </>
  )
}
