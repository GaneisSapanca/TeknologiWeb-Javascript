function hitungFibonacci() {
    const n = parseInt(document.getElementById("fibonacciInput").value);
    if (isNaN(n)) {
        alert("Masukkan angka yang valid.");
        return;
    }

    const result = fibonacci(n);
    document.getElementById("hasilFibonacci").innerText = `Fibonacci ke-${n} adalah ${result}`;
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function hitungVolumeKubus() {
    const sisi = parseFloat(document.getElementById("sisiKubusInput").value);
    if (isNaN(sisi)) {
        alert("Masukkan angka yang valid.");
        return;
    }

    const volume = sisi ** 3;
    document.getElementById("hasilKubus").innerText = `Volume Kubus dengan sisi ${sisi} adalah ${volume}`;
}

function hitungVolumeBalok() {
    const panjang = parseFloat(document.getElementById("panjangBalokInput").value);
    const lebar = parseFloat(document.getElementById("lebarBalokInput").value);
    const tinggi = parseFloat(document.getElementById("tinggiBalokInput").value);
    
    if (isNaN(panjang) || isNaN(lebar) || isNaN(tinggi)) {
        alert("Masukkan angka yang valid untuk panjang, lebar, dan tinggi.");
        return;
    }

    const volume = panjang * lebar * tinggi;
    document.getElementById("hasilBalok").innerText = `Volume Balok dengan panjang ${panjang}, lebar ${lebar}, dan tinggi ${tinggi} adalah ${volume}`;
}

function hitungVolumeBola() {
    const jariJari = parseFloat(document.getElementById("jariJariBolaInput").value);
    if (isNaN(jariJari)) {
        alert("Masukkan angka yang valid untuk jari-jari.");
        return;
    }

    const volume = (4/3) * Math.PI * jariJari**3;
    document.getElementById("hasilBola").innerText = `Volume Bola dengan jari-jari ${jariJari} adalah ${volume.toFixed(2)}`;
}
