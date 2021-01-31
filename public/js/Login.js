
      /**Global variable for storing the login credentials */ 
      var username, pwd;
        /**
         * parsing the data from user input and setting them as the global variable listed above
         * 
         */
      function Ready(){
        user = document.getElementById('username').value;
        passw = document.getElementById('pwd').value;


      }; 
      /**In this anonimous function we open a connection with the firebase real time database
       * then we compare the user input with the credientials stored in the database
       * if both username and password matches, then we redirect the user to browse page
       */
      document.getElementById("submit").onclick = function(){
        Ready();
        firebase.database().ref('users/'+user).on('value', function(snapshot){
          
          if(snapshot.val().Name != user || snapshot.val().Pass != passw){
            document.getElementById("error").innerHTML = "Wrong keyword entry.";
          }
          else{
            console.log(snapshot.val().Name);
            console.log(snapshot.val().Pass);
          }
          

        });
      }