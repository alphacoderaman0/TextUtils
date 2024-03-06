import React from "react";

export default function Alert(props) {
    const capitalize=(word)=>{
        const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height: '50px'}}>
   { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show text-center fs-5`} role="alert">
     <strong className="text-center">{capitalize(props.alert.type)}</strong> : {props.alert.msg}
      {/* <button  type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>}
    </div>
  );
}
