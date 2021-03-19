 var x = 5;

 x+=4; //Toplama islemini bu şekilde gosterebiliriz.

 console.log(x);

 x/=3;//Bölme islemini bu sekilde gosterebiliriz.

 console.log(x);

 x*=3; //Carpma islemini bu sekilde gosterebiliriz.

 console.log(x);
 
 x-=3;//Çıkartma islemini bu sekilde gosterbiliriz.

 console.log(x);

 var y,z;

 y=5;
 z=4;

 if(x==y){ 
     alert("Sayılar esit");
 }//x ve ynin esitligini degerlendiren if-else yapısı yaptık.Eger x ve y sayıca esitse
 //İf bloguna,degıllerse de else bloguna girecektir.Ancak onemli olan birsey soyliyim.
 //(==) ile gosterilen cıft esıttır sadece sayıları,(===) ile gosterılen uc esıttır ise
 //Veri tiplerini ve sayıların esıtlıgını ınceler.
 else{
     alert("Sayılar esit degil");
 }

 var kalan = x % 3; //Mod operatorumuz bize bolundugu sayıdan kalan sonucu vermede kolaylık saglar

 console.log(kalan);

 x--; //x ten bir cıkartmasını soyledık ve degerını 6 iken 5 yaptık.
 console.log(x);//ekkrana 5 yazdırır.
 console.log(x++);//x in degerını bir sonrakı yazdırma ıslemı ıcın 1 arttırmıs olduk ancak hala degerı 5.

 console.log(x);//1 oncekı satırda arttırılma ıslemı bu satıra devretti artık x'in degerı 6.
 console.log(--x);//Onemlı olan eksilerin ve artıların yeri goruldugu gibi burda eksi x'in onunde 
 //yani yapılan bu azaltma islemi bu satıra dahıl oluyor x degerı 5 yazacaktır ekrana.
 console.log(x++);//Burada ne yazacagını ogrendıklerınıze gore siz tahmin etmeye calısın ...