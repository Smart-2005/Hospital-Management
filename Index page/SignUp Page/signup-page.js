const doc = document.getElementById('docSignupForm');
const patientSignup = document.getElementById('patientSignupForm');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target !== doc && !doc.contains(event.target) && event.target !== patientSignup && !patientSignup.contains(event.target)) {
        doc.style.display = "none";
        patientSignup.style.display = "none"; // Also close patient login form if open
    }
};

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

//contactus button
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

//==================================//

// Stop propagation when clicking on the buttons
document.getElementById('docSignupCardButton').addEventListener('click', function(event) {
    event.stopPropagation();
    patientSignup.style.display = 'none';
});

document.getElementById('patientSignupCardButton').addEventListener('click', function(event) {
    event.stopPropagation();
    doc.style.display = 'none';
});

//===========================


//==================Firebase Setup ================//

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

//==============================

const docGender = document.getElementById('docGender');
const selectedDocGender = {
    value: ''
};

docGender.addEventListener('change', function() {
  selectedDocGender.value = this.value; // Update the 'value' property
});

//==============================



    const createAccount = async ()=>{
//user Authentication

    const email = document.getElementById('docEmail').value;
    const password = document.getElementById('docPassword').value;

try {

  const userCredetial = await createUserWithEmailAndPassword(auth,email,password);
    console.log( userCredetial.user);
    toastr.success('Signup Success');


   
//Additional data saving to firebase

  const saveData = await addDoc(collection(firestore, "doctors-details"),{

    docEmail : document.getElementById('docEmail').value,
    docId : document.getElementById('docId').value,
    docFullName : document.getElementById('docFullName').value,
    docSpecialization : document.getElementById('docSpecialization').value,
    docGender : document.getElementById('docGender').value,
    docContactNumber : document.getElementById('docContactNumber').value
    
  });

//declared conformation if data stored in firestore

    console.log("Document Created with Id :",saveData.id);
    window.location.replace('http://127.0.0.1:5500/Index%20page/Logging%20Page/logging-page.html');


//trigger user authintication and saved user

 
  } catch (error) {
    toastr.error('Your Email Already in Used');
};

};

//trigger create account
document.getElementById('docSignupBtn').addEventListener('click',createAccount);


//========

  const docInputFields = document.querySelectorAll('#docSignupForm input, #docSignupForm select');
  const docSignupBtn = document.getElementById('docSignupBtn');

// Function to check if all input fields are valid
  function docInputFieldsValid() {
    return Array.from(docInputFields).every(field => field.validity.valid);
  }

// Function to enable or disable the button
  function docButtonState() {
    if (docInputFieldsValid()) {
      docSignupBtn.disabled = false;
    } else {
      docSignupBtn.disabled = true;
    }
  }

// Add event listeners to input fields
  docInputFields.forEach(field => {
    field.addEventListener('input', docButtonState);
  });

// Initial button state
  docButtonState();



////////////========== Patients Signup =============////////////////


const patientGender = document.getElementById('patientGender');
const selectedPatientGender = {
    value: ''
};

patientGender.addEventListener('change', function() {
  selectedPatientGender.value = this.value; // Update the 'value' property
});

//==============================



const createPatientAccount = async ()=>{

    //user Authentication
    
        const email = document.getElementById('patientEmail').value;
        const password = document.getElementById('patientPassword').value;
    
    try {

      const userCredetial = await createUserWithEmailAndPassword(auth,email,password);
        console.log( userCredetial.user);
        toastr.success('Signup Suceessfully');
        
    //Additional data saving to firebase
    
      const saveData = await addDoc(collection(firestore, "patients-details"),{
    
        patientEmail : document.getElementById('patientEmail').value,
        patientId : document.getElementById('patientId').value,
        patientFullName : document.getElementById('patientFullName').value,
        patientAge : document.getElementById('patientAge').value,
        patientGender : document.getElementById('patientGender').value,
        patientContactNumber : document.getElementById('patientContactNumber').value
        
      });
    
    //declared conformation if data stored in firestore
    
      console.log("Document Created with Id :",saveData.id);
      window.location.replace('http://127.0.0.1:5500/Index%20page/Logging%20Page/logging-page.html');
     
    //trigger user authintication and saved user
    


      } catch (error) {
        toastr.error('Your Email Already in Used'); //print errors
    };
    
    };
    
//trigger create account
    document.getElementById('patientSignupBtn').addEventListener('click',createPatientAccount);   

// Get references to all input fields
  const patientInputFields = document.querySelectorAll('#patientSignupForm input, #patientSignupForm select');
  const patientSignupBtn = document.getElementById('patientSignupBtn');

// Function to check if all input fields are valid
  function patientInputFieldsValid() {
    return Array.from(patientInputFields).every(field => field.validity.valid);
  }

// Function to enable or disable the button
  function patientButtonState() {
    if (patientInputFieldsValid()) {
      patientSignupBtn.disabled = false;
    } else {
      patientSignupBtn.disabled = true;
    }
  }

// Add event listeners to input fields
  patientInputFields.forEach(field => {
    field.addEventListener('input', patientButtonState);
  });

// Initial button state
  patientButtonState();
