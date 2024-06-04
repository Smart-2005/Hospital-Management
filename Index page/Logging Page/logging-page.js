const doc = document.getElementById('docLogingForm');
const patientLoging = document.getElementById('patientLogingForm');

//======Nav Bar buttons======//


//home button
const home = async ()=>{
    try {
      location.replace("http://127.0.0.1:5500/Index%20page/index.html")
    } catch (error) {
      console.log(error);
    }
  }
  document.getElementById('homeBtn').addEventListener('click', home);
  
  //report button
  const contactusBtn = async ()=>{
    try {
      window.location.href="http://127.0.0.1:5500/Index%20page/index.html#footer"
    } catch (error) {
      console.log(error);
    }
  }
  document.getElementById('contactusBtn').addEventListener('click', contactusBtn);
  

  //=======appoinment buttons
  
  //make appoinment
  
    const makeAppoinment = async ()=>{
      try {
        window.location.href="http://127.0.0.1:5500/Index%20page/Appoinment%20Page/make-appoinment.html"
      } catch (error) {
        console.log(error);
      }
    }
    document.getElementById('makeAppoinmentBtn').addEventListener('click', makeAppoinment)
  
  //scheduled Appoinmet
  
    const scheduledAppoinment = async ()=>{
      try {
        window.location.href="http://127.0.0.1:5500/Index%20page/Scheduled%20Appoinment%20Page/scheduled-appoinment-page.html"
      } catch (error) {
        console.log(error);
      }
    }
    document.getElementById('scheduledAppoinmentBtn').addEventListener('click', scheduledAppoinment);
  
  //billing button
  
  const billingBtn = async ()=>{
      try {
        window.location.href="http://127.0.0.1:5500/Index%20page/Billing%20Page/billing-page.html"
      } catch (error) {
        console.log(error);
      }
    }
    document.getElementById('billingBtn').addEventListener('click', billingBtn);
  
  
  //medicine Inventory button
    const medicineInventory = async ()=>{
      try {
        window.location.href="http://127.0.0.1:5500/Index%20page/Medicine%20Inventory/inventory.html"
      } catch (error) {
        console.log(error);
      }
    }
    document.getElementById('medicineInventoryBtn').addEventListener('click', medicineInventory);
  





// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target !== doc && !doc.contains(event.target) && event.target !== patientLoging && !patientLoging.contains(event.target)) {
        doc.style.display = "none";
        patientLoging.style.display = "none"; // Also close patient login form if open
    }
}

// Stop propagation when clicking on the buttons
document.getElementById('docLogingCardButton').addEventListener('click', function(event) {
    event.stopPropagation();
    patientLoging.style.display = 'none';
});

document.getElementById('patientLogingCardButton').addEventListener('click', function(event) {
    event.stopPropagation();
    doc.style.display = 'none';
});

//===================================//

//user logging

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';
import {getAuth,signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js';



// Setup firebase

const firebaseApp = initializeApp ( {
    apiKey: "AIzaSyBdC3drbORuWS7LZEA0SB1iiLg0Eb42CXI",
    authDomain: "hospital-management-5a1db.firebaseapp.com",
    projectId: "hospital-management-5a1db",
    storageBucket: "hospital-management-5a1db.appspot.com",
    messagingSenderId: "720443192673",
    appId: "1:720443192673:web:ba265595e20fe947dac120",
    measurementId: "G-2XZ0Z3VKFV"
});

const auth = getAuth(firebaseApp);


//======= Doctor Loging ========//

const createDocAccount = async ()=>{

//user Authentication
    
        const email = document.getElementById('docEmail').value;
        const password = document.getElementById('docPassword').value;
       
    
    try {
        const userCredetial = await signInWithEmailAndPassword(auth,email,password);
          toastr.success('Login Success');
          console.log(userCredetial.user);
          setTimeout(function() 
          {
            window.location.replace('/home.html');
          }, 2000 );
        
        } catch (error) {
          toastr.error('Check Your Gmail and Password');
          console.log(error); //print errors
      }
      
      };

      //trigger create account

document.getElementById('btnLogin').addEventListener('click',createDocAccount); 

//======== Patient Loging ========//

const createPatientAccount = async ()=>{

    //user Authentication
        
            const email = document.getElementById('patientEmail').value;
            const password = document.getElementById('patientPassword').value;
        
        try {
            const userCredetial = await signInWithEmailAndPassword(auth,email,password);
              toastr.success('Login Success');
              console.log(userCredetial.user);
              setTimeout(function() 
              {
                window.location.replace('/home.html');
              }, 2000 );  
              
            

            } catch (error) {
              toastr.error('Check Your Gmail and Password');
              console.log(error); //print errors
          }
          };
    
          //trigger create account
    
    document.getElementById('patientLoginBtn').addEventListener('click',createPatientAccount); 


    //Doc Create One button
    const docCreateOneBtn = async ()=>{
      try {
        window.location.href="http://127.0.0.1:5500/Index%20page/SignUp%20Page/signup-page.html"
      } catch (error) {
        console.log(error);
      }
    }
document.getElementById('docCreateOneBtn').addEventListener('click', docCreateOneBtn);

      //Patient Create One button
      const patientCreateOneBtn= async ()=>{
        try {
          window.location.href="http://127.0.0.1:5500/Index%20page/SignUp%20Page/signup-page.html"
        } catch (error) {
          console.log(error);
        }
      }
      document.getElementById('patientCreateOneBtn').addEventListener('click', patientCreateOneBtn);