console.log("hello");
let color = null,
  gamePlay = null,
  role = null;

let pageTitle = document.querySelector('h1'),

  pageTitleText = pageTitle.innerHTML,

  tryAgain = document.querySelector('#try-again'),

  quizWrapper = document.querySelector('#quiz-wrapper'),

  result = document.querySelector('#result'),

  formSubmit = document.querySelector('#form-submit');

tryAgain.addEventListener('click', resetQuiz);
formSubmit.addEventListener('click', processResults);

console.log(formSubmit);

function processResults() {
  console.log("hi");
  color = document.querySelector('input[name="color"]:checked'),
    gamePlay = document.querySelector('input[name="play-through"]:checked'),
    role = document.querySelector('input[name="character"]:checked');

  if (color == null || gamePlay == null || role == null) {
    alert("You must answer All QUESTIONS before submitting");
  } else {
    document.getElementById("quiz-wrapper").style.display = "none";
    document.getElementById("form-submit").style.display = "none";
    document.getElementById("try-again").style.display = "block";
    document.getElementById("result").style.display = "block";
  }

  let personality = getPersonality();

  switch (personality) {
    case 0:
      document.querySelector('#page-title').innerHTML = "Super Mario";
      result.style.background = "url('img/SuperMario.jpeg')";
      result.style.backgroundRepeat = 'no-repeat';
      break;

    case 1:
      document.querySelector('#page-title').innerHTML = "Pokemon";
      result.style.background = "url('img/Pokemon.jpg')";
      result.style.backgroundRepeat = 'no-repeat';
      break;

    case 2:
      document.querySelector('#page-title').innerHTML = "Super Smash Bros";
      result.style.background = "url('img/SuperSmash.jpeg')";
      result.style.backgroundRepeat = 'no-repeat';
      break;

    case 3:
      document.querySelector('#page-title').innerHTML = "The Legend of Zelda";
      result.style.background = "url('img/TLoZ.jpeg')";
      result.style.backgroundRepeat = 'no-repeat';

      break;

    default:

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


  if (score == 0 || score == 1) {
    return 0;
  }
  if (score == 2 || score == 3 || score == 4) {
    return 1;
  }
  if (score == 5 || score == 6 || score == 7) {
    return 2;
  }
  if (score > 7) {
    return 3;
  }

}


function resetQuiz() {
  pageTitle.innerHTML = pageTitleText;
  quizWrapper.style.display = "flex";
  formSubmit.style.display = "block";
  tryAgain.style.display = "none";
  result.style.display = "none";

  color.checked=false;
  gamePlay.checked=false;
  role.checked=false;

  color = null;
  gamePlay = null;
  role = null;

}
