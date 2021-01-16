/** define the parent component */
import React from 'react';
import { ForumDispatcher } from '../js/dispatcher/ForumDispatcher';
import ForumAnswers from './Forum.Answers.react';
import ForumQuestion from './Forum.Question.react';
import ForumAddAnswerBox from './ForumAddAnswerBox.react';
import ForumHeader from "./ForumHeader.react";
import {ForumStore} from '../js/stores/ForumStore';
import ForumActions from '../actions/ForumActions';
class Forum extends React.Component {

   state = {
       
            allAnswers: ForumStore.getAnswers()     
    };
_onChange =()=>{
    this.setState({allAnswers: ForumStore.getAnswers()});
}
componentDidMount(){
    ForumStore.addChangeListener(this._onChange);
}
_onAddAnswer=(answerText)=>{
    ForumActions.addNewAnswer(answerText);
};
componentWillUnmount(){
    ForumStore.removeListener(this._onChange); 
}
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
            <ForumAddAnswerBox onAddAnswer ={this._onAddAnswer}/>
            </div>
        </div>);
       
    }
};
export default Forum;