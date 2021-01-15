import React from 'react';
class ForumAddAnswerBox extends React.Component{

    state={
        value: ''
    };
    _addAnswer =() =>{
this.props.onAddAnswer(this.state.value);
    };
    _onChange =(event) => {
this.setState({value: event.target.value});
    }
    render(){
        return(
            <div>
                <textarea id="addAnswer" className="col-md-6 col-xs-8" onChange={this._onChange}>

                </textarea>
                &nbsp; <input type="button" className="btn btn-primary" value="Add" onClick={this._addAnswer}/>    
                </div>
        )
    }
}

export default ForumAddAnswerBox;