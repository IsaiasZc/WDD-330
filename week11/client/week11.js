import Auth from "./Auth.js";
import { makeRequest } from "./authHelpers.js";

const auth = new Auth();

const form = document.getElementById("login");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  console.log("hola")
  await auth.login(async () => {
    const data = await makeRequest('posts','GET', null, auth.token);
    
    document.getElementById("posts").innerHTML = JSON.stringify(data, null, 2)

  });

})


makeRequest('login','POST', {
  password: 'user1',
  email: 'user1@email.com'
})