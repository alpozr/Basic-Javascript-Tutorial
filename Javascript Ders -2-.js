

var name ='alp';

console.log(typeof name);

//Ekran çıktımız 'name'degiskeninin turu olan 'String' olacaktır .

var yas = 16;

console.log(typeof yas);

//Tahmin edileceği üzere ekran çıktımız bu sefer 'Yas' degiskenimizin turu olan 'int' olacaktır.

var bos;
console.log(typeof bos);

//İcerisine deger atanmamıs ve dolayısıyla tipi olmayan bir degiskende sizce ne yazacaktır?
//Javascript bu tur tipsiz ve ici bos degiskenlere tanımlanmamıs yani 'undefined' tipini veriyor.

var bosamanull=null;
console.log(typeof bosamanull);

//Bu degiskenimizin degeri var ancak null atanmıs,bu gibi durumlarda console bize 'object'yazdırır.


yas = 17;
console.log(yas);

//Yukarıda degerımız 16ydı ancak artık 17 olarak ekrana verilecektir.

yas ='onyedi';
console.log(yas);

//Ve hatta int olan datamı bu sekilde stringe bile cevirebilirim.Ekran cıktısı 'onyedi' olacaktır.
