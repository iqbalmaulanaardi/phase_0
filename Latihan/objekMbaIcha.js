/*
===
===
===
=== === =
GET MEMBER SUMMARY
    ===
    ===
    ===
    === === =

    Get member summary adalah sebuah fungsi untuk mendapatkan ringkasan informasi
berdasarkan data - data seperti nama depan, nama belakang, dan umur.Fungsi ini
akan mengembalikan sebuah object dengan keyName total member, anggota yang paling tua, anggota yang paling muda dan avarage umur semua member.

rules:
    -TIDAK boleh menggunakan built in function.sort() -
    TIDAK boleh menggunakan built in function.indexOf(), .include() -
    TIDAK boleh menggunakan built in function.Math.max() dan.Math.min() -
    TIDAK boleh menggunakan built in function.map(), .filter() -
    TIDAK boleh menggunakan regex(match, replace, dll) -
    asumsi data memiliki umur yang berbeda - beda

examples:
    -INPUT = [{
        first_name: 'Example',
        last_name: 'Contoh',
        age: 27
    }, {
        first_name: 'Some',
        last_name: 'Thing',
        age: 22
    }, {
        first_name: 'Manusia',
        last_name: 'Biasa',
        age: 19
    }],

    -OUTPUT = {
        total_member: 3,
        oldest_member: {
            full_name: 'Example Contoh',
            age: 27,
        },
        youngest_member: {
            full_name: 'Manusia Biasa',
            age: 19,
        },
        average_member_age = 23
    } */

function getMemberSummary(member) {
    // your code here
    if (!member.length) {
        return []
    }
    var objOutput = {
        total_member: member.length,
        oldest_member: {},
        youngest_member: {},
        average_member_age: 0
    }
    var jumlah = member[0].age;
    var objOldest = {
        full_name: member[0].first_name + ' ' + member[0].last_name,
        age: member[0].age
    }
    var objYoungest = {
        full_name: member[0].first_name + ' ' + member[0].last_name,
        age: member[0].age
    }
    for (var i = 1; i < member.length; i++) {
        if (member[i].age < objYoungest.age) {
            objYoungest.full_name = member[i].first_name + ' ' + member[i].last_name;
            objYoungest.age = member[i].age
        }
        if (member[i].age > objOldest.age) {
            objOldest.full_name = member[i].first_name + ' ' + member[i].last_name;
            objOldest.age = member[i].age
        }
        jumlah += member[i].age
    }
    var avg = Math.round(jumlah / member.length)
    objOutput.oldest_member = objOldest;
    objOutput.youngest_member = objYoungest;
    objOutput.average_member_age = avg;
    return objOutput
}

console.log(getMemberSummary([{
    first_name: 'Wika',
    last_name: 'Silo',
    age: 30
}, {
    first_name: 'Dhani',
    last_name: 'Damara',
    age: 27
}, {
    first_name: 'Fandy',
    last_name: 'Barestu',
    age: 18
}, {
    first_name: 'Acha',
    last_name: 'Acha',
    age: 29
}, {
    first_name: 'Zena',
    last_name: 'Villenia',
    age: 32
}, {
    first_name: 'Annisa',
    last_name: 'Ayu',
    age: 21
}], ));
//output
/*
{
 total_member: 6,
 oldest_member: {
    full_name: 'Zena Villenia',
    age: 32,
 },
 youngest_member: {
  full_name: 'Fandy Barestu',
  age: 18,
 },
 average_member_age: 26
}
*/

console.log(getMemberSummary(
    [{
        first_name: 'Rama',
        last_name: 'Diansyah',
        age: 20
    }, {
        first_name: 'Malik',
        last_name: 'Adhi',
        age: 21
    }, {
        first_name: 'Dita',
        last_name: 'Zakiah',
        age: 27
    }]
))

/*
total_member: 3,
oldest_member: {
    full_name: 'Dita Zakiah',
    age: 27,
 },
youngest_member: {
  full_name: 'Rama Diansyah',
  age: 20,
 },
 average_member_age: 23
*/

console.log(getMemberSummary(
        [{
            first_name: 'Zena',
            last_name: 'Villenia',
            age: 20
        }]
    ))
    /*
    {
      total_member: 1,
      oldest_member: { full_name: 'Zena Villenia', age: 20, gender: 'woman' },
      youngest_member: { full_name: 'Zena Villenia', age: 20, gender: 'woman' },
      average_member_age: 20
    }
    */

console.log(getMemberSummary([])) //NO DATA