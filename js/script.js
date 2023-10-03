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


  
    let items = [
        'Melody', 'Dilmuns-Adventour', 'Dar-Properties', 'Safrati', 'Moviefy',  'Zami'
    ];

    // document.querySelector(".info").textContent = items.join(" ");
  
    const doors = document.querySelectorAll(".door");
    document.querySelector("#spinner").addEventListener("click", spin);
    document.querySelector("#reseter").addEventListener("click", init);
  
    async function spin() {
      init(false, 1, 2);
      for (const door of doors) {
        const boxes = door.querySelector(".boxes");
        const duration = parseInt(boxes.style.transitionDuration);
        boxes.style.transform = "translateY(0)";
        await new Promise((resolve) => setTimeout(resolve, duration * 1000));
      }
    }
  
    function init(firstInit = true, groups = 1, duration = 1) {
      for (const door of doors) {
        if (firstInit) {
          door.dataset.spinned = "0";
        } else if (door.dataset.spinned === "1") {
          return;
        }
  
        const boxes = door.querySelector(".boxes");
        const boxesClone = boxes.cloneNode(false);
  
        const pool = ["👨‍💻"];
        if (!firstInit) {
          const arr = [];
          for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
              arr.push(...items);
            }
            
          pool.push(...shuffle(arr));
  
          boxesClone.addEventListener(
            "transitionstart",
            function () {
              door.dataset.spinned = "1";
              this.querySelectorAll(".box").forEach((box) => {
                box.style.filter = "blur(1px)";
              });
            },
            { once: true }
          );
  
          boxesClone.addEventListener(
            "transitionend",
            function () {
              this.querySelectorAll(".box").forEach((box, index) => {
                box.style.filter = "blur(0)";
                if (index > 0) this.removeChild(box);
              });
            },
            { once: true }
          );
        }
        // console.log(pool);
  
        for (let i = pool.length - 1; i >= 0; i--) {
          const box = document.createElement("div");
          box.classList.add("box");
          box.style.width = door.clientWidth + "px";
          box.style.height = door.clientHeight + "px";
          box.textContent = pool[i];
          boxesClone.appendChild(box);
        }
        boxesClone.style.transitionDuration = `${duration > 100 ? duration : 1}s`;
        boxesClone.style.transform = `translateY(-${
          door.clientHeight * (pool.length - 1)
        }px)`;
        door.replaceChild(boxesClone, boxes);
        // console.log(door);
      }
    }
  
    function shuffle([...arr]) {
      let m = arr.length;
      while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
        console.log(arr)
        items = arr
        // items.pop()

      return arr.splice(-1, 1);
    }
  
    init();
  ;
  
