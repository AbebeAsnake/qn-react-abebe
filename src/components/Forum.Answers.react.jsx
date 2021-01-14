import React from 'react';
import { ForumDispatcher } from '../js/dispatcher/ForumDispatcher';
import ForumAnswer from "./ForumAnswer.react";

class ForumAnswers extends React.Component{

  
    _onMarkCorrect (id){
        ForumDispatcher.Dispatcher({
            actionType: 'FORUM_ANSWER_MARKED_CORRECT',
            id: id
        });

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