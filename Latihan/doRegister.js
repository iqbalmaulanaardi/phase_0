var user = [];

//case 1
function doRegister(login, password, repassword) {
    // validasi login minimal 5 karakter
    if (login.length < 5) {

    } else {
        var alfabet = 'abcdefghijklmnopqrstuvwxyz0123456789'
        var alfa = alfabet.toUpperCase();
        alfabet += alfa
        for (var i = 0; i < login.length; i++) {
            if (alfabet.indexOf(login[i]) === -1) {
                return 'login hanya boleh a-z,A-Z,0-9';
            }
        }
        if (password.length < 5) {
            return 'validasi password minimal 5 karakter'
        }
        if (password !== repassword) {
            return 'validasi repassword harus sama dengan password'
        }
        return alfabet.indexOf('I')
    }
    // login hanya bolah a-z,A-Z,0-9
    // validasi password minimal 5 karakter
    // validasi repassword harus sama dengan password
    // tambahkan user dengan object berformat sbb
    // {
    //   login: input_login,
    //   password: input_password
    // }
}
/**
 contoh

 doRegister('log', 'password', 'password')
 hasil:
 login minimal 5 karakter

 doRegister('log*in', 'password', 'password')
 hasil:
 login hanya boleh alfanumerik

 doRegister('login', 'pass', 'password')
 hasil:
 password minimal 5 karakter

 doRegister('login', 'password2', 'password')
 hasil:
 validasi password tidak sesuai

 doRegister('login', 'password2', 'password2')
 hasil:
 registrasi berhasil
 */
console.log(doRegister('login122', 'password2', 'password2'));