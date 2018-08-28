// Proxytia Game
// var nama = null
// var nama    
var nama = "Iqbal"
    // var peran = null
    // var peran
var peran = "Tabib" /*Ksatria,Tabib,Penyihir*/

if (nama === null || nama === undefined) {
    console.log("Nama harus diisi!")
} else if (peran === null || peran === undefined) {
    console.log("Halo ", nama, ", Pilih peranmu untuk memulai game");
} else {
    console.log("Selamat datang di Dunia Proxytia, ", nama)
    if (peran === 'Ksatria') {
        console.log("Halo", peran, nama, ",kamu dapat menyerang dengan senjatamu!")
    }
    if (peran === 'Tabib') {
        console.log("Halo", peran, nama, ",kamu akan membantu temanmu yang terluka.")
    }
    if (peran === 'Penyihir') {
        console.log("Halo", peran, nama, ",ciptakan keajaiban yang membantu kemenanganmu!")
    }
}