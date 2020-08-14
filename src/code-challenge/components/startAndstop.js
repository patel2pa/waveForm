import React from "react";


class StartAndStop extends React.Component{
    state = {
        switch:false
    }

    renderSwitch = () => {
        if (this.props.switch){
            return "Stop"
        }
        else{
            return "Start"
        }
    }

    set_Start = () =>{
        this.setState({switch:!this.state.switch})
        this.props.callbackFromParent(this.state.switch)
    }


    render(){
        return(
            <div className = "switchButton">
                <button onClick = {this.props.callbackFromParent}> { this.renderSwitch() } </button>
            </div>
        )
    }
}


export default StartAndStop;