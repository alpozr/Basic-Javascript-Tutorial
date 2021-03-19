function oylesıne(a,b){
    var carp= parseInt(a)*parseInt(b);
    alert("Cevabımız:"+carp);
}


oylesıne(40,50,8);

//Ekran cıktımıızın 2000 olması sizi sasırtmasın.Javascript fazladan verilen '8' parametresini 'oylesıne' metodunda
//isleme dahil etmedi.Bu Javascriptte 'ignore' denilen bir ozellık sadece.

function normal(a,b,fn){
    topla=parseInt(a)+ parseInt(b);
     return fn(topla);
}

function bolme(sayı){
    return sayı / 10;
}

var a =normal(20,30,bolme);
console.log(a);

//Javascriptte fonksiyonlarımız parametre olarak fonksiyonda alabilmektedir.Yukarıdaki ornegımızde 'normal'
//fonksiyonumuz icine parametre olarak fonksiyon verilmistir.İcine verilen fonksiyona 'topla' degiskeni 'normal'fonksiyonu icerisinde
//parametre olarak verilmistir.İslemlerimiz ilk olarak iki sayının toplanması ardından toplamın 10 ile bolunmesı sırasını takıp eder.
//Cevabımız ekranda 5 olarak gozukecektir.