const main = document.querySelector("#test")
const createCard = (obj,indx) =>{
  const newCard = document.createElement("div")
  newCard.className = "card";
  newCard.id = indx;
  const lst = document.createElement("ul");
  const firstName = document.createElement('li');
  const lastName = document.createElement('li');
  const email = document.createElement('li');
  const college = document.createElement('li');
  const essay = document.createElement('li');
  firstName.innerHTML = obj.FIRSTNAME;
  lastName.innerHTML = obj.LASTNAME;
  email.innerHTML = obj.EMAIL;
  college.innerHTML = obj.UNIVERSITY;
  essay.innerHTML = obj.REASON;
  lst.appendChild(firstName);
  lst.appendChild(lastName);
  lst.appendChild(email);
  lst.appendChild(college);
  lst.appendChild(essay);
  newCard.appendChild(lst);
  main.appendChild(newCard);
}
const loopCreate = arr => {
   for(let i = 0; i<arr.length; i++) {
    createCard(arr[i],i);
   }
}
const test = document.getElementById("test");
const newButton = document.createElement("button");
const link = document.createElement("a");
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;
  auth.signInWithEmailAndPassword(email, password).then(() => {
    link.innerHTML = "see applicant list";
    newButton.appendChild(link);
    loginForm.appendChild(newButton);
  });
});
let count = 0;
newButton.addEventListener('click', (e) => {
  e.preventDefault();
  if(count === 0) {
    const ref = firebase.database().ref();
    ref.on("value", function(snapshot) {
      let thing = snapshot.val();
      const arr = Object.keys(thing).map(i => thing[i]);
      loopCreate(arr);
    }, function (error) {
      console.log("Error: " + error.code);
    });
    count++;
  }
});