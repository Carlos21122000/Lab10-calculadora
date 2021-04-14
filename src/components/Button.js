  
import React from "react";
import "./Button.css";

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
};

class Button extends React.Component {
    render() {
        return (

            <div className={`btn-case ${isOperator(this.props.children) ? null : "operador"}`} onClick={() => this.props.handleClick(this.props.children)}
                onClick={this.props.addVal}
            >
                {this.props.children}
            </div>


        );
    }
};
export default Button;