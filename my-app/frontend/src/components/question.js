function Question({question}) {
    return (
        <li className="question" id={question._id}>
            <div className="questionText" id={question._id}>{question.questionText}</div>
            <ol className="answerOptions" id={question._id}>
                <li className="answerOption" id={question._id}>{question.answerOption0}</li>
                <li className="answerOption" id={question._id}>{question.answerOption1}</li>
                <li className="answerOption" id={question._id}>{question.answerOption2}</li>
                <li className="answerOption" id={question._id}>{question.answerOption3}</li>
            </ol>
            <div>
                <input type="text" name={"answer" + question._id} id={question._id} className="userAnswer"
                       placeholder="Ваш ответ"></input>
            </div>
            <div className="checkedAnswer" id={"checkedAnswer" + question._id}></div>
        </li>
    );
}
export default Question