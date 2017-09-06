//TODO: teams, newsComment auth

const url = 'https://sch-qpa.ml/api/';

// AUTENTICATION

// provider auth: via links in html

const postMobileAuth = (user_email, user_password) => {
  const endpoint = url + 'auth/mobile';
  fetch(endpoint,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({email: user_email, b: user_password})
  })
  .then(res => {return res.json()})
  .catch(res => alert(res));
}

const postUserLogin = (user_email, user_password) => {
  const endpoint = url + 'auth/login';
  fetch(endpoint,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({email: user_email, b: user_password})
  })
  .then(res => {return res.json()})
  .catch(res => alert(res));
}

// NEWS

const getNewsItems = (pagination = true) => {
  const endpoint = url + 'auth/news' + (pagination ? '' : '?all');
  fetch(endpoint)
  .then(response => return response.json())
  .catch(response => alert(response));
}

const getNewsItem = (id) => {
  const endpoint = url + 'auth/news/' + id;
  fetch(endpoint)
  .then(response => return response.json())
  .catch(response => alert(response));
}

const getNewsItemComments = (id) => {
  const endpoint = url + 'auth/newsComments/' + id;
  fetch(endpoint)
  .then(response => return response.json())
  .catch(response => alert(response));
}

// USER MANAGEMENT

const postCreateUser = (userName, userNick, userEmail, userPw, userPw_conf) => {
  const endpoint = url + 'users';
  fetch(endpoint,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      name: userName.
      nick: userNick,
      email: userEmail,
      password: userPw,
      password_confirmation: userPw_conf,
    })
  })
  .then(res => {return res.json()})
  .catch(res => alert(res));
}

const getUserInfo = (accessToken) => {
  const endpoint = url + 'users/' + id;
  const authHeader = "Bearer" + accessToken;
  fetch(endpoint,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': authHeader,
      },
      method: "GET",
    })
  .then(response => return response.json())
  .catch(response => alert(response));
}

// TEAM MANAGEMENT
