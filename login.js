const main = document.querySelector("#test")
const createCard = (obj,indx) =>{
   //card that contains user info
   const newCard = document.createElement("div")
   newCard.className = "card"
   newCard.id = indx;
// div that contains name, age and email

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
//    name.innerHTML= Name: ${title(list[indx].name.first)}  ${title(list[indx].name.last)}
//    email.innerHTML = Email: ${list[indx].email}
//    age.innerHTML = Age: ${list[indx].dob.age}

   lst.appendChild(firstName);
   lst.appendChild(lastName);
   lst.appendChild(email);
   lst.appendChild(college);
   lst.appendChild(essay);
   newCard.appendChild(lst);
   main.appendChild(newCard);
}
const loopCreate=arr=>{
   for(let i = 0; i<arr.length; i++){
    createCard(arr[i],i);
   }
}
const test = document.getElementById("test");
const newButton = document.createElement("button");
const link = document.createElement("a");
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    link.innerHTML = "see applicant list";
    newButton.appendChild(link);
    loginForm.appendChild(newButton);
    // console.log(cred.user);
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
      // arr.push(thing);
      console.log(arr);
      console.log(typeof arr);
      loopCreate(arr);
    }, function (error) {
      console.log("Error: " + error.code);
    });
    count++;
    console.log(count);
  }
});

// loopCreate(list);