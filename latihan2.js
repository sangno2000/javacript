
let lagi = true;;
while(lagi) {
    confirm(`Permainan game tebak angka sederhana
    \n Di Buat Oleh Hadi`);
    let random = Math.floor(Math.random()*10); //GET DATA NUMBER RANDOM 1 - 10
    console.log(random)
    let pengguna=prompt(`Masukkan angka tebakanmu 1 - 10 
        \nBila tebakan kamu benar kamu mendapatka kulkas hehe`); //get data input from player
    for(let chance = 3 -1; chance >= 1; chance--){ 
        if(pengguna == random){
            alert("HEBAT!!Tebakan kamu benar");
            break;
        };
        if(pengguna < random ){
            alert("tebakan kamu salah");
            pengguna = prompt(`Angka yang kamu masukkan terlalu rendah, kamu masih memiliki ${chance} kesempatan`);
        }else if (pengguna > random && pengguna < 10){
            alert("tebakan kamu salah");
            pengguna = prompt(`Angka yang kamu masukkan terlalu tinggi,kamu masih memiliki ${chance} kesempatan`);
        }else {
            alert("Tebakan yang kamu masukkan tidak di ketahui");
            break;
        };
        if(chance == 1 && pengguna == random){
            alert("HEBAT!!Tebakan kamu benar");
            break;
        };
        if (chance == 1){
            alert("Tebakan kamu salah,dan kesempatan kamu sudah habis")
            break;
        };
    }
    lagi = confirm("Masih mau main lagi?");  
}
alert("Terimakasih sudah bermain");




