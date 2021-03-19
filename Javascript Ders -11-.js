
 function Normal(){
     var x=57;
     console.log(x);
 }

 Normal(); //Ekran cıktısı 57 gelecektir

 console.log(x);//Hata verecektir cunku tanımlanan x degerı localdir
 //Yani x degerı sadece o fonksiyon ıcerisinde gecerlidir.
 //Ancak x degerını fonksiyonun ustunde verseydik,Scopelayabilirdik ,
 //Yani yakalayabilirdik.

 function Sıradan(){
     //islemler.....
 }
 //'Sıradan ' isimli fonksiyon statement(İfadesel)bir fonksiyondur.
 //Herhangi bir geri dönus bulunmamaktadır.

 var atama= function Atanacak(){
     //Kodlar......
 }

 //Ancak burada 'Atanacak' isimli metodumuz Expression seklinde oluyor.
 //atama isimli degiskene atanmıs yanı geri dönus olması sarttır.