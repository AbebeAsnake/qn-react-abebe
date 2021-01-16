import React from 'react';
import { ForumDispatcher } from '../js/dispatcher/ForumDispatcher';
import ForumAnswer from "./ForumAnswer.react";
import ForumActions from '../actions/ForumActions'
class ForumAnswers extends React.Component{

  
    _onMarkCorrect (id){
        ForumActions.markAnswerCorrect(id);

    }
    render(){
        const  allAnswers = this.props.allAnswers;
         const answers = [];

        for(const key in allAnswers){
    answers.push(<ForumAnswer key={key} id={key} answer={allAnswers[key]} onMarkCorrect={this._onMarkCorrect}/>)
}
        return(
           <div>
               {answers}
           </div> 
        )
    }
}

export default ForumAnswers;