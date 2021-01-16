import React from 'react';
import PropTypes from 'prop-types';

class ForumAnswer extends React.Component{
    _markCorrect=()=>{
        this.props.onMarkCorrect(this.props.id);
    }

  
    render(){
        const answer = this.props.answer;
        let makAnswer;
        if(!answer.correct){
            makAnswer = <div className="pull-right"><small><a href="#" onClick={this._markCorrect}>Mark as correct</a></small></div>
        }

        var classNames = "panel-body";
        if(answer.correct){classNames += " bg-success"};
        return(
<div className="panel panel-default">
    <div className={classNames}>
        {answer.body}
{makAnswer}
</div>
    </div>
        )
    }
}
ForumAnswer.propTypes = {
    answer: PropTypes.object.isRequired,
    onMarkCorrect: PropTypes.func.isRequired
  }
  
  export default ForumAnswer;