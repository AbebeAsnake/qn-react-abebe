/** define the parent component */
import React from 'react';
import ForumAnswers from './Forum.Answers.react';
import ForumQuestion from './Forum.Question.react';
import ForumAddAnswerBox from './ForumAddAnswerBox.react';
import ForumHeader from "./ForumHeader.react";

class Forum extends React.Component {

   state = {
       
            allAnswers:{
                "1": {
                    body: "Isn`t that about time travel?",
                    correct: false

            },
            "2": {
                body: "React and Flux are a tool and methodologies for building the fron end of web applications",
                correct: false
            },
            "3":{
                body: "React is a synonym for 'respond'",
                correct: false
            }
        }
        
    };

    render() { 

        return( 
        <div>
            <ForumHeader />
            <div className="container">
                <ForumQuestion/>
                <hr/>
            <ForumAnswers allAnswers={this.state.allAnswers}/>
            <hr/>
            <h4>Add an answer</h4>
            <ForumAddAnswerBox/>
            </div>
        </div>);
       
    }
};
export default Forum;