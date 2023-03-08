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
  console.log(userName.value);
  console.log(userScore.value);
  clearInput()
  e.preventDefault();
}


form.addEventListener('submit', getUserData);

