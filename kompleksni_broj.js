function KompleksniBroj(realni,imaginarni)
{
    this.realni = realni;
    this.imaginarni = imaginarni;
}

var oPrvi = new KompleksniBroj(5,13);
var oDrugi = new KompleksniBroj(7,2);
var oTreci = new KompleksniBroj(32,1);
var oCetvrti = new KompleksniBroj(70,8);
var oPeti = new KompleksniBroj(5,5);


var _kb = 
{
    ispisiKompleksiBroj: function(a)
    {
        return "z = "+a.realni +" + "+a.imaginarni;
    },
    zbroji: function(kom1,kom2)
    {
        //return parseInt(kom1.realni + kom2.realni) +"i"+ parseInt(kom1.imaginarni + kom2.imaginarni);
        return `${kom1.realni + kom2.realni} + ${kom1.imaginarni + kom2.imaginarni}i`
    },
    pomnozi: function(kom1,kom2)
    {
        var realni = (kom1.realni * kom2.realni)-(kom1.imaginarni * kom2.imaginarni);
        var imaginarni = (kom1.realni * kom2.realni)+(kom1.imaginarni * kom2.imaginarni);
        return parseInt(realni)+","+parseInt(imaginarni);
    }
}

function ispis()
{
    var z1r = document.getElementById("z1r").value;
    var z1i = document.getElementById("z1i").value;
    var z2r = document.getElementById("z2r").value;
    var z2i = document.getElementById("z2i").value;
    var ope = document.getElementById("operacija")
    var rez1 = document.getElementById("rez");
    if(ope.value == "zbrajanje")
    {
        var kom1 = new KompleksniBroj(parseInt(z1r),parseInt(z1i));
        var kom2 = new KompleksniBroj(parseInt(z2r),parseInt(z2i));
        var rez = _kb.zbroji(kom1,kom2);
        rez1.value = rez;
    }
    else if(ope.value == "pomnozi")
    {
        var kom1 = new KompleksniBroj(parseInt(z1r),parseInt(z1i));
        var kom2 = new KompleksniBroj(parseInt(z2r),parseInt(z2i));
        var rez = _kb.pomnozi(kom1,kom2);
        rez1.value = rez;
    }

}



