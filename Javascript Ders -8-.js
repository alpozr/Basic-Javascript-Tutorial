var meslek="ogretmen";

switch(meslek){

    case "doktor":
        console.log("Burası doktorlar bolumudur.");
        break;
    case "ogretmen":
        console.log("Burası ogretmenler bolumdur.");
        break;
    case "emekli":
        console.log("Burası emekliler bolumudur");
        break;
    default:
        console.log("Benim isim yok,yani issizim.");
        break;
    }


    //Switch-case yapıları özetle,Switchin icine gonderilen degiskenin degerının,
    //Kendisine baglı olan case yapılarıyla eslestirilmesi ve eslesen case yapısındali,
    //kod blogunun calısmasıyla olusur.degıskenımızın degerının olmaması yani 2.derste
    //gordugumuz 'undefined' durumunda ıse default(varsayılan) bloguna girmektedir.
    