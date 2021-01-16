import { ForumDispatcher } from "../js/dispatcher/ForumDispatcher"
import ForumConstant from '../constants/ForumConstants'
const ForumActions = {addNewAnswer: function (answerText) {
        ForumDispatcher.Dispatcher({
            actionType: ForumConstant.FORUM_ANSWER_ADDED,
            answer: answerText
        })
    },
    markAnswerCorrect: function (id) {
        
        ForumDispatcher.Dispatcher({
            actionType: ForumConstant.FORUM_ANSWER_MARKED_CORRECT,
            id:id
        });
    }
    
}
export default ForumActions;