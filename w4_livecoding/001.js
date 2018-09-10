/*
Absolute Winner!

Pada sebuah turnamen ada 3 orang yang berkompetisi untuk menjadi juara utama.
Apabila jumlah 'Bakugo' dalam array lebih besar dari jumlah 'Midoriya' dan 'Todoroki', maka function akan mereturn "Bakugo won the tournament!".
Apabila jumlah 'Midoriya' dalam array lebih besar dari jumlah 'Bakugo' dan 'Todoroki', maka function akan mereturn "Midoriya won the tournament!".
Apabila jumlah 'Todoroki' dalam array lebih besar dari jumlah 'Bakugo' dan 'Midoriya', maka function akan mereturn "Todoroki won the tournament!".
Apabila ada jumlah yang sama dan jumlah tersebut merupakan jumlah terbesar, tampilkan "There are no clear winner!";


[RULE]
- Wajib menuliskan algoritma/pseudocode. Tidak ada algoritma / algoritma tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
*/

/*pseudocode
READ and SAVE 'winners'
SET 'counter_b' with any value(number)
SET 'counter_m' with any value(number)
SET 'counter_t' with any value(number)
SET 'i' with 0
IF 'winners' is not empty 
  FOR each row on 'winners'
    IF 'winners' position (i) is equal to "Bakugo" THEN
      INCREMENT 'counter_b'
    END IF 
    IF 'winners' position (i) is equal to "Midoriya" THEN
      INCREMENT 'counter_m'
    END IF 
    IF 'winners' position (i) is equal to "Todoroki" THEN
      INCREMENT 'counter_t'
    END IF
    IF 'counter_b' greater than 'counter_m' AND 'counter_b' greater than 'counter_t' THAN
      RETURN "Bakugo won the tournament!"
    ELSE IF 'counter_m' greater than 'counter_m' AND 'counter_m' greater than 'counter_t' THAN
      RETURN "Midoriya won the tournament!"   
    ELSE IF 'counter_t' greater than 'counter_b' AND 'counter_t' greater than 'counter_m' THAN
      RETURN "Todoroki won the tournament!"   
    ELSE 
      RETURN  "There are no clear winner!"  
  END FOR
ELSE
  RETURN  "There are no clear winner!"  
END IF

  
END FOR
*/

function absoluteWinner(winners) {
    //Your code here!
    var counter_b = 0;
    var counter_m = 0;
    var counter_t = 0;
    if (winners.length !== 0) {
        for (var i = 0; i < winners.length; i++) {
            if (winners[i] === 'Bakugo') {
                counter_b += 1;
            }
            if (winners[i] === 'Midoriya') {
                counter_m += 1;
            }
            if (winners[i] === 'Todoroki') {
                counter_t += 1;
            }
        }
        if (counter_b > counter_m && counter_b > counter_t) {
            return "Bakugo won the tournament!";
        } else if (counter_m > counter_b && counter_m > counter_t) {
            return "Midoriya won the tournament!";
        } else if (counter_t > counter_b && counter_t > counter_m) {
            return "Todoroki won the tournament!";
        } else {
            return "There are no clear winner!";
        }
    } else {
        return "There are no clear winner!";
    }


}

console.log(absoluteWinner(['Bakugo', 'Bakugo', 'Midoriya'])); // "Bakugo won the tournament!"
console.log(absoluteWinner(['Todoroki', 'Bakugo', 'Midoriya', 'Todoroki'])); // "Todoroki won the tournament!"
console.log(absoluteWinner(['Midoriya', 'Midoriya', 'Midoriya'])); // "Midoriya won the tournament!"
console.log(absoluteWinner(['Bakugo'])); // "Bakugo won the tournament!"
console.log(absoluteWinner([])); // "There are no clear winner!"