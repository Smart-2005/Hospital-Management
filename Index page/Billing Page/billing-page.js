// Add event listeners to cost input fields
document.getElementById('cost1').addEventListener('input', sum);
document.getElementById('cost2').addEventListener('input', sum);
document.getElementById('cost3').addEventListener('input', sum);
document.getElementById('cost4').addEventListener('input', sum);

function sum() {
    const cost1 = parseInt(document.getElementById('cost1').value) || 0;
    const cost2 = parseInt(document.getElementById('cost2').value) || 0;
    const cost3 = parseInt(document.getElementById('cost3').value) || 0;
    const cost4 = parseInt(document.getElementById('cost4').value) || 0;
    const total = cost1 + cost2 + cost3 + cost4;
    document.getElementById('total').value = total;
};

const statusDropdown = document.getElementById('statusDropdown');
const selectedStatus = document.getElementById('selectedStatus');

statusDropdown.addEventListener('change', function() {
    selectedStatus.textContent = this.value;
});

function printPdf() {
    window.print();
}
document.getElementById('printPdf').addEventListener('click',printPdf)