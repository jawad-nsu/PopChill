/**
 * firebase configuration
 */
var firebaseConfig = {
    apiKey: "AIzaSyCfWnuBhSThuZPfFj1XKSl1QpZQnQSO-fY",
    authDomain: "popchill-cce70.firebaseapp.com",
    databaseURL: "https://popchill-cce70-default-rtdb.firebaseio.com",
    projectId: "popchill-cce70",
    storageBucket: "popchill-cce70.appspot.com",
    messagingSenderId: "732128946998",
    appId: "1:732128946998:web:bc8a6d83657a91ccf32197"
  };
  
  /**All the gloabl variables for user data */
  var fname, lname, username, pwd, email, phone;
  /**In this function we extract the user input data from the html form and set it equal to the global variables listed above */
  function Ready(){
    fname = document.getElementById('fname').value;
    lname = document.getElementById('lname').value;
    username = document.getElementById('username').value;
    pwd = document.getElementById('pwd').value;
    email = document.getElementById('email').value;
    phone = document.getElementById('phone').value;
  };
  /**
   * In this function we connect with the firebase Realtime database using the firebase configuration, passing the api key
   * Then we insert a row of data into our database
   * Using async javascript, we then redirect the user into the payment_plan page
   * 
   * 
   */
  document.getElementById('insert').onclick = function(){
    Ready();

    var rootRef = firebase.database().ref('users/'+username);
            rootRef.set({
              //FName: fname,
              //LName: lname,
              Name: username,
              Pass: pwd
              //Email: email,
              //cell: phone
                }).then(success => {
                        console.log('success',success);
                        window.location.href = "payment_plan.html";
                    },
                    error => {
                        console.log('error',error);
                    }
                );
    }