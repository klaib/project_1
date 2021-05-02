var myStorage = localStorage;
let usersCollect = [];
let user = {};
//
//  "Storage" native Object, DO NOT CONFUSEwith myStorage !!!

Storage.prototype.setObj = function (key, obj) {
	return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function (key) {
	return JSON.parse(this.getItem(key));
};

///****************************************************
const userInvite = document.getElementById("userInvite");
const userDetails = document.getElementById("userDetails");
const userCheck = document.getElementById("userCheck");
const login = document.getElementById("login");
const signIn = document.getElementById("sign-in");
const display = document.getElementById("display");
const homePage = document.getElementById("home");
const userInfo = document.getElementById("userInfoOK");

login.addEventListener("click", userLogin);
signIn.addEventListener("click", userSignInPrep);
display.addEventListener("click", displayRecord);
homePage.addEventListener("click", home);
userInfo.addEventListener("click", profilStoring);
function home() {
	//userInvite.classList.toggle("hide");
	//userDetails.classList.toggle("hide");
	homePage.classList.toggle("hide");
}

function displayRecord() {
	// for test and dev only   ****************
	alert("hi");
	let users = myStorage.getObj("users");
	if (users == null) {
		alert("users is null");
	} else {
		for (i = 0; i < users.length; i += 1) alert(users[i].pseudo);
	}
}
///******************Display SIGN -IN form       *******************

function userSignInPrep() {
	userInvite.classList.toggle("hide");
	userDetails.classList.toggle("hide");
	homePage.classList.toggle("hide");
}

function userLogin() {
	userInvite.classList.toggle("hide");
	userCheck.classList.toggle("hide");
	homePage.classList.toggle("hide");
	// alert(" vous avez cliqué sur  LOGIN");
	//homePage.classList.toggle("hide");
}

function duplicatedEmail(usersList) {
	var duplicate = false;

	usersList.every((obj) => {
		if (obj.email == user.email) {
			duplicate = true;
		} else {
			duplicate = false;
		}
	});

	return duplicate;
}

function validPassword(test) {}

function userFilling() {
	user.firstName = userDetails[0].value;
	user.lastName = userDetails[1].value;
	user.email = userDetails[2].value;
	user.password = userDetails[3].value;
}

function profilStoring(e) {
	userFilling();

	let curentUserList = myStorage.getObj("users");

	if (curentUserList) {
		//	users list exists already

		usersCollect = curentUserList;
		if (duplicatedEmail(curentUserList)) {
			alert("duplicated email \n \n returning to Home page");
			e.preventDefault();
			return;
		}
	}
	//alert("after duplicated email ")
	usersCollect.push(user);
	myStorage.setObj("users", usersCollect);
}

// updating users list !!!

///******************Display ONE specific list    *******************

///******************Display All TO DO lists    *******************

///*************        Display LOGIN form       *******************
// userInvite.classList.toggle("hide");
// userCheck.classList.toggle("hide"); */

welcome();
//

///****************************************************
