// 1
console.log('Элемент div:', document.querySelector('div'));
console.log('Элемент ul:', document.querySelector('ul'));
console.log('Второй li (Пит):', document.querySelectorAll('li')[1]);

// 2
const listItems = document.querySelectorAll('li');
listItems.forEach(item => {
    item.classList.add('list-item');
});

// 3
const number = prompt('Введите количество блоков:');
const blocksContainer = document.getElementById('blocksContainer');

if (number && !isNaN(number)) {
    for (let i = 0; i < number; i++) {
        const block = document.createElement('div');
        block.className = 'block';
        block.textContent = `Блок ${i + 1}`;
        blocksContainer.appendChild(block);
    }
}

// 4
const form = document.getElementById('userForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    console.log('Отправленные данные:', { name, email });
    alert(`Форма отправлена!\nИмя: ${name}\nEmail: ${email}`);
    
    form.reset();
}); 