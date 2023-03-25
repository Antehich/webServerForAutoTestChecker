const correctAnswers={
    'answer0': '4',
    'answer1': '2',
    'answer2': '14',
    'answer3': '13',
    'answer4': '15'}

function checker(data){
    let result = ''
    for (const element in data){
        console.log(element)
        if (element in correctAnswers) {
            result += '1'
        }
        else{
            result += '0'
        }
    }
    return result
}
//console.log(checker({"answer0":"4","answer1":"2","answer2":"13","answer3":"13","answer4":"15","name":"Лобченко Антон Романович"}))
export default checker