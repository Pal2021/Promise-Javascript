/**
 * Codders Gyan youtube
 * 1.register
 * 2.send-welcome-email
 * 3.logi
 * 4.get-user-data
 * 5.display user dat
 */
function register() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      return reject("Error while registring....");
      console.log("register end");
      resolve();
    }, 3000);
  });
}
function sendEmail() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("sendEmail end");
      resolve();
    }, 3000);
  });
}
function login() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("login end");
      resolve();
    }, 3000);
  });
}
function getUserData(callback) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("get User Data");
      resolve();
    }, 3000);
  });
}
function displayUserData(callback) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("display user data");
      resolve();
    }, 3000);
  });
}
console.log("Other application work");

// register(function () {
//   sendEmail(function () {
//     login(function () {
//       getUserData(function () {
//         displayUserData();
//       });
//     });
//   });
// });

register()
  .then(sendEmail)
  .then(login)
  .then(getUserData)
  .then(displayUserData)
  .catch((err) => {
    console.log("Error:", err);
  });
