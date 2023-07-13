import React,{useState} from 'react'
import logo from "../../assets/logo24.svg";

const Logo = (props) => {
  const logClass = props.collapsed ? "logo-text-close" :  "logo-text-open" 
  
  return (
    <div className="logo" style={{transform:"scale(0.8)"}}>
    <span>
      {" "}
      <img src={logo} className="logo-img" />
    </span>
    <span id="logo-text" className={`logo-text ${logClass}`}>
      {" "}
      AI Nav
    </span>
  </div>
  )
}

export default Logo