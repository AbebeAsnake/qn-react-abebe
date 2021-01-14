import React from 'react';
import PropTypes from 'prop-types';

class ForumAnswer extends React.Component{
    render(){
        const answer = this.props.answer;
        return(
<div className="panel panel-default">
    <div className="panel-body">
        {answer.body}

    </div>

</div>
        )
    }
}
ForumAnswer.propTypes = {
    answer: PropTypes.object.isRequired
  }
  
  export default ForumAnswer;