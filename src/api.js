//UTILS

const postFetchRequest = (url, body, authHeader = '') => {
  var result = {};
  if (authHeader != '') {
    var headers =
    {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }
  else {
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': authHeader,
    }
  }
  fetch(url,
  {
    headers: headers,
    method: "POST",
    body: JSON.stringify(body)
  }).then(res => res.json())
  .then(json => result = json)
  .catch(res => alert(res));
  return result;
}

const getFetchRequest = (url, authHeader = '') => {
  var result = {};
  fetch(url,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
        'Authorization': authHeader,
      },
      method: "GET",
    })
  .then(response => response.json())
  .then(json => {result = json})
  .catch(response => alert(response));
  return result;
}

const url = 'https://sch-qpa.ml/api/';

// AUTENTICATION

// provider auth: via links in html

const postMobileAuth = (user_email, user_password) => {
  const endpoint = url + 'auth/mobile';
  var body = {email: user_email, b: user_password};
  return postFetchRequest(endpoint, body)
}

const postUserLogin = (user_email, user_password) => {
  const endpoint = url + 'auth/login';
  const body = {email: user_email, b: user_password};
  return postFetchRequest(endpoint, body);
}

// NEWS

const getNewsItems = (pagination = true) => {
  const endpoint = url + '/news.json' + (pagination ? '' : '?all');
  return getFetchRequest(endpoint);
}

const getNewsItem = (id) => {
  const endpoint = url + 'auth/news/' + id;
  return getFetchRequest(endpoint);
}

const getNewsItemComments = (id, authToken) => {
  const endpoint = url + 'auth/newsComments/' + id;
  const authHeader = "Bearer " + authToken;
  return getFetchRequest(endpoint, authHeader);
}

const postCreateNewsComment = (id, text) => {
  const endpoint = url + "/newsComments";
  const body = {news: id, comment: text};
  return postFetchRequest(url, body);
}

const patchNewsComment = (id, comment, authKey) => {
  const endpoint = url + "newsComments" + id;
  const authHeader = "Bearer " + authKey;
  return fetch(endpoint,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': authHeader,
    },
    method: "PATCH",
    body: JSON.stringify(body)
  }).then(res => {return res.json()})
  .catch(res => alert(res));

}

// TEAM MANAGEMENT

const getTeamAcceptMember = (authKey, userID) => {
  const endpoint = url + "teams/" + userID + "/accept";
  const authHeader = "Bearer " + authKey;
  return postFetchRequest(endpoint, authHeader);
}

const getTeamMembers = (teamID, authKey) => {
  const endpoint = url + "teams/" + teamID + "/members";
  const authHeader = "Bearer " + authKey;
  return postFetchRequest(endpoint, authHeader);
}

const postCreateNewTeam = (authKey, teamName, teamDescription) => {
  const endpoint = url + "teams/";
  const authHeader = "Bearer " + authKey;
  const body = {name: teamName, description: teamDescription};
  return postFetchRequest(endpoint, body, authHeader);
}

const getDeclineMember = (authKey, userID) => {
  const endpoint = url + "teams/" + userID + "/decline";
  const authHeader = "Bearer " + authKey;
  return postFetchRequest(endpoint, authHeader);
}

const getJoinTeam = (authKey, teamID) => {
  const endpoint = url + "teams/" + teamID + "/join";
  const authHeader = "Bearer " + authKey;
  return getFetchRequest(endpoint, authHeader);
}

const getLeaveTeam = (authKey) => {
  const endpoint = url + "teams/leave";
  const authHeader = "Bearer " + authKey;
  return getFetchRequest(endpoint, authHeader);
}

const getListOfTeams = () => {
  const endpoint = url + "teams"
  return getFetchRequest(endpoint);
}

const getTeamPendingMembers = (authKey, teamID) => {
  const endpoint = url + "teams/" + teamID + "/pending/members";
  const authHeader = "Bearer " + authKey;
  return getFetchRequest(endpoint, authHeader);
}

const getRemoveMemberFromTeam = (authKey, userID) => {
  const endpoint = url + "teams/" + user + "/remove";
  const authHeader = "Bearer " + authKey;
  return getFetchRequest(endpoint, authHeader);
}

const showTeam = (teamID) => {
  const endpoint = url + "teams/" + teamID;
  return getFetchRequest(endpoint);
}

// USER MANAGEMENT

const postCreateUser = (userName, userNick, userEmail, userPw, userPw_conf) => {
  const endpoint = url + 'users';
  var body = {
    name: userName.
    nick: userNick,
    email: userEmail,
    password: userPw,
    password_confirmation: userPw_conf,
  };
  return postFetchRequest(endpoint, body);
}

const getUserInfo = (accessToken) => {
  const endpoint = url + 'users/' + id;
  const authHeader = "Bearer " + accessToken;
  return getFetchRequest(endpoint, authHeader);
}
