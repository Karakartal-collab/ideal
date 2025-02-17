document.getElementById('pisagor-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    
    if (isNaN(a) || isNaN(b)) {
        alert('Lütfen geçerli bir sayı girin.');
        return;
    }
    
    const c = Math.sqrt(a * a + b * b).toFixed(2);
    
    document.getElementById('result').textContent = `Hipotenüs: ${c}`;
});