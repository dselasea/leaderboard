export default class User {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  createUserScore = async () => {
    try {
      const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, score})
    });
    const data = await response.json();
    console.log(data);
    } catch (error) {
      return error;
    }
  }

  static createGame = async () => {
  try {
    const game = {
      name: 'The Last Airbender'
    }
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(game)
  });
  const data = await response.json();
  return data;
  } catch (error) {
    return error;
  }
}

  static fetchScores = async () => {
    try {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Pr8hkBfg3g5nFTZFaxmC/scores', 
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
}