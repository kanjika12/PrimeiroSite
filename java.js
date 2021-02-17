function data(){

var data=new Date();
var tempo=new Date();
var hora=tempo.getHours();
var min=tempo.getMinutes();
var seg=tempo.getSeconds();
var meses=new Array("Janeiro","Fevereiro","Março","Abril",
    "Junho","Julho","Agosto","Setembro","Outubro",
    "Novembro","Dezembro");
var dsem= new Array("Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sabado","Domingo");
document.write(dsem[data.getDay()] + " , " + data.getDate() + " De " + meses[data.getMonth()] + " De " + data.getFullYear(), " - Horario De Brasilia - " + data.getHours(), " : " + data.getMinutes(), " : " + data.getSeconds());

   if (hora<10){

    hora="0" + tempo.getHours();

   }

   if (min<10){

    min="0" + tempo.getmin();

    }

   if (seg<10){

    seg="0" + tempo.getSeconds();

   }

   var imphoras=hora + " ; " + min + " ; " + seg;

   document.datas.value=imphoras;

   setTimeout("data()",1000);
}
