  
import React from "react";
import "./ClearButton.css";

class ClearButton extends React.Component {
    render() {
        return (
            <div className="ClearButton" onClick={this.props.handleClear}>
                {this.props.children}
            </div>
        );
    }
};
export default ClearButton;