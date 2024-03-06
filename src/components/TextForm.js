import React , {useState} from 'react'

export default function TextForm(props) {
    const uppercase = ()=>{
        console.log("Uppercase was clicked "+ text);
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("converted into Uppercase", "success")
    }
    const lowercase = ()=>{
        console.log("lowercase was clicked "+ text);
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("converted into Lowercase", "success")
    }
    const clear = ()=>{
        console.log("capitalize was clicked "+ text);
        let newText = ''
        setText(newText)
        props.showAlert("Text Cleared", "danger")
    }
    const copy = ()=>{
       navigator.clipboard.writeText(text);
       props.showAlert("Text Copied !", "info")
    }
    const extraspace = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra Space Removed", "success")
    }
    const change = (event)=>{
        console.log("You Wanna change the text")
        setText(event.target.value)
    }
    const [text,setText] = useState('');
  return (
    <div>
        <div className="mb-3" style={{color : props.mode === 'dark' ? 'white':'#042743'}}>
            <h2 className="text-center mb-4" style={{textDecoration:'underline'}}>{props.heading}</h2>
            <textarea className="form-control fs-5" placeholder='Enter Your Text here . . .' id="myBox" rows="8" value={text} onChange={change} style={{color : props.mode === 'dark' ? 'white':'#042743',backgroundColor: props.mode === 'dark' ? '#2864957a':'white',boxShadow:'0px 0px 10px'}}></textarea>
        </div>
        <div className="text-center">
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={uppercase}>UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={lowercase}>LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copy}>Copy</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={extraspace}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-danger  mx-1 my-1" onClick={clear}>Clear Text</button>
        </div>
        <div className="container my-4 " style={{color : props.mode === 'dark' ? 'white':'#042743',borderColor:props.mode === 'dark' ? 'white':'#042743',borderRadius:'10px', boxShadow:'0px 0px 10px '}}>
            <h1 className='text-center'style={{textDecoration:'underline'}}>Your Text Summary</h1>
            <p className='fs-3'> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
            <p className='fs-3'> {0.008 *text.split(/\s+/).filter((element)=>{return element.length!==0}).length } Minutes to Read</p>
            <h2>Preview</h2>
            <p className='fs-4'>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
    </div>
  )
}
// #042743