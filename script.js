
const inputNama = document.getElementById('nama');
const hasilNama = document.getElementById('hasil');

inputNama.addEventListener('input', function() {
  hasilNama.textContent = `Hi, ${inputNama.value}  cantik`;
});
