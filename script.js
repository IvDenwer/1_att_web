document.addEventListener('DOMContentLoaded', function() {
    const supportForm = document.getElementById('supportForm');
    const successMessage = document.getElementById('successMessage');
    const newMessageBtn = document.getElementById('newMessageBtn');
    const userNameElement = document.getElementById('userName');
    
    // Обработка отправки формы
    supportForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Получаем имя пользователя из формы
        const userName = document.getElementById('name').value.trim();
        
        // Проверяем, что имя не пустое
        if (!userName) {
            alert('Пожалуйста, введите ваше имя');
            return;
        }
        
        // Сбор данных формы
        const formData = {
            name: userName,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            agree: document.getElementById('agree').checked
        };
        
        console.log('Отправка данных:', formData);
        
        // Показываем анимацию загрузки
        const submitBtn = supportForm.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
        
        // Имитация отправки на сервер
        setTimeout(function() {
            // Устанавливаем имя пользователя в сообщение
            userNameElement.textContent = userName;
            
            // Показываем сообщение об успехе
            supportForm.classList.add('hidden');
            successMessage.classList.remove('hidden');
            
            // Очищаем форму
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
