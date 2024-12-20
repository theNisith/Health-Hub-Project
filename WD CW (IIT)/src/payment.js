const checkoutForm = document.getElementById('checkoutForm'); 

checkoutForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const inputs = checkoutForm.querySelectorAll('input'); 

    let isValid = true;
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if (isValid) {
        submitPayment(); 
    } else {
        alert('Please fill in all the required fields.');
    }
});

function submitPayment() {
    alert('Payment submitted successfully!');
    window.location.href = "shop.html";
}
