       
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
        import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyBdC3drbORuWS7LZEA0SB1iiLg0Eb42CXI",
            authDomain: "hospital-management-5a1db.firebaseapp.com",
            projectId: "hospital-management-5a1db",
            storageBucket: "hospital-management-5a1db.appspot.com",
            messagingSenderId: "720443192673",
            appId: "1:720443192673:web:ba265595e20fe947dac120",
            measurementId: "G-2XZ0Z3VKFV"
          };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('search-bar-input');

        const channelingDoctorInput = document.getElementById('channelingDoctor');
        const patientFullNameInput = document.getElementById('patientFullName');
        const patientAddressInput = document.getElementById('patientAddress');
        const appoinmentDateInput = document.getElementById('appoinmentDate');
        const appoinmentTimeInput = document.getElementById('appoinmentTime');

        searchBtn.addEventListener('click', async () => {
            const docId = searchInput.value;
            const docRef = doc(db, "appoinment-details", docId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data();

                channelingDoctorInput.value = data.Channeling_Doctor;
                patientFullNameInput.value = data.Patient_FullName;
                patientAddressInput.value = data.Patient_Address;
                appoinmentDateInput.value = data.Appoinment_Date;
                appoinmentTimeInput.value = data.Appoinment_Time;

                toastr.success("Done");
            } else {
                toastr.error("Check Your Appoinment Id");;
            }
        });