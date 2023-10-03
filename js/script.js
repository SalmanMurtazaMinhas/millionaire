console.log('okayyyy lesss go')

const question = document.querySelector('.question')
const ans1 = document.querySelector('.ans1')
const ans2 = document.querySelector('.ans2')
const ans3 = document.querySelector('.ans3')
const ans4 = document.querySelector('.ans4')



const allQuestion = [{
question : "Are you crazy? ",
Answers: ["Yes","Sure","Yup","Of course"]
},{
  question : "Are you Hungry? ",
  Answers: ["Yes1","Sure1","Yup1","Of course1"]
},{
  question : "Are you Sleepy? ",
  Answers: ["Yes1","Sure1","Yup1","Of course1"]
},{
  question : "Are you Tired? ",
  Answers: ["Yes","Sure","Yup","Of course"]
}]



function displayQuestions() {

  let element = document.getElementsByTagName('div');
  console.log(element)
  element[1].style.backgroundColor = "white";
  element[2].style.backgroundColor = "white";
  element[3].style.backgroundColor = "white";
  element[4].style.backgroundColor = "white";


  console.log(allQuestion[0].question)
  console.log(allQuestion[0].Answers)
  
  question.innerHTML=allQuestion[0].question
  const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 
  
  y=[0,1,2,3]

  const shuffledArray = shuffle(y); 
  ans1.innerHTML = allQuestion[0].Answers[shuffledArray[0]]
  ans2.innerHTML = allQuestion[0].Answers[shuffledArray[1]]
  ans3.innerHTML = allQuestion[0].Answers[shuffledArray[2]]
  ans4.innerHTML = allQuestion[0].Answers[shuffledArray[3]]

  allQuestion.shift()
  
}

function checkAns(param, div) {
  let element = document.getElementsByClassName(div);
  if(param == 'Yes' || param == 'Sure1'){
    element[0].style.backgroundColor = "green";
  } 
  else {
    element[0].style.backgroundColor = "red";
  }
}

