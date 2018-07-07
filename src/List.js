import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
        <div style={{ direction: 'rtl' }}>
            {this.props.options.map((option, i) => {     
                return (
                <button 
                key={i}
                onClick={
                    ()=>
                        this.props.triggerNextStep({
                            trigger:option.trigger
                        })
                    
                }
                style={
                    {
                        width:'100%',
                        padding:'5px',
                        textAlign:'center',
                        marginBottom:'5px',
                        cursor:'pointer',
                        fontFamily:'tahoma',
                        background:'#fff',
                        color:'#6e48aa'
                    }
                }
                >
                {option.label}
                </button>) 
            })}
        </div>
        );
    }
}

export default List;