export default class User {
  constructor(name, score) {
    this.name = name,
    this.score = score
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
}