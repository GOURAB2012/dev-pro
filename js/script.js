
function learnPromtFunction() {
	// let x = prompt("Enter Your Name Here");
	let y = store(5);
	//alert(x);
	document.write(y);
}


function save() {
	let a = document.getElementById("input");
	// document.getElementById("heading").innerHTML = a.value;
	// document.querySelector("#heading").innerHTML = a.value;
	// document.querySelector("#heading").innerHTML = "<a href='#'>Lol</a>";
	// document.querySelector("#heading").innerText = "<a href='#'>Lol</a>";
	document.querySelector("#heading").innerText = a.value;
	console.log(a.value);
}
let a = 0;

function count() {
	//
	let b = a++;
	document.querySelector('[myattribute="sibu"]').innerText = b;
	// return b;
}


function lightOnOff() {
	//
	let getClass = document.getElementById('light');
	if (getClass.classList.contains('off-light')) {
		document.querySelector("#light").src = 'https://www.w3schools.com/js/pic_bulbon.gif';
		getClass.classList.remove("off-light");
	} else {
		document.querySelector("#light").src = 'https://www.w3schools.com/js/pic_bulboff.gif';
		getClass.classList.add("off-light");
	}
}

function saveForm() {
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;	
    let users =[];
	
	let user={name:name,email:email,password:password};
	if(localStorage.getItem("users")==null){
	users.push(user);}
	else{
		users=JSON.parse(localStorage.getItem("users"));
		for(let i=0 ; i<users.length ; i++){
			if(users[i].email==email){
				alert("user already exist");
			}

		}
		users.push(user);

	}
	let json=JSON.stringify(users);

	// sessionStorage.setItem("user",json);
	localStorage.setItem("users",json);
}

function redirect(){
	document.getElementById("signup-form").style.display="none";
	document.getElementById("signin-form").style.display="block";
}

function prevent(e){
	// console.log(e);
e.preventDefault();

}
function signIn(){
	let password = document.getElementById("s-password").value;
	let email = document.getElementById("s-email").value;
	let users = localStorage.getItem("users");
	let lsUser=JSON.parse(users);
	// console.log(lsUser);
	let isValid=0;
 for(let i=0; i<lsUser.length; i++){
	if(lsUser[i].email==email && lsUser[i].password==password ){
		isValid=1;
		break;
	}

 }
	if(isValid ==0){
     alert("wrong email or passwod");
	}
	else{
			document.getElementById("dash-board").style.display="block";
	        document.getElementById("signin-form").style.display="none";

			let currentUser={email:email,password:password};
			let json = JSON.stringify(currentUser);
			sessionStorage.setItem("currentUser",json);
		
	}
}
function signout(){
	sessionStorage.clear();
	document.getElementById("dash-board").style.display="none";
	        document.getElementById("signin-form").style.display="block";
			
}
if(sessionStorage.getItem("currentUser")!= null){

	document.getElementById("dash-board").style.display="block";
	        document.getElementById("signin-form").style.display="none";
	        document.getElementById("signup-form").style.display="none";

}