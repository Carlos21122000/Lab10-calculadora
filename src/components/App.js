//import Header from '../Header.js';
import React, {Component} from "react";
import "./App.css";
import Button from './Button';
import Input from './Input';
import ClearButton from './ClearButton';
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        input: "",
        signo:"",
        val1: "",
        val2:"",
        resultado:"",
    };
  }

  AddInput(val){
    this.setState({ input: this.state.input + val });
  };

  Equal (){
    this.setState({ input: math.evaluate(this.state.input) });
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
                        <Button addVal={()=>this.setState({input: this.state.input + 7})}>7</Button>
                        <Button addVal={()=>this.setState({input: this.state.input + 8})}>8</Button>
                        <Button addVal={()=>this.setState({input: this.state.input + 9})}>9</Button>
                        <Button addVal={()=>this.setState({signo: "/",val1:this.state.input,input: ""})}>/</Button>
                    </div>
                    <div className="row">
                        <Button addVal={()=>this.setState({input: this.state.input + 4})}>4</Button>
                        <Button addVal={()=>this.setState({input: this.state.input + 5})}>5</Button>
                        <Button addVal={()=>this.setState({input: this.state.input + 6})}>6</Button>
                        <Button addVal={()=>this.setState({signo: "*",val1:this.state.input,input: ""})}>x</Button>
                    </div>
                    <div className="row">
                        <Button addVal={()=>this.setState({input: this.state.input + 1})}>1</Button>
                        <Button addVal={()=>this.setState({input: this.state.input + 2})}>2</Button>
                        <Button addVal={()=>this.setState({input: this.state.input + 3})}>3</Button>
                        <Button addVal={()=>this.setState({signo: "+",val1:this.state.input,input: ""})}>+</Button>
                    </div>
                    <div className="row">
                        <Button addVal={()=>this.setState({input: this.state.input + '.'})}>.</Button>
                        <Button addVal={()=>this.setState({input: this.state.input + 0})}>0</Button>
                        <Button addVal={()=>this.setState({input:math.evaluate(this.state.val1+this.state.signo+this.state.input)})}>=</Button>
                        <Button addVal={()=>this.setState({signo: "-",val1:this.state.input,input: ""})}>-</Button>
                    </div>
                    <div className="row">
                        <ClearButton handleClear={() => this.setState({ input: "",val1:"",val2:"",signo:"",result:"" })}>
                            Clear
                        </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;