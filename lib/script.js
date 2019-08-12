const form = document.querySelector(".application");
form.addEventListener('submit', function(event) { 
event.preventDefault();
let timestamp = Number(new Date());
const storageRef = firebase.storage().ref(timestamp.toString());

let $ = jQuery;
let file_data = $('#uploadPNG').prop('files')[0];

storageRef.put(file_data);
});

