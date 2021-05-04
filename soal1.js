//1. String.prototype.toUpperCase()

    /* Methode toUpperCase () mengembalikan nilai string yang dikonversi ke huruf besar .
    Metode ini tidak memengaruhi nilai string itu sendiri karena string JavaScript tidak dapat diubah.
    */

    // jika dibuat variabel terpisah
    const text = 'arkademy'
    const UpperCase = text.toUpperCase()
    console.log(UpperCase)

    // jika dibuat function
    const UpperCase3 = () => text.toUpperCase()
    console.log(UpperCase3())


//2. Array.prototype.find()

    /*
    Methode find () mengembalikan nilai elemen pertama dalam larik yang disediakan yang memenuhi fungsi pengujian yang disediakan. 
    Jika tidak ada nilai yang memenuhi fungsi pengujian, undefined dikembalikan.
    metode ini akan mengembalikan nilai pertama yang ditemukan
    */

    const Array = [1,2,3,4,5]

    const found = Array.find(element => element > 1)
    console.log(found);

    // jika dibuat function
    const found2 = () => Array.find(element => element > 3)
    console.log(found2())

// 3.Array.prototype.findIndex()

    /* Methode ini mengembalikan indeks elemen pertama dalam array yang memenuhi perintah. 

    Jika tidak, ia mengembalikan -1, menunjukkan bahwa tidak ada elemen yang lulus pengujian. */

    //kita coba di tipe data number
    const array1 = [5, 6, 7, 8, 9]

    const num = (element) => element > 8
    console.log(array1.findIndex(num)) 

    //kita coba di tipe data string
    const array2 = ['sandi','sindi','sandi']

    const result = array2.findIndex(element => element === 'sindi')
    console.log(result) 

// 4.Array.prototype.indexOf()

    /*
    Methode indexOf () mengembalikan indeks pertama di dalam array, 
    jika tidak ada maka akan mengembalikan nilai -1.
    */

    // pada tipe data number
    const arr = [1,2,3,4,5]
    const index0f = arr.indexOf(2)
    console.log(index0f)

    // pada tipe data string
    const arr2 = ['aku','kamu','dia','aku']
    const indexOf2 = arr2.indexOf('aku',2)
    console.log(indexOf2)


// 5.Array.prototype.forEach()
    /*
    Methode for each merupakan methode untuk melakukan perintah perulangan yang dituentukan oleh panjang dari array
    */

    const city = ['Cimahi','Bandung','Tasik','Jakarta','Jambi']
    for(i = 0 ; i < city.length ; i++){
        console.log(city[i])
    }

// 6.Array.prototype.filter()
    /*
    methode ini membuat array baru dengan memfilter array baru dengan sesuai perintah
    */

    const date = [25,26,27,28,29,30]
    const filter = date.filter(date => date > 25)
    console.log(filter)

// 7.Array.prototype.push()
    /*
    Methode push () menambahkan satu atau lebih elemen ke akhir array dan mengembalikan panjang array yang baru.
    */

    const plants = ['monstera','palm','oak']
    const push = plants.push('banana','coconut')
    console.log(push)
    console.log(plants)

// 8.Object.assign()
    /*
    Methode ini menyalin semua properti dari satu atau lebih objek sumber ke objek target. 
    methode ini mengembalikan objek target.
    */

        const target = {
                        name    : 'arkademy',
                        city    : 'cimahi'
                        }

        const source = {
                        email   : 'asdfgh@gmail.com',
                        country : 'indonseia'
                        }

        const assign = Object.assign(target,source)
        console.log(target)

// 9.Object.values()
    /*
    Method ini mengembalikan setiap value dari setiap objek
    */

    const obj = {
        fruit    : 'bananas',
        color    : 'blue'
        }

    const resultObj = Object.values(obj)
    console.log(resultObj)

// 10.Object.keys()
    /*
    Method ini mengembalikan setiap key dari setiap objek
    */

    const obj2 =  {
        hero        : 'Balmond',
        color       : 'red',
        position    : 'gold lane'
    }

    const resultObj2 = Object.keys(obj2)
    console.log(resultObj2)

