//*************** ---  App States --- ***************

var question01 = {
	questionDescription: "The oldest cat on record was Creme Puff. He died in Texas in 2005. How old was he?",
	choice1: "22 years old",
	choice2: "26 years old",
	choice3: "32 years old",
	choice4: "38 years old",
	choice5: "40 years old",
	answer: "38 years old",
	correct: false
}

var question02 = {
	questionDescription: "What is a group of kittens called?",
	choice1: "Troop",
	choice2: "Kindle",
	choice3: "Flight",
	choice4: "Herd",
	choice5: "Drove",
	answer: "Kindle",
	correct: false
}

var question03 = {
	questionDescription: "What percentage of time awake do cats spend grooming themselves?",
	choice1: "10%",
	choice2: "20%",
	choice3: "30%",
	choice4: "40%",
	choice5: "50%",
	answer: "30%",
	correct: false
}

var question04 = {
	questionDescription: "Cats in the US are said to have 9 lives. How many lives are cats said to have in Arabian countries?",
	choice1: "1",
	choice2: "6",
	choice3: "9",
	choice4: "50",
	choice5: "99",
	answer: "6",
	correct: false
}

var question05 = {
	questionDescription: "Himmy, an Australian cat, holds the Guiness Book of World Records for heaviest cat. How much did Himmy weight?",
	choice1: "26 lbs / 11.7 kg",
	choice2: "31 lbs / 14 kg",
	choice3: "39 lbs / 17.6 kg",
	choice4: "46 lbs / 20.9 kg",
	choice5: "55 lbs / 24.9 kg",
	answer: "46 lbs / 20.9 kg",
	correct: false
}

var question06 = {
	questionDescription: "In comparison to humans, cats have what percentage of tastebuds?",
	choice1: "500%",
	choice2: "150%",
	choice3: "100%",
	choice4: "50%",
	choice5: "5%",
	answer: "5%",
	correct: false
}

var question07 = {
	questionDescription: "Cats prefer their food at what temperature?",
	choice1: "Frozen",
	choice2: "Slightly above freezing",
	choice3: "Room temperature",
	choice4: "Warm to the touch",
	choice5: "Cats don't have a preference",
	answer: "Room temperature",
	correct: false
}

var question08 = {
	questionDescription: "Cats sweat through their...",
	choice1: "Ears",
	choice2: "Tail",
	choice3: "Paws",
	choice4: "Nose",
	choice5: "Fur",
	answer: "Paws",
	correct: false
}

var question09 = {
	questionDescription: "Disneyland uses cats that they release every night to hunt down little Mickeys and Minnies. How many cats do they employee?",
	choice1: "20",
	choice2: "50",
	choice3: "100",
	choice4: "150",
	choice5: "200",
	answer: "200",
	correct: false
}

var question10 = {
	questionDescription: "Cats are North America's most popular pet. What percentage of North American households own cats?",
	choice1: "10%",
	choice2: "20%",
	choice3: "30%",
	choice4: "40%",
	choice5: "50%",
	answer: "30%",
	correct: false
}

let currentQuestion = 1;
var allQuestions = [question01, question02, question03, question04, question05, question06, question07, question08, question09, question10];
var numberofQuestionsCorrect = 0;

//*************** State Modifications ***************


// Increment current question
function incrementCurrentQuestion() {
	currentQuestion = currentQuestion + 1;
}

// Keeps track of how many questions answered correctly
function countOfCorrectAnswers(answer, correctAnswer) {
	console.log(numberofQuestionsCorrect);
	if (answer === correctAnswer) {
		numberofQuestionsCorrect = numberofQuestionsCorrect + 1;
	}
	renderQuestionHeader(numberofQuestionsCorrect);
}

//*************** - Render functions - **************

// Render start page
$(document).ready(function() {
	$('#catFactsLogo').html('<img src="catFactsLogoImage.png"/>');
	$('#catFactsIntro').html('<button id="startButton" type="reset">' + "Let's start meow!" + '</button>');
	$('#questionCopy').empty();
	startQuiz();
})

// Render entire question page
function renderQuestionPage() {
	renderQuestionHeader(numberofQuestionsCorrect);
	renderQuestionDescription();
	renderChoices();
	submitAnswer();
}

//Render question header
function renderQuestionHeader(numberofQuestionsCorrect) {
	if (currentQuestion <= 10) {
		$('h1').html('<span id="questionCopy">Question</span><br><span id="questionCount">' + currentQuestion + ' of 10' + '</span>' );
		if (numberofQuestionsCorrect === 1 || currentQuestion > 1) {
			$('#questionsAnsweredCorrectly').html("You've answered " + numberofQuestionsCorrect + " question correctly.");
		} else if (numberofQuestionsCorrect > 2) {
			$('#questionsAnsweredCorrectly').html("You've answered " + numberofQuestionsCorrect + " questions correctly.");
		}
	} else if (currentQuestion === 11) {
		$('h1').html('<span id="results">Results</span>');
		$('#questionsAnsweredCorrectly').html("You've answered " + numberofQuestionsCorrect + " out of 10 questions correctly.");
		$('h2').empty();
		if (numberofQuestionsCorrect <= 3) {
			$('h2').html("You're a dog person aren't you?");
		}
		if (numberofQuestionsCorrect > 3 && numberofQuestionsCorrect < 7) {
			$('h2').html("You know a thing or two about our kitty friends.");
		}
		if (numberofQuestionsCorrect >= 7) {
			$('h2').html("You are a kitty-obsessed expert!");
		}
	}	
		
}

// Render question description
function renderQuestionDescription() {
	$('h2').html('<hr><br>' + allQuestions[currentQuestion - 1].questionDescription);
}

// Render Multiple Choice
function renderChoices() {
	$('#multipleChoice').html('<form><ul><li><input type="radio" id="choice1" name="multipleChoiceRadios" value="' + allQuestions[currentQuestion - 1].choice1 + '"/><label for="choice1">' + allQuestions[currentQuestion - 1].choice1 + '</label><div class="check"></div></li>' + 
		'<li><input type="radio" id="choice2" name="multipleChoiceRadios" value="' + allQuestions[currentQuestion - 1].choice2 + '"/><label for="choice2">' + allQuestions[currentQuestion - 1].choice2 + '</label><div class="check"><div class="inside"></div></div></li>' + 
		'<li><input type="radio" id="choice3" name="multipleChoiceRadios" value="' + allQuestions[currentQuestion - 1].choice3 + '"/><label for="choice3">' + allQuestions[currentQuestion - 1].choice3 + '</label><div class="check"><div class="inside"></div></div></li>' + 
		'<li><input type="radio" id="choice4" name="multipleChoiceRadios" value="' + allQuestions[currentQuestion - 1].choice4 + '"/><label for="choice4">' + allQuestions[currentQuestion - 1].choice4 + '</label><div class="check"><div class="inside"></div></div></li>' + 
		'<li><input type="radio" id="choice5" name="multipleChoiceRadios" value="' + allQuestions[currentQuestion - 1].choice5 + '"/><label for="choice5">' + allQuestions[currentQuestion - 1].choice5 + '</label><div class="check"><div class="inside"></div></div></li></ul>' + 
		'<input id="submitButton" type="submit" value="Submit" disabled>' + 
		'</form>'
		);
		enableSubmitButton();

}

// Render results 
function displayResult(answer) {
	let correctAnswer = allQuestions[currentQuestion - 1].answer;
	if (answer === correctAnswer) {
		$('#results').html('<span id="rightOrWrong">You got it right meow!</span>' + 
		'<span id="youAnswered">You answered ' + answer + '</span>' + '<br>' + 
		'<button id="continueButton" type="reset">Continue</button>'
		);
	} else {
		$('#results').html('<span id="rightOrWrong">You got it wrong!</span>' + 
		'<span id="youAnswered"> You answered ' + answer + '. The correct answer is ' + correctAnswer + '</span>' + '<br>' + 
		'<button id="continueButton" type="reset">Continue</button>'
		);
	}
	event.preventDefault();
	countOfCorrectAnswers(answer, correctAnswer);
	continueToNextQuestion();
}


//*************** - Event listeners - ***************
 
// Starts Quiz
function startQuiz() {
	$('#startButton').on('click', function() {
		$('#catFactsLogo').empty();
		$('#catFactsIntro').empty();
		renderQuestionPage();
	})
}

// Listens for answer submission
function submitAnswer() {
	$('#submitButton').on('click', function() {
		console.log("Submit button clicked!");
		var answer = $('input[name = multipleChoiceRadios]:checked').val();
		$('#multipleChoice').empty();
		displayResult(answer);
	})
}

// Clicking the continue button to go to next quetion
function continueToNextQuestion() {
	$('#continueButton').on('click', function() {
		$('#results').empty();
		incrementCurrentQuestion();
		renderQuestionPage();
	})
}

// Change button state
function enableSubmitButton() {
	$('input:radio').on('click', function() {
		console.log("Clicked a radio!")
		$('#submitButton').removeAttr('disabled');
	})
}