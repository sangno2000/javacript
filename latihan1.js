
//Membuat program sederhana untuk mengecek tingkat kelululusan

//Nilai yang di anggap lulus adalah nilai yang di atas > 80
// < 80 = gagal
// > 80 = lulus

// let nilaiLulus = 80;
// let name = prompt("Masukkan nama ")
// let input = prompt(" Masukkan nilai rata-rata ujian semester");


// if (input >= nilaiLulus) {
//     alert("Selamat nilai ujian semester kamu baik, kamu di nyatakan lulus")  
   
// }else {
//     alert("Mohon maaf nilai kamu tidak mencukupi untuk mengikutio ujian selanjutnya,silahkan kamu mengikuti ujian susulan ya");
// }
// let lanjut = confirm("Apa kamu ingin cek nilai yang lain?")  
//    if (lanjut == true) {
//     let jika=prompt("Silahkan masukkan nilai study yang ingin kamu cek")
//     if (jika >= 75) {
//         alert(`ujian study kamu juga lulus ,selamat yah ${name}`)
//     }else{
//         document.write("Banyak-banyakin lagi belajar di rumah ya , Minggu depa ada ulangan semoga kamu berhasil lulus")
//     }
//    }

 
//menggunakan pencabangan
 // let contoh = confirm(" Kamu yakin mau keluar?");
 //  if (contoh === true) {
 //    alert(" Oke kamu berhasil keluar");
 //  }else {
 //    alert("Oke kamu tidak berhasil keluar")
 //  }

  //menggunakan pengulangan

  // alert("Selamat datang ya");
  // let lagi = true;

  // while(lagi === true){
  //   let name = prompt("Masukkan nama kamu");
  //   alert(`Hallo ${name}`);
  //   lagi = confirm("Apa kamu masih mau lanjut?");
  // }
  // alert("Terimakasih sampai jumpa ya");


//LATIHAN 2 WEB PROGRAMMING UNPAS   

  // let jumlahAngkot = 10;
  // let angkotBeroperasi = 6;
  // let noAngkot = 1;


  //   while(noAngkot <= angkotBeroperasi){
  //       console.log(`Angkot No. ${noAngkot} beroperasi dengan baik`);
  //   noAngkot++;
  //   }

  //   for (let angkotRusak = angkotBeroperasi +1 ; angkotRusak <= jumlahAngkot; angkotRusak++ ) {
  //       console.log(`Angkot No. ${angkotRusak} tidak dapat beroperasi`);
  //   }


//LATIHAN 3 WEB PROGRAMMING UNPASS

    // let jumlahAngkot = 10;
    // let angkotBeroperasi = 6;
    
    // for(let noAngkot = 1; noAngkot <= 10; noAngkot++){
    //     if (noAngkot <= 6 && noAngkot !== 5) {
    //         console.log(`Angkot No. ${noAngkot} beroperai dengan baik.`);
    //     }else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    //         console.log(`Angkot No. ${noAngkot} sedang lembur`)
    //     }
    //     else {
    //         console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi.`)
    //     }
    // }

    //Aplikasi sedarhana untuk melihat angka genap atau ganjil

    // let input = prompt("Masukkan angka yang ingin kamu cek");

    // if (input % 2 == 0) {
    //     console.log("Ini adalah angka genap");
    // }else if (input % 2 == 1) {
    //     console.log("Ini adalah angka ganjil")
    // }
    // else {
    //     console.log("Data yang kamu masukkan tidak di ketahui")
    // }


    //SWITCH
    
    // let item = prompt("Silahkan pilih menu yang tersedia di bawah ini \n Dan anda bsia memilih tingkat kematangan nya\n Tersedia : Steak , Rendang, Nasi goreng, Burger, Ayam goreng");

    // switch (item) {
    //     case "Steak":
    //         console.log("Ini adalah makanan yang berasal dari amerika, eropa, dan jepang");
    //         break;
    //     case "Nasi goreng":
    //         console.log("Makanan ini berasal dari indonesia ,yang bercita rasa gurih dan memiliki topping yang beragam");
    //         break;
    //     case "Burger":
    //         console.log("Makanan ini berasaldari negeri paman sam amerika,yang di kenal sebagai makanan junk food .makanan ini termasuk tidak sehat karena bnyak lemak");
    //         break;
    //     default:
    //         console.log("Makanan yang kamu pilih tidak tersedia, maaf");
    //         break;
    // }


    //Pengkondisian dan pengulangan bersarang pada javascript

     // let s = "";
     // for(let i = 0; i < 10; i++){
     //   for (let c = 0; c <= i; c++){
     //    s += "*"

     //   }
     //    s += "\n"
     // }
     // console.log(s)

     // let s = "";
     // for(let i = 0; i < 10; i++){
     //   for (let c = 0; c <= i; c++){
     //    s += "*"

     //   }
     //    s += "\n"
     // }
     // console.log(s)

     // let string = "";
     // let piramid = 10;

     // for ( let kerucut = 10))
     // for (let bawah = 1; bawah <= 10; bawah++){
     //    if (piramid >= bawah) {
     //      string += "*"
     //      console.log(string)
     //    }
     // }


//kerucut dari atas ke bawah
    //  let string = "";
    //  for(let j = 0; j < 10; j++){
    //   for(let c = 0; c <= j; c++){
       
 
       
    //   }
      
    //   string += "*";
    //  }
    //  console.log(string);
        
      
     

  //kerucut dari bawak ke atas

      // let b = "";
      // for(let i = 10; i > 0; i--){
      // for(let s = 0; s < i; s++){
      //   b += "*"
      // }
      // b += "\n"
      // }
      // console.log(b);




    //latihan membuat game suwit jawa web unpas

  // hal yang perlu di ketahui cara kerja game nya
  // mengambil input dari pemain, gajah ,semut ,atau dan orang


  let get = confirm(" Selamat bermain game suwit jawa\n Di develop Oleh WEB PROGRAMMING UNPAS dan HADI SUCIPTO");
  if ( get == true) {
    alert("Masukkan : Gajah, Semut, Orang");
  }else{
    alert("Sampai jumpa di lain waktu");
  }

  let lagi = true;
  while(lagi){
    let pemain = prompt("Silahkan masukkan jawaban kamu");
    
    // mengenarate bilangan random
    let com = Math.random();

    // mengambil nilai dari computer
  
    if (com < 0.35){
      com = "gajah";
    }else if (com >= 0.34 && com < 0.68){
      com = "orang";
    }else {
      com = "semut";
    }

    // menentukan rules
    let hasil = "";

    if(pemain == com) {
      hasil = "Permainan seri";
    }else if(pemain == "gajah"){
      if(com == "orang"){
        hasil = "Kamu menang";
      }else {
        hasil = "Kamu kalah"
      }
    }else if ( pemain == "orang"){
      if(com == "semut"){
        hasil = "Kamu menang";
      }else {
        hasil = "Kamu kalah";
      }
    }else if ( pemain == "semut"){
      if(com == "gajah"){
        hasil ="Kamu menang";
      }else {
        hasil = "Kamu kalah"
      }
    }else {
      hasil =" Jawaban yang  kamu masukkan salah"
    }
    // menampilkan hasil nya

    alert(`jawaban yang kamu masukan ${pemain} .Komputer memilih ${com} hasil permainan [${hasil}]`);
    console.log(com);
    

    lagi = confirm("masih mau lanjut?");
  } 



  //Tugas dari pak dika unpas
  // Buat game tebak angka sederhana 1 - 10 bilangan bulat
  // alert masukkan angka tebakan
  // buat 3 kali kesempatan
  // dan jika kalah tampilkan alert anda gagal terlalu rendah atau terlalu tinggi

  
  //ambil input dari pemain
  
  // let user = prompt("Permainan tebak angka \n Masukkan angka tebakan 1 - 10 ");

  // //generate bilangan bulat random 1 - 10

  // let random = Math.floor(Math.random() *10);
  
  // //rules


  // let result = "";
  // let loop = true;
  // let kosong = "";
  //   for( let coba = 3; coba >= 1; coba--){
  //       if (user == random){
  //         alert("Tebakan kamu benar");
     
  //       }else if ( user < random){
  //         result =`Tebakan terlalu rendah,kamu masih memiliki ${coba} kesempatan`;
        
  //       }else if ( user > random){
  //        result= `Tebakan terlalu tinggi, Kamu masih memiliki ${coba} kesempatan`;
         
  //       }else if ( user > 10){
  //         result = "angka yang kamu masukkan tidak di ketahui dan kesempatan kamu habis";
  //       }else {
  //         result = "Tebakan kamu salah"
  //       } 
  //   } 

  //   alert(result);
        
    
    
  
  // console.log(random);

  //hasil



  // let user = prompt("Permainan tebak angka \n Masukkan angka tebakan 1 - 10 ");

  // //generate bilangan bulat random 1 - 10

  // let random = Math.floor(Math.random() *10);
  
  // //rules

  // let result = "";

  // let loop = true;
  // let kosong = "";
  //   for( let coba = 3; coba >= 1; coba--){
      
  //       if (user == random){
  //         alert("Tebakan kamu benar");
  //         break;
  //       }else if ( user < random){
  //        alert(`Tebakan terlalu rendah,kamu masih memiliki ${coba} kesempatan`);
  //        prompt(result)
  //       }else if ( user > random){
  //        alert(`Tebakan terlalu tinggi, Kamu masih memiliki ${coba} kesempatan`);
  //       }else if ( user > 10){
  //         alert ("angka yang kamu masukkan tidak di ketahui dan kesempatan kamu habis");
  //       }else {
  //         alert ="Tebakan kamu salah"
  //       } 
     
  //   }

  // console.log(random);




  // confirm ("Game Tebak angka 1 - 10");

  // //get data from pemain
  // let pemain = prompt("Masukkan angka pilihan mu 1 - 10.\nDan kamu di beri 3 kali kesempatan"); 

  // //get data random from program
  // let random = Math.floor(Math.random() *10);
  // console.log(random)
  // //rules
  // let ucapan="Tebakan kamu salah,";

  // for(let chance=3; chance> 1; chance--){
  //     if(pemain == random){
  //       alert("Congratulation tebakan kamu benar");
  //     }
      
  //   for(let sempat=3; sempat > 1; sempat--){
  //     if (pemain < random){
  //       alert("tebakan kamu terlalu rendah")
        
  //     }else if (pemain > random){
  //       alert("tebakan kamu terlalu tinggi");
       
  //     }else {
  //       alert(`${ucapan} . Kesempatan kamu sudah habis`);
  
  //       }
  //   }
  // }
      
  // alert("Terima kasih sudah bermain")

  




// confirm("Permainan tebak angka sederhana");
// let pemain = prompt("Masukkan angka tebakan 1 - 10"); //mengambil input dari pemain
// let computer = Math.floor(Math.random() *10); //data random dari computer

// let info = alert("Tebakan kamu salah");
// if(pemain == computer){

// }else if (pemain < computer){
//   alert(info);
//   alert("Tebakan kamu terlalu rendah");
// }else if(pemain > computer){
//   alert(info);
//   alert("Tebakan kamu terlalu tinggi")
// }else {
//   alert(info);
//   alert("Tebakan kamu salah,Dan kesempatan kamu sudah habis")
// }

// for (let kesempatan = 3; kesempatan > 1; kesempatan--){
//   console.log(kesempatan);
//   for (let ulang= 1; ulang < 3; ulang++){
//     if (pemain == computer){
//       alert("Tebakan kamu benar")
//     }else if(pemai)
//   }
// }

