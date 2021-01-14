import React from 'react';
import ForumAnswer from "./ForumAnswer.react";

class ForumAnswers extends React.Component{

  

    render(){
        const  allAnswers = this.props.allAnswers;
         const answers = [];

        for(const key in allAnswers){
    answers.push(<ForumAnswer key={key} id={key} answer={allAnswers[key]}/>)
}
        return(
           <div>
               {answers}
           </div> 
        )
    }
}

export default ForumAnswers;