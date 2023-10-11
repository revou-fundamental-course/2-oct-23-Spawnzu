document.getElementById('convert').addEventListener('click', function() {
 var celsius = parseFloat(document.getElementById('celsius').value);
 var fahrenheit = celsius * 9 / 5 + 32;
 document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
});

document.getElementById('reset').addEventListener('click', function() {
 document.getElementById('celsius').value = '';
 document.getElementById('fahrenheit').value = '';
});

document.getElementById('reverse').addEventListener('click', function() {
 var fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
 var celsius = (fahrenheit - 32) * 5 / 9;
 document.getElementById('celsius').value = celsius.toFixed(2);
});