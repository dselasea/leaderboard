const gameId = 'Xi3c5OTlwbPSSIXk8gZfw';
const game = {
  name: 'The last airbender',
}

const userData = {
  user: 'Daniel',
  score: 45,
}

const createGame = async () => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(game)
  });
  const data = await response.json();
  console.log(data);
  return data;
  } catch (error) {
    return error;
  }
}

const createUserScore = async () => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  const data = await response.json();
  console.log(data);
  } catch (error) {
    return error;
  }
}

const getScores = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6EIUxZon3pilrHBXDNrp/scores', 
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
} 


createGame();
createUserScore();
getScores();