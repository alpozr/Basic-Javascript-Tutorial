var sayı1,sayı2,islem,toplama,cıkartma,bolme,carp;

sayı1=prompt("İlk sayıyı gırınız:");
sayı2=prompt("2.sayıyı giriniz:");
islem=prompt("Yapmak istediniz islemi yazınız:(Cıkartma icin 'cıkartma' gibi):");


function Cıkar(){
    cıkartma=parseInt(sayı1) - parseInt(sayı2);
    alert("Cevabımız:"+ cıkartma);
}
function Topla(){
    toplama=parseInt(sayı1) + parseInt(sayı2);
    alert("Cevabımız:"+toplama);
}
function Bol(){
     bolme=parseInt(sayı1) / parseInt(sayı2);
    alert("Cevabımız:"+bolme);
}
function Carp(){
     carp=parseInt(sayı1) * parseInt(sayı2);
    alert("Cevabımız:"+carp);
}
function Birlestir(){
    birlestir=(sayı1)+(sayı2);
   alert("Cevabımız:"+birlestir);
}
switch(islem){
     case "cıkartma":
         Cıkar(sayı1,sayı2);
         break;
     case "toplama":
         Topla(sayı1,sayı2);
         break;
     case "bolme":
         Bol(sayı1,sayı2);
         break;
     case "carpma":
         Carp(sayı1,sayı2);
         break;
    case "birlestir":
        Birlestir(sayı1,sayı2);    

}
//Bu basıt bir dort ıslem yapan uygulama ornegıdır.Icerısınde switch-case,function,ınput almak,
//Matematiksel ve stringsel(sadece yan yana) islemler gibi gordugumuz dersleri iceren konular bulunmaktadır.
//Fonksiyonlara giris icinde güzel bir uygulama oldu.Yukarıdaki fonksiyon tanımlarını inceleyiniz.