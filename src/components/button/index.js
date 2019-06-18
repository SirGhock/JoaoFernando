import React from "react";
import "./styles.css";

const clickButton = () =>{
    window.open('https://drive.google.com/file/d/1jhTG-6jE8ZJFxObWkKl3Arzp62rFwVk0/view?usp=sharing');
};
const Button = props => <button className="btn" onClick={clickButton}>{props.children}</button>;

export default Button;