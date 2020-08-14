import React from "react";
import {generate} from "../waveform"
import Slider from "./slider"


class WaveForm extends React.Component{

    state = {
        xyPoints:null,
        t:0,
        start:false,
        value: 1
    }

    componentWillMount = () => {
        let d = "M" + this.getCoordinatePoints().map(p => {
            return  p[0] + "," + p[1]    
        }).join(" L")
        this.setState({xyPoints:d})    
    }

    componentDidMount = () => {
        setInterval(()=>this.renderCoordinatePoints(), (1000/60))
    }

    getCoordinatePoints = () =>{
        let timer_ = this.state.t;
        console.log(timer_)
        this.setState({t:timer_+this.state.value})
        let points = generate(timer_).map(x=>{
            let y = 200 + 40 * Math.cos((x+timer_)/10)
            return [x*4, y]
        })
        return points
    }

    renderCoordinatePoints = () => {
        if (this.props.switch == true){
        let d = "M" + this.getCoordinatePoints().map(p => {
            return  p[0] + "," + p[1]    
        }).join(" L")
        this.setState({xyPoints:d})
        }
    }

    handleChange = value => {
        this.setState({
          value: value
        })
      };



    renderSVG = () =>{

        return <svg>
            <path d = {this.state.xyPoints}/>
        </svg>
    }

    render(){
        return(
        <div>
            <div className = "SVG">
                   {this.renderSVG()}
            </div>
            <Slider handleChange = {this.handleChange} value = {this.state.value}/>
        </div>
        )
    }
}

export default WaveForm;