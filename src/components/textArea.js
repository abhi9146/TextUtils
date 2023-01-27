import React, {useState} from 'react'
export default function TextArea() {
  const [text , setText ] = useState('');

  const toUpper = () => {
    let temp=text.toUpperCase("");
    setText(temp);
  }
  const toLower = () => {
    let temp=text.toLowerCase("");
    setText(temp);
  }
  const clearText = () => {
    let temp="";
    setText(temp);
  }
  const removeSpaces = ()=> {
    let textArr = text.split(" ");
    let newText = textArr.join(" ");    
    let newArr = newText.split(/[ ]+/);
    setText(newArr.join(" "));
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
    <div className='container'>
      <div className="mb-3">
      <h2 >Enter Ur Text </h2>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybpx" rows="8"></textarea>
      </div>
    <button className="btn btn-primary mx-2"  onClick={toUpper}>To UpperCase</button>
    <button className="btn btn-primary mx-2"  onClick={toLower}>To LowerCase</button>
    <button className="btn btn-primary mx-2"  onClick={clearText}>Clear text</button>
    <button className="btn btn-primary mx-2"  onClick={removeSpaces}>Reme Extra Spaces</button>
    </div>

    <div className="container">
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} Words</p>
        <p>{text.length} Characters</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
    )
}
