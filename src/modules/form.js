import User from "./userClass";

window.addEventListener('DOMContentLoaded', () => {
// Dom Selectors
const form = document.querySelector('#form');
const userName = document.querySelector('#name');
const userScore = document.querySelector('#scores');
const refresh = document.querySelector('#refresh');


// Clear userInput
const clearInput = () => {
  userName.value = '';
  userScore.value = '';
}

// Get userData
const getUserData = (e) => {
  const user = new User(userName.value, userScore.value);
  user.createUserScore(user);
  clearInput()
  e.preventDefault();
}

// Get scores
const getScores = async () => {
  const scores = await User.fetchScores();
  console.log(scores);
}

// Refresh to get scores from api
refresh.addEventListener('click', getScores)

// Get form input
form.addEventListener('submit', getUserData);

})


