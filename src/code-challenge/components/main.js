import React from "react";
import RenderWave from "./renderWave";
import StartAndStop from "./startAndstop";

class Main extends React.Component{
    state = {
        switch:false
    }
    myCallback = (dataFromChild) => {
        this.setState({switch:!this.state.switch})
    }

    render(){
        
        return(
            
            <div className="App">
                <RenderWave switch = {this.state.switch}/>
                <StartAndStop callbackFromParent={this.myCallback} switch ={this.state.switch}/>
            </div>
        )
    }
}

export default Main;
