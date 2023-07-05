import axios from 'axios';

const API_KEY = 'AIzaSyDIO79oBcE3YkzMzsalYbKqT0xf7OTpB7s'

export async function createUser(email, password) {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
  );
}