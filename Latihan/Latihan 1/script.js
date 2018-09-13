var pageTitElement = document.getElementById("fill-me")
var pageTitElementContent = pageTitElement.innerHTML;
// console.log(pageTitElementContent);
document.getElementById("fill-me").innerHTML = "Halo";
document.getElementsByClassName("change-all-of-me").innerHTML = "Halo juga";

// for (var i = 0; i < changeAll.length; i++) {
//     var currentChangeAllElement = changeAll[i];
//     var currentChangeAllElementContent = currentChangeAllElement.innerHTML;
//     currentChangeAllElementContent = 'Halo Juga'
//     console.log('isi change-all-of-me index ke ' + i + ': ' + currentChangeAllElementContent);
// }
// document.getElementsByTagName("h2").innerHTML = "Apa kabar?"