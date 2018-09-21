#include <iostream>
#include <string>
#include <cstdlib>
#include <cmath>

using namespace std;
string satuan[] = {"", "satu ", "dua ", "tiga ", "empat ", "lima ", "enam ", "tuju ", "delapan ", "sembilan " };

string konvertAngka(int n) {
    if (n < 0) {
        return "negatif " + konvertAngka(-n);
    } else if (n < 10) {
        return satuan[n];
    } else if (n == 10) { // khusus untuk sepuluh
        return "sepuluh ";
    } else if (n == 11) { // khusus untuk sebelas
        return "sebelas ";
    } else if (n < 20) {
        return satuan[n-10] + "belas ";
    } else if (n < 100) {
        return satuan[(n-(n%10))/10] + "puluh " + konvertAngka(n % 10);
    } else if (n < 1000) {
        return (n < 200 ? "seratus " : satuan[(n-(n%100))/100] + "ratus ") + konvertAngka(n % 100);
    } else if (n < 1000000) { 
        return (n < 2000 ? "seribu " : konvertAngka((n-(n%1000))/1000) + "ribu ") + konvertAngka(n % 1000);
    } else if (n < 1000000000) {
        return konvertAngka((n-(n%1000000))/1000000) + "juta " + konvertAngka(n % 1000000);
    } else {
        return "Angka lebih besar dari 999,999,999 (harus kurang dari 1 Milyar)";
    }
}int main(int argc, char * argv[]) {
    if(argc<=1) {
        cout << "jangan lupa masukkan angka saat run." << endl;
        return 1;
    }    int angka = atoi(argv[1]);
    cout << konvertAngka(angka)<< (argv[2]? argv[2] : "" ) << endl;
    return 0;
}