//UTILS

const postFetchRequest = (url, body, authHeader = '') => {
  return fetch(url
    /*,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': authHeader,
    },
    method: "POST",
    body: JSON.stringify(body)
  }*/
).then(res => res.json())
  .then(json => {return json})
  .catch(res => alert(res));
}

const getFetchRequest = (url, authHeader = '') => {
  return fetch(url
    /*,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': authHeader,
      },
      method: "GET",
  }*/
)
  .then(response => response.json())
  .then(json => {return json})
  .catch(response => alert(response));
}

const url = 'https://sch-qpa.ml/api/';

// AUTENTICATION

// provider auth: via links in html

const postMobileAuth = (user_email, user_password, callback) => {

  const endpoint = url + 'auth/mobile';
  var body = {email: user_email, b: user_password};
  postFetchRequest(endpoint, body).then(ret => callback(ret));

}

const postUserLogin = (user_email, user_password, callback) => {

  const endpoint = url + 'auth/login';
  const body = {email: user_email, b: user_password};
  postFetchRequest(endpoint, body).then(ret => callback(ret));

}

// NEWS
export const getNewsItems = (callback, pagination = true) => {
  const endpoint = url + 'news' + (pagination ? '' : '?all');
  getFetchRequest(endpoint).then(ret => {callback(ret)});

}

export const getCommentsForNewsItem = (id, callback) => {
  const endpoint = url + "news/comments/" + id;
  getFetchRequest(endpoint).then(ret => {callback(ret)});
}

export const getNewsItem = (id, callback) => {

  const endpoint = url + 'news/' + id;
  getFetchRequest(endpoint).then(ret => callback(ret));

}

const getNewsItemComments = (id, authToken, callback) => {

  const endpoint = url + 'newsComments/' + id;
  const authHeader = "Bearer " + authToken;
  getFetchRequest(endpoint, authHeader).then(ret => callback(ret));

}

const postCreateNewsComment = (id, text, callback) => {

  const endpoint = url + "/newsComments";
  const body = {news: id, comment: text};
  postFetchRequest(url, body).then(ret => callback(ret));

}

const patchNewsComment = (updatedId, updatedComment, authKey, callback) => {

  const endpoint = url + "newsComments/" + updatedId;
  const authHeader = "Bearer " + authKey;
  const body = {
    id: updatedId,
    comment: updatedComment,
  }
  fetch(endpoint,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': authHeader,
    },
    method: "PATCH",
    body: JSON.stringify(body)
  }).then(res => {return res.json()})
  .catch(res => alert(res)).then(ret => callback(ret));


}

// TEAM MANAGEMENT

const getTeamAcceptMember = (authKey, userID, callback) => {

  const endpoint = url + "teams/" + userID + "/accept";
  const authHeader = "Bearer " + authKey;
  postFetchRequest(endpoint, authHeader).then(ret => callback(ret));

}

const getTeamMembers = (teamID, authKey, callback) => {

  const endpoint = url + "teams/" + teamID + "/members";
  const authHeader = "Bearer " + authKey;
  postFetchRequest(endpoint, authHeader).then(ret => callback(ret));

}

const postCreateNewTeam = (authKey, teamName, teamDescription, callback) => {

  const endpoint = url + "teams/";
  const authHeader = "Bearer " + authKey;
  const body = {name: teamName, description: teamDescription};
  postFetchRequest(endpoint, body, authHeader).then(ret => callback(ret));

}

const getDeclineMember = (authKey, userID, callback) => {

  const endpoint = url + "teams/" + userID + "/decline";
  const authHeader = "Bearer " + authKey;
  postFetchRequest(endpoint, authHeader).then(ret => callback(ret));

}

const getJoinTeam = (authKey, teamID, callback) => {

  const endpoint = url + "teams/" + teamID + "/join";
  const authHeader = "Bearer " + authKey;
  getFetchRequest(endpoint, authHeader).then(ret => callback(ret));

}

const getLeaveTeam = (authKey, callback) => {

  const endpoint = url + "teams/leave";
  const authHeader = "Bearer " + authKey;
  getFetchRequest(endpoint, authHeader).then(ret => callback(ret));

}

export const getListOfTeams = (callback) => {

  const endpoint = url + "teams"
  getFetchRequest(endpoint).then(ret => callback(ret));

}

const getTeamPendingMembers = (authKey, teamID, callback) => {

  const endpoint = url + "teams/" + teamID + "/pending/members";
  const authHeader = "Bearer " + authKey;
  getFetchRequest(endpoint, authHeader).then(ret => callback(ret));

}

const getRemoveMemberFromTeam = (authKey, userID, callback) => {

  const endpoint = url + "teams/" + userID + "/remove";
  const authHeader = "Bearer " + authKey;
  getFetchRequest(endpoint, authHeader).then(ret => callback(ret));

}

const showTeam = (teamID, callback) => {

  const endpoint = url + "teams/" + teamID;
  getFetchRequest(endpoint).then(ret => callback(ret));

}

// USER MANAGEMENT

const postCreateUser = (userName, userNick, userEmail, userPw, userPw_conf, callback) => {

  const endpoint = url + 'users';
  var body = {
    name: userName,
    nick: userNick,
    email: userEmail,
    password: userPw,
    password_confirmation: userPw_conf,
  };
  postFetchRequest(endpoint, body).then(ret => callback(ret));
}

const getCurrentUserInfo = (authToken, callback) => {
  const endpoint = url + 'users/me';
  const authHeader = 'Bearer ' + authToken;
  getFetchRequest(endpoint, authHeader).then(ret => callback(ret));
}

const getUserInfo = (accessToken, id, callback) => {

  const endpoint = url + 'users/' + id;
  const authHeader = "Bearer " + accessToken;
  getFetchRequest(endpoint, authHeader).then(ret => callback(ret));

}
