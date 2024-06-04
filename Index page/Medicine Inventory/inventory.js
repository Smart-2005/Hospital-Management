const inventoryForm = document.getElementById('add-inventory-card')

// window.onclick = function(event) {
//     if (event.target !== inventoryForm && !inventoryForm.contains(event.target)) {
//         inventoryForm.style.display = "none";
//     }
// }

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';

import { getFirestore,getDocs,deleteDoc, collection,doc, addDoc,updateDoc } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js';


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

const db = getFirestore(firebaseApp);

const saveInventory = async()=>{
    try {
        const saveData = await addDoc(collection(db,"inventory-details"),{

            Drug_Code : document.getElementById('drugCode').value,
            Drug_Name : document.getElementById('drugName').value,
            Drug_Quantity : document.getElementById('drugQuantity').value,
            Received_Date : document.getElementById('drugReceivedDate').value,

        });
        toastr.success("Inventory Saved Successfully");
        setTimeout(function() 
        {
            window.location.reload(); 
        }, 2000 );
    } catch (error) {
        toastr.error("Check Entered Details");
    }
}
document.getElementById('addInventoryBtn').addEventListener('click',saveInventory)


//======== Load data to table ==========////

const tableBody = document.getElementById('table-body');
const updateForm = document.getElementById('update-inventory-form');

// Load data to table
function loadData() {
    getDocs(collection(db, 'inventory-details')).then((querySnapShot) => {
        tableBody.innerHTML = ''; // Clear the table body before appending new rows
        querySnapShot.forEach((doc) => {
            const data = doc.data();
            const row = `
                <tr>
                    <td>${data.Drug_Code}</td>
                    <td>${data.Drug_Name}</td>
                    <td>${data.Drug_Quantity}</td>
                    <td>${data.Received_Date}</td>
                    <td style="display: flex; align-items: center; justify-content: center;">
                        <button data-id="${doc.id}" class="btn btn-danger deleteBtn">Delete</button>&nbsp;|&nbsp;
                        <button class="btn btn-success updateBtn" data-id="${doc.id}" data-drug-code="${data.Drug_Code}" data-drug-name="${data.Drug_Name}" data-drug-quantity="${data.Drug_Quantity}" data-received-date="${data.Received_Date}">Update</button>
                    </td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
        // Add event listener after generating buttons
        document.querySelectorAll('.deleteBtn').forEach((button) => {
            button.addEventListener('click', function () {
                const docId = this.getAttribute('data-id');
                deleteInventory(docId);
            });
        });

        document.querySelectorAll('.updateBtn').forEach((button) => {
            button.addEventListener('click', function () {
                const docId = this.getAttribute('data-id');
                const drugCode = this.getAttribute('data-drug-code');
                const drugName = this.getAttribute('data-drug-name');
                const drugQuantity = this.getAttribute('data-drug-quantity');
                const receivedDate = this.getAttribute('data-received-date');
                loadUpdateForm(docId, drugCode, drugName, drugQuantity, receivedDate);
            });
        });
    });
}

window.onload = function () {
    loadData();
};

// load the update form with existing data
function loadUpdateForm(docId, drugCode, drugName, drugQuantity, receivedDate) {
    document.getElementById('update-inventory-card').style.display = 'flex';
    updateForm.querySelector('#drugCode').value = drugCode;
    updateForm.querySelector('#drugName').value = drugName;
    updateForm.querySelector('#drugQuantity').value = drugQuantity;
    updateForm.querySelector('#drugReceivedDate').value = receivedDate;

    // Add event listener for the update button
    document.getElementById('updateInventoryBtn').addEventListener('click', () => updateInventory(docId));
}

// Save or update inventory
const updateInventory = async (docId) => {
    try {
        const drugCode = updateForm.querySelector('#drugCode').value;
        const drugName = updateForm.querySelector('#drugName').value;
        const drugQuantity = updateForm.querySelector('#drugQuantity').value;
        const receivedDate = updateForm.querySelector('#drugReceivedDate').value;
        // Update existing document
        await updateDoc(doc(db, 'inventory-details', docId), {
            Drug_Code: drugCode,
            Drug_Name: drugName,
            Drug_Quantity: drugQuantity,
            Received_Date: receivedDate,
        });
        toastr.success('Inventory updated successfully');
        setTimeout(function() 
        {
            window.location.reload(); 
        }, 2000 );
    } catch (error) {
        console.log(error);
    }
};

// Delete inventory
function deleteInventory(docId) {
    try {
        deleteDoc(doc(db, 'inventory-details', docId))
            .then(() => {
                toastr.success('Document successfully deleted');
                setTimeout(function() 
                {
                    window.location.reload(); 
                }, 2000 ); 
            });
    } catch (error) {
        toastr.error("You Can't Delete That Document");
    }
    
}

//=======================
