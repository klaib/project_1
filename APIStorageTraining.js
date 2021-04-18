setTimeout(
	// à caus e d un soucis le setTimeout

	() => {
		var myStorage = localStorage;
		//
		//  "Storage" native Object, DO NOT CONFUSEwith myStorage !!!

		Storage.prototype.setObj = function (key, obj) {
			return this.setItem(key, JSON.stringify(obj));
		};
		Storage.prototype.getObj = function (key) {
			return JSON.parse(this.getItem(key));
		};

		///****************************************************
		let userInvite = document.getElementById("userInvite");
		//let userCheck = document.getElementById("userCheck");
		let userDetails = document.getElementById("userDetails");
		let login = document.getElementById("login");
		let signIn = document.getElementById("sign-in");
		let display = document.getElementById("display");

		function welcome() {
			// userInvite.classList.toggle("hide");
			// userCheck.classList.toggle("hide");
			login.addEventListener("click", userLogin);
			signIn.addEventListener("click", userSignIn);
			display.addEventListener("click", displayRecord);
		}

		function displayRecord() {
			// for test and dev only   ****************
			alert("hi");
			let users = myStorage.getObj("users");
			if (users == null) {
				alert("users is null");
			} else {
				for (i=0;i<users.length;i+=1)
				alert(users[i].pseudo);
			}
		}
		///******************Display SIGN -IN form       *******************

		function userSignIn(e) {
			userInvite.classList.toggle("hide");
			userDetails.classList.toggle("hide");
			let settings = document.getElementById("settingsOK");
			settings.addEventListener("click", profilProcessing);
			// userDetails.classList.toggle("hide");
			// userDetails.classList.toggle("hide");
		}

		function userLogin(e) {
			//const myInput = document.getElementById
			alert(" vous avez cliqué sur  LOGIN");
		}
		function checkDuplicateUser(obj) {
			var duplicate = false;
			let i = 0;
			list.every((obj) => {
				if (obj.prénom == userID[0].value && obj.nom == userID[1].value) {
					duplicate = true;
					alert("duplicate = true ");
					return false;
				} else {
					alert(i);
					i++;
					return true;
				}
			});

			return duplicate;
		}

		function profilProcessing() {
			//alert("settings ok");
			let user = {};

			let usersCollect = [];
			user.pseudo = userDetails[0].value + "_" + userDetails[1].value;
			user.firstName = userDetails[0].value;
			user.lastName = userDetails[1].value;
			user.email = userDetails[2].value;
			user.password = userDetails[3].value;

			let curentUserList = myStorage.getObj("users");
			if (curentUserList) {
				// users list exists already

				usersCollect = curentUserList;
				// if (usersCollect[pseudo.Karim_LAIB]) {
				// 	alert(" firstName / LastName already exists");
				// 	console.log(" firstName / LastName already exists");
				// }

				usersCollect.push(user);
			} else {
				// case of no previous list

				usersCollect.push(user);
			}
			myStorage.setObj("users", usersCollect); // updating users list !!!
		}
		///******************Display ONE specific list    *******************

		///******************Display All TO DO lists    *******************

		///*************        Display LOGIN form       *******************
		// userInvite.classList.toggle("hide");
		// userCheck.classList.toggle("hide");
		welcome();
	},

	10
);

///****************************************************
