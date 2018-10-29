var questionBank = [
  {question: "What is a name for the # symbol?"
    answer: "pound",
    distractor1: "tick tack toe",
    distractor2: "I don't know",
    distractor3: "ounce"},

    {question: "What is a name for the ~ symbol?"
    answer: "tilde",
    distractor1: "weird looking line",
    distractor2: "swirly thing",
    distractor3: "tick"},

    {question: "What is a name for the ^ symbol?"
    answer: "caret",
    distractor1: "carrot",
    distractor2: "corn",
    distractor3: "beef"}
];


$("#buttonClick").click(function() {
  console.log("button clicked");
  doThisOnClick();
});


function doThisOnClick() {
  for (var i = 0; i < questionBank.length; i++) {
    displayQuestion(i);
    console.log(i); // working
  };
};

function displayQuestion(q) {
  console.log("displayQuestion started");
  $(".question").html(questionBank[q].question);
  $(".answer").html(questionBank[q].answer);
  $(".distractor1").html(questionBank[q].distractor1);
  $(".distractor2").html(questionBank[q].distractor2);
  $(".distractor3").html(questionBank[q].distractor3);
  // now anticipate the answer
  countdownFrom(30);
};

function countdownFrom(x) {
  var stopInterval = setInterval(countDown, 1000);
  function countDown() {
    $("#timeDisplay").html(x);
    x--;
    if (x < 0) {
      clearInterval(stopInterval);
    };
  };
};
