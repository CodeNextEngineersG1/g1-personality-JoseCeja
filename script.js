let color = null,
  gamePlay = null,
  role = null;

let pageTitle = document.querySelector('h1'),

  pageTitleText = document.innerHTML(pageTitle),

  tryAgain = document.querySelector('#try-again'),

  quizWrapper = document.querySelector('#quiz-wrapper'),

  result = document.querySelector('#result'),

  formSubmit = document.querySelector('#form-submit');

submit.addEventListener('click', resetQuiz);
submit.addEventListener('clikc', processResults);

function processResults() {
  color = document.querySelector('input[name = "color"]: checked'),
    gamePlay = document.querySelector('input[name = "play-trough"]: checked'),
    role = document.querySelector('input[name = "character"]: checked');

  if (color == null || gamePlay == null || role == null) {
    alert("You must answer All QUESTIONS before submitting");
  }

}

function getPersonality() {
  let score = 0;
  switch (color.id) {
    case 'Red':
      score += 0;
      break;

    case 'Yellow':
      score += 1;
      break;

    case 'Orange':
      score += 2;
      break;

    case 'Green':
      score += 3;
      break;

    default:
  }


  switch (gamePlay.id) {
    case 'S-M':
      score += 1;
      break;

    case 'P-M':
      score += 2;
      break;

    case 'S-S':
      score += 3;
      break;

    case 'L-O-Z':
      score += 4;
      break;
    default:
  }

  switch (role.id) {
    case 'Plumber':
      score += 0;
      break;

    case 'Explorer':
      score += 1;
      break;

    case 'Brawler':
      score += 2;
      break;

    case 'Knight':
      score += 3;
      break;

    default:

  }

  return score;

  if (score == 0 || score == 1) {
    return 0;
  }
  if (score == 2 || score == 3 || score == 4) {
    return 1;
  }
  if (score == 5 || score == 6) {
    return 2;
  }
  if (score > 7) {
    return 3;
  }

}
}

function resetQuiz() {

}
