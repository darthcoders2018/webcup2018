function login() {
    const email = document.getElementById("signin-email").value,
        password = document.getElementById("signin-password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(response) {
            console.log(response.email);
        })
        .catch(function(error) {
            document.getElementById("error_display").innerHTML = error;
            console.log('error SignIn: ' + error);
        });
}

function register() {
    document.getElementById("error_display").innerHTML = " ";
    const email = document.getElementById("register-email").value,
        password = document.getElementById("register-password1").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(response) {

            console.log("response SignUp: ", response);
           createProfile(response.uid,email);
        })
        .catch(function(error) {
            document.getElementById("error_display").innerHTML = error;
            console.log("error SignUp: ", error)
        });
}

function createProfile(userid,email) {
   
    var database = firebase.database();
    const username = document.getElementById("register-username").value,
        tel = document.getElementById("register-tel").value,
        selection = document.getElementById("register-neo");
    var selectedneo = selection.options[selection.selectedIndex].value;

   
        firebase.database().ref('users/' + userid+'/profile').set({
            email: email,
            userid: userid,
            neozone:selectedneo,
            contactno:tel
        });
    
}