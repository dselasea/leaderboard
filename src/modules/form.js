import User from './userClass.js';

// Dom Selectors
const form = document.querySelector('#form');
const userName = document.querySelector('#name');
const userScore = document.querySelector('#scores');
const refresh = document.querySelector('#refresh');
const scoresData = document.querySelector('.scores-list');

// Clear userInput
const clearInput = () => {
  userName.value = '';
  userScore.value = '';
};

// Get userData
const getUserData = (e) => {
  const user = new User(userName.value, userScore.value);
  user.createUserScore(user);
  clearInput();
  e.preventDefault();
};

// Get scores
const getScores = async () => {
  let list = '';
  const scores = await User.fetchScores();
  const scoresList = scores.result;
  scoresList.map((scorelist) => {
    list += `<li><span>${scorelist.user}:</span> ${scorelist.score} points</li>`;
    return list;
  });
  scoresData.innerHTML = list;
};

// Refresh to get scores from api
refresh.addEventListener('click', getScores);

// Get form input
form.addEventListener('submit', getUserData);

window.addEventListener('DOMContentLoaded', getScores);