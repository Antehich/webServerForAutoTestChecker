import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


async function getAllQuestions(){
    const response = await fetch('http://localhost:5500/api/appRequests/', {
        method: 'GET'
    })
    if (response.ok) {
       const json = await response.json()
        console.log(json[1])
        return json
    } else {
        console.log('error')
        return null
    }
}

const allQuestions = getAllQuestions()

class QuestionTemplate {
    constructor(questionText, answerOption0, answerOption1, answerOption2, answerOption3, rightOption) {
        this.questionText = questionText;
        this.answerOption0 = answerOption0;
        this.answerOption1 = answerOption1;
        this.answerOption2 = answerOption2;
        this.answerOption3 = answerOption3;
        this.rightOption = rightOption;
    }
}

function getRandomQuestion() {
    return new QuestionTemplate(allQuestions[1])
}

class Question extends React.Component{
    render() {
        return(
            <li className="question" id="0">
                <div className="questionText" id="0">{this.props.questionProps.questionText}</div>
                <ol className="answerOptions">
                    <li className="answerOption">{this.props.questionProps.answerOption0}</li>
                    <li className="answerOption">{this.props.questionProps.answerOption1}</li>
                    <li className="answerOption">{this.props.questionProps.answerOption2}</li>
                    <li className="answerOption">{this.props.questionProps.answerOption3}</li>
                </ol>
            </li>
        );
    }
}

class QuestionList extends React.Component{
    render() {
        return(
        <ol className="questionsBlock">
            <Question questionProps={getRandomQuestion()}/>
        </ol>
        );
    }
}

class Test extends React.Component {
    render() {
        return (<QuestionList />)
    }
}

//========================================

const test = ReactDOM.createRoot(document.getElementById("test"))
test.render(<Test />);


