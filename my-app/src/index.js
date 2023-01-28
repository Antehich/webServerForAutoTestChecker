import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class QuestionTemplate {
    constructor(_id, questionText, answerOption0, answerOption1, answerOption2, answerOption3, rightOption) {
        this.id = _id;
        this.questionText = questionText;
        this.answerOption0 = answerOption0;
        this.answerOption1 = answerOption1;
        this.answerOption2 = answerOption2;
        this.answerOption3 = answerOption3;
        this.rightOption = rightOption;
    }
}

/*function getRandomQuestion() {
    const p = allQuestions[0]
    //console.log(p)
    //const q = new QuestionTemplate(p._id, p.questionText, p.answerOption0, p.answerOption1, p.answerOption2, p.answerOption3, p.rightOption)
    //console.log(q)
    //return q
    return new QuestionTemplate(allQuestions[Math.floor(Math.random()*allQuestions.length)])
}*/

function Question({question}) {

    return (
        <li className="question" id={question.id}>
            <div className="questionText" id={question.id}>{question.questionText}</div>
            <ol className="answerOptions" id={question.id}>
                <li className="answerOption" id={question.id + 1} key={question.id + 1}>{question.answerOption0}</li>
                <li className="answerOption" id={question.id + 2} key={question.id + 2}>{question.answerOption1}</li>
                <li className="answerOption" id={question.id + 3} key={question.id + 3}>{question.answerOption2}</li>
                <li className="answerOption" id={question.id + 4} key={question.id + 4}>{question.answerOption3}</li>
            </ol>
            <div>
                <input type="text" name={"answer" + question.id} id={question.id} className="userAnswer"
                       placeholder="Ваш ответ"></input>
            </div>
            <div className="checkedAnswer" name={"checkedAnswer" + question.id}></div>
        </li>
    );
}

function App() {
    const [availableQuestionsList, setAvailableQuestionsList] = React.useState([]);
    const [randomQuestionsList, setRandomQuestionsList] = React.useState([]);
    React.useEffect(() => {
        async function getAllQuestions() {
            const response = await fetch('http://localhost:5500/api/appRequests/', {
                method: 'GET'
            });
            if (response.ok) {
                const json = await response.json();
                console.log(json);
                setAvailableQuestionsList(json);
                console.log(availableQuestionsList)
            } else {
                console.log('error')
                setAvailableQuestionsList(['Server is not available!'])
            }
        }

        getAllQuestions();
    }, []);

    function onClick() {
    }

    React.useEffect(() => {
        function getRandomQuestionsList() {
            let randomChosenQuestionsList = []
            for (let i = 1; i < 6; i++) {
                let randomQuestionIndex = Math.floor(Math.random() * availableQuestionsList.length);
                randomChosenQuestionsList.push(availableQuestionsList[randomQuestionIndex]);
                availableQuestionsList.splice(randomQuestionIndex, 1);
            }
            //console.log(randomChosenQuestionsList)
            setRandomQuestionsList(randomChosenQuestionsList);
        }

        getRandomQuestionsList();
    }, []);


    return (
        randomQuestionsList.map((question) => (
            <Question question={question}/>
        ))
    )
}


//========================================

const test = ReactDOM.createRoot(document.getElementById("test"))
test.render(<App/>);


