function Grad(naziv_grada,br_stanovnika,latituda,longituda)
{

    this.n_grad = naziv_grada;
    this.b_str = br_stanovnika;
    this.lati = latituda;
    this.longi = longituda;


}

var oVirovitica = new Grad("Virovitiaca",21291,45.49,17.23);
var oSlatina = new Grad("Slatina",13686,45.7,17.70);
var oBjelovar = new Grad("Bjelovar",40276 ,45.89,16.84);
var oOsijek = new Grad("Osijek",96848 ,45.33,16.41);
var oZagreb = new Grad("Zagreb",769944 ,45.81,15.96);


Grad.prototype.dajVelicinuGrada = function()
{
    if(this.b_str < 30000)
    {
        console.log("Grad ima manje od 30 000 stanovnika")
    }
    else if(this.b_str > 30000 && this.b_str <200000)
    {
        console.log("Grad ima više od 30 00 i manje od 200000 stanovnika");
    }
    else
    {
        console.log("Grad ima više od 200000 stanovnika");
    }
}

oBjelovar.dajVelicinuGrada();
oZagreb.dajVelicinuGrada();

function dajUdaljenost(a ,b)
{
    Number.prototype.toRad = function() {
        return this * Math.PI / 180;
     }
     
     var lat2 = b.lati; 
     var lon2 = b.longi; 
     var lat1 = a.lati; 
     var lon1 = a.longi; 
     
     var R = 6371; 
     var x1 = lat2-lat1;
     var dLat = x1.toRad();  
     var x2 = lon2-lon1;
     var dLon = x2.toRad();  
     var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                     Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
                     Math.sin(dLon/2) * Math.sin(dLon/2);  
     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
     var d = R * c; 
     console.log(d);
}
dajUdaljenost(oVirovitica,oZagreb);