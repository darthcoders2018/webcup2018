function login()
{
	  const email = document.getElementById("signin-email").value,
        password = document.getElementById("signin-password").value;

         firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function (response) {
            console.log(response.email);
        })
        .catch(function (error) {
        	document.getElementById("error_display").innerHTML=error;
            console.log('error SignIn: ' + error);
        });
}
