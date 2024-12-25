document.getElementById('demoForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    document.getElementById('message').textContent = `Hello, ${name}! Welcome to the demo.`;
});
