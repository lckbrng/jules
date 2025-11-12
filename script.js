document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    const cursor = document.createElement('span');
    cursor.id = 'cursor';
    cursor.textContent = '_';
    main.appendChild(cursor);

    setInterval(() => {
        cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }, 500);
});
