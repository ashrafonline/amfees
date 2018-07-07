import React, { Component } from 'react';



class Fees extends Component {
    render() {
       
       let cost=0;

        if(this.props.case === 1)
            cost=this.props.steps.service_1_1_input.value/100;
        if(this.props.case === 2)
            cost=this.props.steps.service_1_2_input.value;            
        if(this.props.case === 3){
            if(this.props.steps.service_1_3_input_3.value > 0)
                cost=this.props.steps.service_1_3_input_1.value*0.05*this.props.steps.service_1_3_input_2.value/this.props.steps.service_1_3_input_3.value;
            else 
                cost=0;    
        }
        if(this.props.case === 4){
            if(this.props.steps.service_1_4_input_3.value > 0)
                cost=this.props.steps.service_1_4_input_1.value*0.05*this.props.steps.service_1_4_input_2.value/this.props.steps.service_1_4_input_3.value;
            else 
                cost=0;    
        }
        if(this.props.case === 5)
            cost=this.props.steps.service_2_5_input_1.value * this.props.steps.service_2_5_input_2.value * 0.03;
        if(this.props.case === 6)
            cost=this.props.steps.service_2_5_input_1.value * this.props.steps.service_2_5_input_2.value * 0.02;            
        if(this.props.case === 7)
            cost=this.props.steps.service_3_2_input.value*300; 
        if(this.props.case === 8)
            cost=this.props.steps.service_3_3_input.value*1000;                
        if(this.props.case === 9)
            cost=this.props.steps.service_4_3_input.value*500;                            
        if(this.props.case === 10)
            cost=this.props.steps.service_4_4_input.value*7000;
        if(this.props.case === 11)
            cost=this.props.steps.service_4_5_input.value*10000;            
        if(this.props.case === 12)
            cost=this.props.steps.service_4_6_input.value;            

       return (
            <div>قيمة الرسوم : {cost} درهم</div>
        );
    }
}

export default Fees;