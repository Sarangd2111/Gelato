import React from 'react'
import './stylesheets/button.css'

const Button = ({type, content, icon, dropdown}) => {
    var button;
    if(icon && !dropdown){
        button = <button className={type}>
            <img src={icon} alt="" className='buttonIcon'/>
            <span>{content}</span>
        </button>
    }else if(icon && dropdown){
        button = <button className={type}>
            <img src={icon} alt="" className='buttonIcon'/>
            <span>{content}</span>
            <img src={dropdown} alt="" style={{height:'18px',marginLeft:'7px'}}/>
        </button>
    }else{
        button = <button className={type}>
            <span>{content}</span>
        </button>
    }
    return (<div className="Button">{button}</div>);
}

export default Button
