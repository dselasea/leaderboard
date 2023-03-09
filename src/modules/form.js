import User from "./useClass";

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form');
const userName = document.querySelector('#name');
const userScore = document.querySelector('#scores');
const refresh = document.querySelector('#refresh');

User.createGame();

// Clear userInput
const clearInput = () => {
  userName.value = '';
  userScore.value = '';
}

// Get userData
const getUserData = (e) => {
  const user = new User(userName.value, userScore.value);
  console.log(user);
  clearInput()
  e.preventDefault();
}

const getScores = () => {
  User.fetchScores().then(data => {
    console.log(data);
  });
}

// Refresh to get scores from api
refresh.addEventListener('click', getScores)

form.addEventListener('submit', getUserData);
})

