document.addEventListener('DOMContentLoaded', function() {
    const supportForm = document.getElementById('supportForm');
    const successMessage = document.getElementById('successMessage');
    const newMessageBtn = document.getElementById('newMessageBtn');
    const userNameElement = document.getElementById('userName');
    
    supportForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const userName = document.getElementById('name').value;
        
        const formData = {
            name: userName,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            agree: document.getElementById('agree').checked
        };
        
        console.log('Отправка данных в техподдержку:', formData);
        
        const submitBtn = supportForm.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
        
        setTimeout(function() {
            userNameElement.textContent = userName;
            
            supportForm.classList.add('hidden');
            successMessage.classList.remove('hidden');
            
            supportForm.reset();
            
            submitBtn.disabled = false;
            submitBtn.textContent = 'Отправить сообщение';
        }, 1500);
    });
    
    newMessageBtn.addEventListener('click', function() {
        successMessage.classList.add('hidden');
        supportForm.classList.remove('hidden');
    });
    
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('input', function() {
        if (!emailInput.checkValidity()) {
            emailInput.style.borderColor = '#e74c3c';
        } else {
            emailInput.style.borderColor = '#ddd';
        }
    });
});
