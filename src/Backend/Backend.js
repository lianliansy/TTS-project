var backEnd =
  "https://www.jsonstore.io/85deb673cbdaffb7c8b85b8517f419110696c65e35782610f87949b0fd756228";

export const userService = {
  loginUser,
  CreateUser
};

function loginUser(username, password) {
  const url = backEnd + "/users/" + username;

  fetch(url)
    .then(resp => resp.json())
    .then(function(data) {
      console.log(data.result);
      if (password === data.result.password) {
        console.log("logged in");
        localStorage.setItem("username", data.result.username);
      }
      return null;
    })
    .catch(function(error) {
      console.log(error);
    });
}

function CreateUser(usernameVal, passwordVal, emailVal) {
  var payload = {
    username: usernameVal,
    password: passwordVal,
    email: emailVal
  };
  const requestOptions = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(payload)
  };

  return fetch(backEnd + `/users/` + usernameVal, requestOptions)
    .then(handleResponse)
    .then(user => {
      if (user) {
        user.authdata = window.btoa(usernameVal + ":" + passwordVal);
        localStorage.setItem("username", usernameVal);
      }
      console.log(localStorage.getItem("username"));
      return user;
    });
}

function logout() {
  localStorage.removeItem("username");
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
