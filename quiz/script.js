let questions = [
  {
    'que': "which of the following is a markup language ?",
    'a': "html",
    'b': "php",
    'c': "C++",
    'd': "Java",
    'correct': 'a'
  },
  {
    'que': "Which language is primarily used for styling web pages?",
    'a': "HTML",
    'b': "JQuery",
    'c': "CSS",
    'd': "XML",
    'correct': 'c'
  },
  {
    'que': "Which language is used to add interactivity to a web page?",
    'a': "CSS",
    'b': "JavaScript",
    'c': "HTML",
    'd': "Python",
    'correct': 'b'
  },
  {
    'que': "What does 'HTTP' stand for?",
    'a': "Hyper Transfer Text Program",
    'b': "Hyperlink and Text Transfer Protocol",
    'c': "Hyper Text Transfer Protocol",
    'd': "Home Tool Transfer Protocol",
    'correct': 'c'
  },
  {
    'que': "Which tag is used to create a hyperlink in HTML?",
    'a': "<link>",
    'b': "<a>",
    'c': "<href>",
    'd': "<url>",
    'correct': 'b'
  },
  {
    'que': "Which symbol is used for single-line comments in JavaScript?",
    'a': "#",
    'b': "//",
    'c': "/*",
    'd': "<!--",
    'correct': 'b'
  },
  {
    'que': "Which of the following is a server-side language?",
    'a': "JavaScript",
    'b': "CSS",
    'c': "PHP",
    'd': "HTML",
    'correct': 'c'
  },
  {
    'que': "Which HTML tag is used to display an image?",
    'a': "<pic>",
    'b': "<image>",
    'c': "<img>",
    'd': "<src>",
    'correct': 'c'
  },
  {
    'que': "How do you declare a JavaScript variable?",
    'a': "v myVar;",
    'b': "dim myVar;",
    'c': "var myVar;",
    'd': "variable myVar;",
    'correct': 'c'
  },
  {
    'que': "Which of these is a valid CSS property?",
    'a': "text-decoration",
    'b': "font-styleing",
    'c': "bg-color",
    'd': "text-width",
    'correct': 'a'
  }
]

let i = 0
let ques = document.querySelector('h2')
let labels = Array.from(document.querySelectorAll("label"))
let submit = document.querySelector('button')
let radios = document.querySelectorAll("input[type='radio']")
let scoreBox = document.querySelector('.scoreBox')
let questionBox = document.querySelector(".questionBox")
let scoreBoxh2 = document.querySelector(".scoreBox h2")
let correct = [];
let selected = [];

scoreBox.style.display = "none"




// choosing selected answers 
let selectedAnswer = () => {
  // agr select nahi kia to null dega matlab error ayega toh islie try catch me wrap hai 
  try {
    selected[i] = document.querySelector("input[type='radio']:checked").value
    correct.push(questions[i]['correct'])
  } catch (e) {
    selected[i] = "not attempted"
    correct.push(questions[i]['correct'])
  }
  console.log(selected)
  console.log(correct)
}




// displaying total score by matching with correct answer 
let displayScore = () => {
  let totalCorrects = 0;
  for (let j = 0; j < correct.length; j++) {
    if (selected[j] == correct[j]) {
      totalCorrects++
    }
  }
  scoreBoxh2.innerText = `You Score is : ${totalCorrects}/10`
  scoreBox.style.display = "flex"
}




// displaying questions and score after attempting questions 
let display = () => {
  if (i < 10) {
    ques.innerText = (i + 1) + ")  " + questions[i]['que']
    labels[0].innerText = questions[i]['a']
    labels[1].innerText = questions[i]['b']
    labels[2].innerText = questions[i]['c']
    labels[3].innerText = questions[i]['d']
    console.log(i)
  } else {
    questionBox.style.display = "none"
    displayScore();
    // console.log("No more questions")
  }
}




// restarting quiz 
document.querySelector(".restart").addEventListener("click", () => {
  i = 0;
  correct = [];
  selected = [];
  scoreBox.style.display = "none"
  questionBox.style.display = "flex"
  display();
})



//click krne pr kya hona chaiye 
submit.addEventListener("click", () => {

  selectedAnswer();
  i++;
  radios.forEach((rad) => {
    rad.checked = false;
  })
  display();
})

display()