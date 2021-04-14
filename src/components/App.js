
import React, {Component} from "react";
import "./App.css";
import Button from './Elements/Button';
import Input from './Elements/Input';
import ClearButton from './Elements/ClearButton';
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        input: "",
        SimboloMat:"",
        PrimerIngreso: "",
        SegundoIngreso:"",
        Donee: false,
    };
  }
  render() {
    const { input, Donee } = this.state;

    function LenghtLimitY() {
      console.log("funciona")
      return <Input input={input.substring(0, 5)} />;
    }

    function LenghtLimitN() {
      return <Input input={input} />;
    }

    function FinalMessage() {
      if (Donee === true) {
        return <LenghtLimitY />;
      }
      return <LenghtLimitN />;
    }
    return (
      <div className="titulo"> Calculadora
        <div className="app">
          <div className="container">
            <FinalMessage/>
              <div className="row1">
                <ClearButton handleClear={() => this.setState({ input: "",PrimerIngreso:"",SegundoIngreso:"",SimboloMat:"",result:"" })}>
                  AC
                </ClearButton>
                <Button ingresar={()=>this.setState({input: math.evaluate("-1 * " + this.state.input)})}>
                  +/-
                </Button>
                <Button ingresar={()=>this.setState({SimboloMat: "%",PrimerIngreso:this.state.input /100, Donee:false })}>
                  %
                </Button>
                <Button ingresar={()=>this.setState({SimboloMat: "/",PrimerIngreso:this.state.input,input: "", Donee:false})}>
                  /
                </Button>
              </div>
               <div className="row2">
                  <Button ingresar={()=>this.setState({input: this.state.input + 7, Donee:false})}>
                    7
                  </Button>
                  <Button ingresar={()=>this.setState({input: this.state.input + 8, Donee:false})}>
                    8
                  </Button>
                  <Button ingresar={()=>this.setState({input: this.state.input + 9, Donee:false})}>
                    9
                  </Button>
                  <Button ingresar={()=>this.setState({SimboloMat: "*",PrimerIngreso:this.state.input,input: "", Donee:false})}>
                    x
                  </Button>
                </div>
                <div className="row3">
                  <Button ingresar={()=>this.setState({input: this.state.input + 4, Donee:false})}>
                    4
                  </Button>
                  <Button ingresar={()=>this.setState({input: this.state.input + 5, Donee:false})}>
                    5
                  </Button>
                  <Button ingresar={()=>this.setState({input: this.state.input + 6, Donee:false})}>
                    6
                  </Button>
                  <Button ingresar={()=>this.setState({SimboloMat: "-",PrimerIngreso:this.state.input,input: ""})}>
                    -
                  </Button>
                </div>
                <div className="row4">
                  <Button ingresar={()=>this.setState({input: this.state.input + 1, Donee:false})}>
                    1
                  </Button>
                  <Button ingresar={()=>this.setState({input: this.state.input + 2, Donee:false})}>
                    2
                  </Button>
                  <Button ingresar={()=>this.setState({input: this.state.input + 3, Donee:false})}>
                    3
                  </Button>
                  <Button ingresar={()=>this.setState({SimboloMat: "+",PrimerIngreso:this.state.input,input: "", Donee:false})}>
                    +
                  </Button>
                </div>
                <div className="row5">
                  <Button ingresar={()=>this.setState({input: this.state.input + '.', Donee:false})}>
                    .
                  </Button>
                  <Button ingresar={()=>this.setState({input: this.state.input + 0, Donee:false})}>
                    0
                  </Button>
                  <Button ingresar={()=>this.setState({input:math.evaluate(this.state.PrimerIngreso+this.state.SimboloMat+this.state.input)})}>
                    =
                  </Button>            
                </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;