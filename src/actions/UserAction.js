import "whatwg-fetch";

export const GET_USERS = "GET_USERS"
export const EDIT_USER = "EDIT_USER"
export const REGISTER = "REGISTER"
export const LOGIN = "LOGIN"
export const USER_PAGE = "USER_PAGE"
export const LOGOUT = "LOGOUT"


const LOGINROUTE = "/api"
const DATA = "/api/users";

// export const getUsers = () => {
//   return dispatch => {
//     return fetch(DATA)
//       .then(result => {
//         return result.json();
//       })
//       .then(users => {
//         dispatch({
//           type: GET_USERS,
//           users: users
//         });
//       })
//       .catch(err => {
//         return console.log({ err: err.message });
//       })
//   }
// }

export const register = user => {
  return dispatch => {
    return fetch(`${LOGINROUTE}/register`, {
      method: `POST`,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(newUser => {
        return dispatch({
          type: REGISTER,
          users: newUser
        });
      })
      .catch(err => {
        console.log({ err: err.message });
      });
  };
};

export const editUser = user => {
  return dispatch => {
    let data = {
      username: user.username,
      email: user.email
    }
    return fetch(`${DATA}/${localStorage.id}`, {
      credentials: "include",
      method: `PUT`,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(result => {
        dispatch({
          type: EDIT_USER,
          user: result
        });
      })
      .catch(err => {
        return console.log({ err: err.message });
      });
  };
};

export const userPage = id => {
  return dispatch => {
    return fetch(`${DATA}/${id}`, {
      credentials: "include"
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(verified => {
        dispatch({
          type: USER_PAGE,
          payload: verified
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const loginAction = (user) => {
  return dispatch => {
    let data = {
      username: user.username,
      password: user.password
    }
    return fetch(`${LOGINROUTE}/login`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        data
      )
    }).then(checkStatus)
      .then(parseJSON)
      .then(verifiedUser => {
        dispatch({
          type: LOGIN,
          payload: verifiedUser
        })
      }).catch(err => {
        console.log(err)
      })
  }
}

export const logout = () => {
  return dispatch => {
    return fetch(`${LOGINROUTE}/logout`)
      .then(logout => {
        dispatch({
          type:LOGOUT,
          payload:logout
        })
      })
      .catch(err=>{
        console.log({err:err.message})
      })
  }
}


function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}
