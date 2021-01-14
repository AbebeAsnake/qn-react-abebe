import React from 'react';
import PropTypes from 'prop-types';

class ForumAnswer extends React.Component{
    _markCorrect=()=>{
        this.props.onMarkCorrect(this.props.id);
    }
    render(){
        const answer = this.props.answer;
        return(
<div className="panel panel-default">
    <div className="panel-body">
        {answer.body}
<div className="pull-right">
<small><a href="#" onClick={this._markCorrect}>Mark as correct</a></small>
</div>
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