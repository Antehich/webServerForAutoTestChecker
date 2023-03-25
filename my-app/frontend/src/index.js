import {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import Question from "./components/question.js";

class questionTemplate {
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

function App() {
    const [availableQuestionsList, setAvailableQuestionsList] = useState([]);
    const [randomQuestionsList, setRandomQuestionsList] = useState([]);
    useEffect(() => {
        async function getAllQuestions() {
            const response = await fetch('http://localhost:5500/api/appRequests/', {
                method: 'GET'
            });
                const data = await response.json()
                //console.log(data)
                setAvailableQuestionsList(data)
        }
        getAllQuestions()
    }, []);

/*    useEffect(() => {
        function getRandomQuestionsList() {
            let randomChosenQuestionsList = []
            for (let i = 1; i < 6; i++) {
                let randomQuestionIndex = Math.floor(Math.random() * availableQuestionsList.length);
                randomChosenQuestionsList.push(availableQuestionsList[randomQuestionIndex]);
                availableQuestionsList.splice(randomQuestionIndex, 1);
            }
            setRandomQuestionsList(randomChosenQuestionsList);
        }

        getRandomQuestionsList();
    }, []);
*/

    return (
        availableQuestionsList.map((question) => (
            <Question question={question}/>
        ))
    )
}


//========================================

const test = ReactDOM.createRoot(document.getElementById("test"))
test.render(<App/>);


