import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carda = (props) => {   

    const classes = () => {
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
        return 'card mb-3 mt-5' + bg + txt;
    }
    
    return (
        <div className = {classes()} style={{maxWidth: "30rem"}}>
            <div className="card-header"> {props.header} </div> 
            <div className="card-body">
                {props.title && (<h3 className="card-title">{props.title}</h3>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id="createStatus">{props.status}</div>)}
            </div>
        </div>
    );
}

export default Carda;