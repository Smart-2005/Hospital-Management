import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';

import { getFirestore,getDocs,collection,addDoc } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js';

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
  const firestore = getFirestore(firebaseApp);
  const dropdown = document.getElementById('dropdown');

  // Function to fetch data from Firestore
  let dataFetched = false; // Add this variable

  dropdown.addEventListener('click', fetchData);
  
  function fetchData() {
    if (dataFetched) return; // Check if data has already been fetched
  
    getDocs(collection(firestore, 'doctors-details'))
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const option = document.createElement('option');
          option.value = doc.data().docFullName;
          option.text = doc.data().docFullName;
          dropdown.appendChild(option);
        });
        dataFetched = true; // Set variable to true once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }

  // Add event listener to search input
const makeAppoinment = async ()=>{
  try {
    const getData = await addDoc(collection(firestore,'appoinment-details'),{

      Channeling_Doctor : document.getElementById('dropdown').value,
      Patient_FullName : document.getElementById('patientFullName').value,
      Patient_Address : document.getElementById('patientAddress').value,
      Appoinment_Date : document.getElementById('appoinmentDate').value,
      Appoinment_Time : document.getElementById('appoinmentTime').value,

    })
    toastr.success("(Make Sure to Save Your Appoinment Id)",getData.id,  );
  } catch (error) {
    toastr.error("Check Your Details");
  }
}



//========

const patientInputFields = document.querySelectorAll('#patient-form input, #patient-form select');
const bookAppoinmentBtn = document.getElementById('bookAppoinmentBtn');

// Function to check if all input fields are valid
function patientInputFieldsValid() {
  return Array.from(patientInputFields).every(field => field.validity.valid);
}

// Function to enable or disable the button
function appoinmentButtonState() {
  if (patientInputFieldsValid()) {
    bookAppoinmentBtn.disabled = false;
  } else {
    bookAppoinmentBtn.disabled = true;
  }
}

// Add event listeners to input fields
patientInputFields.forEach(field => {
  field.addEventListener('input', appoinmentButtonState);
});

// Initial button state
appoinmentButtonState();

bookAppoinmentBtn.addEventListener('click',makeAppoinment)
