import 'whatwg-fetch';
const API = '/api/users/login';
export const LOGIN = 'LOGIN';

export const loginAction = (user) => {
  console.log('Action LOGIN', user);
  return dispatch => {

    let data = {
      username: user.username,
      password: user.password
    }

    return fetch(`${API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(loginInfo => {
        dispatch({
          type: LOGIN,
          user: loginInfo
        })
      })
      .catch(err => {
        console.log({ err: err.message });
      })

  }
}