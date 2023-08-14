flag = 1
        function f1() {
            alert("Love you <3")
            location.replace("https://wa.me/6289522571642?text=Halo%20Sayang%20Aku%20Mau%20Jadi%20Pacar%20Kamu%20Kok%20");
        }
        function f() {
            if (flag == 1) {
                Bn.style.top = 400
                Bn.style.left = 300
                flag = 2
            }
            else if (flag == 2) {
                Bn.style.top = 390
                Bn.style.left = 30
                flag = 3
            }
            else if (flag == 3) {
                Bn.style.top = 370
                Bn.style.left = 166
                flag = 1
            }
        }

const inputNama = document.getElementById('nama');
const hasilNama = document.getElementById('hasil');

inputNama.addEventListener('input', function() {
  hasilNama.textContent = `Hi, ${inputNama.value}  cantik`;
});
