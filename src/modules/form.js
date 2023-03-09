import User from "./useClass";

const form = document.querySelector('#form');
const userName = document.querySelector('#name');
const userScore = document.querySelector('#scores');

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


form.addEventListener('submit', getUserData);

