var x=5;

if (x>5){
    alert("x 5 te n buyuktur.");
}

else if (x<4){
    alert("x 4 ten kucuktur.");
}

else{

    alert("x,4'e esıttır");
}


var y = 4  ;

if (y<4)
console.log("Buraya girdi.1");
console.log("Buraya girdi.2");
console.log("Buraya girdi.3");

//Yukarıdaki y degıskenı ıcın durum ıncelendıgınde ıse if durumumuz kosulu saglamadıgından
//Alt satırındaki ''Buraya girdi.1'' satırını es gececektir.Ancak onun altındaki satırlar
//kesinlikle calısacaktır.

if (y<3)
console.log("Buraya girdi.1");
console.log("Buraya girdi.2");
console.log("Buraya girdi.3");
//Bu durum ıcınse butun slotlar calısacaktır cunku kosulumuz calısmaktadır alt satır es gecilmez.