// Bu dersimizin konusu kullanıcıdan input alarak , bunu ekrana yazdıran 
//ufak bir Pencere uygulaması olacak.bunların hepsinide aynı satırda Kisi bilgisi olarak
//verelim.

var TcNO,TelNO,Yas,kisiBilgisi,isim

isim = prompt("Lütfen isminizi belirtin: ");

TcNO= prompt("Lütfen Kimlik Numaranızı giriniz: ");//Tc Noyu aldık

TelNO= prompt("Lütfen Telefon Numaranızı giriniz: ");//TelNO'yu aldık.      

Yas= prompt("Lütfen Yasınızı giriniz: ");//Kullanıcıdan Yas'ıda aldık.

kisiBilgisi=TcNO + "," + TelNO + "," + Yas ; //Bilgilerimizi tek satırda göstereceğiz.

alert ("Sayın "+isim+" Kisi Bilgileriniz Su Sekildedir " +kisiBilgisi);