// User class
export default class User {
  // User constructor
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

  // Creates user scores
  createUserScore = async (user) => {
    try {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/O6CvEZgnwfxjI9m8w7zH/scores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }

  // Creates game with title
  static createGame = async () => {
    try {
    // Game object
      const game = {
        name: 'The Last Airbender',
      };
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(game),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }

  // Fetches scores
  static fetchScores = async () => {
    try {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/O6CvEZgnwfxjI9m8w7zH/scores',
        {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        });

      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }
}