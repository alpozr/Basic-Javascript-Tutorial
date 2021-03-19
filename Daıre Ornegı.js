//Bu ornegımız daırenın alanını ve cevresını ınceleyen ornek olacak.


var yarıcap,pidegeri,islem;


yarıcap=prompt("Lutfen dairenın yarıcapını belirtiniz.");
pidegeri=prompt("Lütfen pidegerini veriniz.(Genelde 3 olur)");
islem=prompt("Yapmak istedıgınız ıslemı yazın:(cevre icin 'cevre'gibi");

function Cevre(){

    alert("Cevremiz :"+2*pidegeri*yarıcap);
}

function Alan(){
    
    alert("Alanımız:"+pidegeri*yarıcap*yarıcap);
}

switch(islem){

    case "alan":
        Alan(yarıcap,pidegeri);
       break;
    case "cevre":
        Cevre(yarıcap,pidegeri);
        break;
}

//Buradan sonrası vize ve final notu hesaplanarak ekrana not ortalamamızı veren ornek uygulamadır.

var vizeNotu,finalNotu,hesaplanan;

vizeNotu=prompt("Vize notunuzu giriniz: ");
finalNotu=prompt("Final Notunuzu giriniz: ");

hesaplanan= parseInt(vizeNotu*4/10)+parseInt(finalNotu*6/10);

alert("Öncelikle vize ve final notunuzdan hesaplanan notunuz: "+hesaplanan);
if(hesaplanan<100 && hesaplanan>85){
    alert("AA ile bu dersi gectiniz.Tebrikler!!");
}
else if(hesaplanan<85 && hesaplanan>70){
    alert("BA ile bu dersi gectiniz.Tebrikler!!")
}
else if(hesaplanan<70 && hesaplanan>60){
    alert("BB ile bu dersi gectiniz.Tebrikler!!")
}
else if(hesaplanan<60 && hesaplanan>55){
    alert("CB ile bu dersi gectiniz.Tebrikler!!")
}
else if(hesaplanan<55 && hesaplanan>53){
    alert("CC ile bu dersi gectiniz.Tebrikler!!")
}
else if(hesaplanan<53 && hesaplanan>50){
    alert("DC ile bu dersi gectiniz.Tebrikler!!")
}
else if(hesaplanan<50 && hesaplanan>0){
    alert("Kaldın geçmiş olsun")
}
