document.addEventListener('DOMContentLoaded', function() {
    const supportForm = document.getElementById('supportForm');
    const successMessage = document.getElementById('successMessage');
    const newMessageBtn = document.getElementById('newMessageBtn');
    
    // Обработка отправки формы
    supportForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Сбор данных формы
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            agree: document.getElementById('agree').checked
        };
        
        // Здесь должна быть логика отправки данных на сервер
        // Для примера используем setTimeout для имитации отправки
        console.log('Отправка данных в техподдержку:', formData);
        
        // Показываем анимацию загрузки
        const submitBtn = supportForm.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
        
        // Имитация отправки на сервер
        setTimeout(function() {
            // Скрываем форму и показываем сообщение об успехе
            supportForm.classList.add('hidden');
            successMessage.classList.remove('hidden');
            
            // Очищаем форму (на случай если пользователь захочет отправить новое сообщение)
            supportForm.reset();
            
            // Восстанавливаем кнопку
            submitBtn.disabled = false;
            submitBtn.textContent = 'Отправить сообщение';
        }, 1500);
    });
    
    // Обработка кнопки "Новое сообщение"
    newMessageBtn.addEventListener('click', function() {
        successMessage.classList.add('hidden');
        supportForm.classList.remove('hidden');
    });
    
    // Валидация email в реальном времени
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('input', function() {
        if (!emailInput.checkValidity()) {
            emailInput.style.borderColor = '#e74c3c';
        } else {
            emailInput.style.borderColor = '#ddd';
        }
    });
});
