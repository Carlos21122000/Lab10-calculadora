import React from "react";
import "./Button.css";

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
};

class Button extends React.Component {
    render() {
        return (

            <div className={`button ${isOperator(this.props.children) ? null : "opt"}`} onClick={() => this.props.handleClick(this.props.children)}
                onClick={this.props.ingresar}
            >
                {this.props.children}
            </div>
        );
    }
};
export default Button;