/*eslint eqeqeq:0*/
import React, {Component} from 'react';
import '../styles/menu.css'
import Logo from '../media/LogoArea.png';



class Menu extends Component {
  myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    element.classList.toggle("cardui");
  }
   changebackground(){
	document.getElementById('card').style.backgroundColor = 'green' ; 
}

 

  boxSure() {
    var result = window.confirm('Are you sure you want to delete your account ?');
    console.log(result)

    if (result === true) {

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json; charset=UTF-8");
      var link = '/sign-in';
      
      var raw = JSON.stringify({"username": sessionStorage.getItem("name") });
      var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
      };
      
      fetch("http://localhost:8080/auth/", requestOptions)  
   
      .then(response => {
        response.json();

        if (response.status === 200) {
          alert('Account deleted !');

          window.location.href = link;
        }
      })
      
      .then( result => {
         window.location.href = link;
             
   
   
   
      }
      
   
      )
      .catch(error => console.log('error', error));



    } else {
      console.log("Annulé");
    }

 
   
  

  }


    render() {

      // function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
 if (localStorage.getItem('theme') === 'theme-dark'){
     setTheme('theme-light');
 } else {
     setTheme('theme-dark');
 }
}
// Immediately invoked function to set the theme on initial load
(function () {
 if (localStorage.getItem('theme') === 'theme-dark') {
     setTheme('theme-dark');
 } else {
     setTheme('theme-light');
 }
})();

      var username = sessionStorage.getItem("name");
        return (

            <div className="bg-menu">             
            <div class="header">
            <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu"></input>

            <label for="openSidebarMenu" class="sidebarIconToggle">
              <div class="spinner diagonal part-1"></div>
              <div class="spinner horizontal"></div>
              <div class="spinner diagonal part-2"></div>

            </label>
            <div className="deco">
            <li> 
                  
                  <label className="switch"> 
                  <input type="checkbox"id="switch" onClick={() => { toggleTheme() }}/> 
                  
                  <span className="slider round"></span>

                  </label> 
                  </li>
                  <i class="fa fa-moon-o" aria-hidden="true"></i>
                  <i class="fa fa-sun-o" aria-hidden="true"></i>

            <li className="signout"><a href="./sign-in">Sign Out</a> <i className="fa fa-sign-out"></i></li>
            </div>
           
            <div className="logo"> 

            <img src={Logo} alt="logo-pic"/>
         
                </div>
        
         
            <div id="sidebarMenu">
              <ul class="sidebarMenuInner">

                <li className="header-sidebar"><h1>Welcome !</h1><i className="fa fa-user-circle"></i><h2 className="title-name">{username}</h2> <a href="http://localhost:3000/dashboard" onClick={() => {this.boxSure()}} className="trash"> <i class="fa fa-trash" aria-hidden="true"></i>   </a></li>
                <li className="dashboard"><a href="./dashboard"> Dashboard </a><i className="fa fa-desktop"></i></li>
                <li className="services"><a href="./services">Services </a><i className="fa fa-bell"></i></li>
                <li className="settings"><a href="./settings">Your Areas </a><i className="fa fa-cogs"></i></li>
                <li className="settings"><a href="./client.apk" target="_blank">Download APK </a><i className="fa fa-android"></i></li>

                <div className="footer">

                <p>Copyright © 2021 Area</p>
                </div>
              </ul>
            </div>
    
            
            </div>
            </div>


          
         
      


   

            


        );
    };
}

export default Menu;