import React from 'react'

export default function About(props) {

    // const [myStyle,setMyStyle] = useState({
    //     color:'white',
    //     backgroundColor:'#042743'
    // })
    // const [btnText,setBtnText] = useState("Enable Dark Mode")
    // const toggleStyle = ()=>{
    //     if(myStyle.color ==='black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'#042743'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

    let myStyle={
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? '#032e51ad' : 'white'
    }
  return (
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white'}} >
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <strong className='fs-5'> Analyze your Text :</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils gives you a way to Analyze your text Quickly and Efficiently. be it word count, Character Count or</div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong className='fs-5'>Free to Use :</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text . textutils reports the number of words and characters . thus it is suitable for writing text with word/ charaacter limit .
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong className='fs-5'>Browser Compatible :</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                 this word counter software works in any web browsers such as chrome , firefox , internet Explorer, Safari , Opera . it suits to count characters in facebook ,blogs , books , excel , documents , essays  etc.
            </div>
            </div>
        </div>
        </div>
        {/* <div className="container my-3">
            <button className='btn btn-primary' onClick={toggleStyle}>{btnText}</button>
        </div> */}
    </div>
  )
}
