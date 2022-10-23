//WAKTU
window.setTimeout("waktu()", 1000);
function waktu() {
   const waktu = new Date();
   setTimeout("waktu()", 1000);
   document.getElementById("jam").innerHTML = waktu.getHours();
   document.getElementById("menit").innerHTML = waktu.getMinutes();
   document.getElementById("detik").innerHTML = waktu.getSeconds();
   const hari = waktu.getDay();
   const tanggal = waktu.getDate();
   const bulan = waktu.getMonth();
   const tahun = waktu.getYear();
   
//AGAR JAM AWALNYA 0
  if (waktu.getHours() < 10)
      {
         document.getElementById("jam").innerHTML = "0"+waktu.getHours();
      }
      if (waktu.getMinutes() < 10)
      {
         document.getElementById("menit").innerHTML = "0"+waktu.getMinutes();
      }
      if (waktu.getSeconds() < 10)
      {
         document.getElementById("detik").innerHTML = "0"+waktu.getSeconds();
      }
      
//SAPAAN
const kotak = document.getElementById("kotak")
if (waktu.getHours() >= 16 && waktu.getHours() <= 18) {
    document.querySelector(".sapa p").innerHTML = "Selamat Sore";
    kotak.style.backgroundImage = "url(planet-picsay.png)";
}else if (waktu.getHours() > 18 && waktu.getHours() <= 23) {
    document.querySelector(".sapa p").innerHTML = "Selamat Malam";
    kotak.style.backgroundImage = "url(wallpaperflare.com_wallpaper.jpg)";
}else if (waktu.getHours() == 0) {
    document.querySelector(".sapa p").innerHTML = "Tengah Malam";
    document.querySelector(".kalimat p").innerHTML = "- Tidur Sekarang -";
    kotak.style.backgroundImage = "url(sleep.jpeg)";
}else if (waktu.getHours() <= 4 && waktu.getHours != 0) {
    document.querySelector(".sapa p").innerHTML = "Selamat Pagi";
    kotak.style.backgroundImage = "url(1666107271394.jpg)";
}else if (waktu.getHours() > 4 && waktu.getHours() <= 10) {
    document.querySelector(".sapa p").innerHTML = "Selamat Pagi";
    kotak.style.backgroundImage ="url(Niceview.jpeg)";
    if (waktu.getHours() > 4 && waktu.getHours() < 6) {
    document.querySelector(".kalimat p").innerHTML = "- Mulai Hari Mu -";
    }
}else {
    document.querySelector(".sapa p").innerHTML = "Selamat Siang";
    kotak.style.backgroundImage ="url(Windows11-picsay.jpg)";
}

//HARI
const tampilHari = document.querySelector(".hari p");
if (hari == 0) {
namahari = "Minggu";
}else if (hari == 1) {
namahari = "Senin";
}else if (hari == 2) {
namahari = "Selasa";
}else if (hari == 3) {
namahari = "Rabu";
}else if (hari == 4) {
namahari = "Kamis";
}else if (hari == 5) {
namahari = "Jum'at";
}else {
namahari = "Sabtu";
}

//BULAN
if (bulan == 0) {
namabulan = "Januari";
}else if (bulan == 1) {
namabulan = "Februari";
}else if (bulan == 2) {
namabulan = "Maret";
}else if (bulan == 3) {
namabulan = "April";
}else if (bulan == 4) {
namabulan = "Mei";
}else if (bulan == 5) {
namabulan = "Juni";
}else if (bulan == 6) {
namabulan = "Juli";
}else if (bulan == 7) {
namabulan = "Agustus";
}else if (bulan == 8) {
namabulan = "September";
}else if (bulan == 9) {
namabulan = "Oktober";
}else if (bulan == 10) {
namabulan = "November";
}else {
namabulan = "Desember";
}

// TAHUN 
if (tahun == 122) {
    namatahun = 2022;
}else if (tahun == 123) {
    namatahun == 2023;
}else if (tahun == 124) {
    namatahun == 2024;
}else if (tahun == 125) {
    namatahun == 2025;
}

//TAMPILKAN HARI TANGGAL BULAN TAHUN
tampilHari.innerHTML = ""+namahari+", "+tanggal+" "+namabulan+" "+namatahun;
} 
