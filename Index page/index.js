

const docSignup =  document.getElementById('docSignupform');
const patientSignup = document.getElementById('patientSignupform');
const footer = document.getElementById('footer');


window.onclick = function(event) {
    if (event.target == docSignup ||event.target == patientSignup) {
        docSignup.style.display = "none";
        patientSignup.style.display = "none";
    }
};

//============================================

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';

import {getAuth,createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js';


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

//User Auth
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

////////////========== Doctor Signup =============////////////////
  const createAccount = async ()=>{

//user Authentication

    const email = document.getElementById('docEmail').value;
    const password = document.getElementById('docPassword').value;

try {

//Additional data saving to firebase

  const saveData = await addDoc(collection(firestore, "doctors-details"),{

    Doc_Email : document.getElementById('docEmail').value,
    Doc_Id : document.getElementById('docId').value,
    Doc_FullName : document.getElementById('docFullName').value,
    
  });

//trigger user authintication and saved user

  const userCredetial = await createUserWithEmailAndPassword(auth,email,password);
    toastr.success("Signup Done");
    console.log(userCredetial.user);

    setTimeout(function() 
    {
      window.location.replace('http://127.0.0.1:5500/Index%20page/Logging%20Page/logging-page.html');
    }, 2000 );
   

  } catch (error) {
    toastr.error("Check Your Email and Password"); //print errors
}
};

//trigger create account
document.getElementById('btnDocSignup').addEventListener('click',createAccount);   


////////////========== Patients Signup =============////////////////

const createPatientAccount = async ()=>{

  //user Authentication
  
      const email = document.getElementById('patientEmail').value;
      const password = document.getElementById('patientPassword').value;
  
  try {
  
  //Additional data saving to firebase
  
    const saveData = await addDoc(collection(firestore, "patients-details"),{
  
      Patient_Email : document.getElementById('patientEmail').value,
      Patient_Id : document.getElementById('patientId').value,
      Patient_FullName : document.getElementById('patientFullName').value,
      
    });
  
  //trigger user authintication and saved user
  
    const userCredetial = await createUserWithEmailAndPassword(auth,email,password);
    toastr.success("Signup Done");
    console.log(userCredetial.user);

    setTimeout(function() 
    {
      window.location.replace('http://127.0.0.1:5500/Index%20page/Logging%20Page/logging-page.html');
    }, 2000 );
   


    } catch (error) {
      toastr.error("Check Your Email and Password"); //print errors
  }
  };
  
  //trigger create account
  document.getElementById('patientSignupBtn').addEventListener('click',createPatientAccount); 
  



//======== Social Media ========//
const facebook = async()=>{
  try {
    window.location.assign("https://www.facebook.com")
  } catch (error) {
    console.log(error);
  }
}
document.getElementById('facebook').addEventListener('click',facebook);   

const instagram = async()=>{
  try {
    window.location.assign("https://www.instagram.com")
  } catch (error) {
    console.log(error);
  }
}
document.getElementById('instagram').addEventListener('click',instagram);   

const twitter = async()=>{
  try {
    window.location.assign("https://www.twitter.com")
  } catch (error) {
    console.log(error);
  }
}
document.getElementById('twitter').addEventListener('click',twitter);

const youtube = async()=>{
  try {
    window.location.assign("https://www.youtube.com")
  } catch (error) {
    console.log(error);
  }
}
document.getElementById('youtube').addEventListener('click',youtube);