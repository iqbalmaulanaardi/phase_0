function meleeRangedGrouping(str) {
    //your code here
    if (str.length === 0) {
        return []
    } else {
        var arr = str.split(',');
        var tmpStr = '';
        var arrOutput = [
            [ /*melee*/ ],
            [ /*ranged*/ ]
        ]
        for (var i = 0; i < arr.length; i++) {
            tmpStr = arr[i].slice(arr[i].indexOf('-') + 1);
            if (tmpStr === 'Ranged') {
                arrOutput[0].push(arr[i].slice(0, arr[i].indexOf('-')))
            } else {
                arrOutput[1].push(arr[i].slice(0, arr[i].indexOf('-')))
            }
        }
        return arrOutput;
    }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []