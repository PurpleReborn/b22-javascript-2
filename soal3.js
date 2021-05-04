const validasi = (nilaiAwal ,nilaiAkhir,dataArray) => {
    var nilaiAwal = Number
    var nilaiAkhir = Number
    var dataArray = Array
    if(nilaiAwal < nilaiAkhir){
        return nilaiAwal,nilaiAkhir
    }
    else{'Nilai awal harus lebih kecil dari nilai akhir'}

}
console.log(validasi(1,2))