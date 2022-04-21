function Printer(nivo_tonera,dvostranoIspisivanje)
{
    this.nivo_tonera = nivo_tonera;
    this.dvostranoIspisivanje = dvostranoIspisivanje;
    this.ukupanBrojStranica = 0;

    if(this.nivo_tonera > 100)
    {
        this.nivo_tonera = 100;
        
    }
    else if(this.nivo_tonera <1)
    {
        this.nivo_tonera = 1;
    }

}


var Samsung_M283x = new Printer(50,false);
var Epson_Sx105 = new Printer(0,true);
var Cannon_Pixma = new Printer(120,false);
var HP_Smart_tank_500 = new Printer(500,true);

Printer.prototype.dodajBoju = function(boja)
{
    if((this.nivo_tonera) + dodaj > 100)
    {
        this.nivo_tonera = 100;
    }
}

Printer.prototype.printaj = function(brojS)
{
    var oduzimanje;
    if(this.dvostranoIspisivanje == true)
    {
        oduzimanje = 0.2;

        if(brojS / 2 != 0)
        {
            this.nivo_tonera += 0.1;
        }
        for(a = 0;a < brojS/2;a++)
        {
            this.nivo_tonera = this.nivo_tonera - oduzimanje;
            if(this.nivo_tonera <= 0)
            {
                console.log("Prazan");
                break;
            }
            this.ukupanBrojStranica++;
        }
        
    }
    else
    {
        oduzimanje = 0.1;

        for(a = 0;a < brojS;a++)
        {
            this.nivo_tonera = this.nivo_tonera - oduzimanje;
            if(this.nivo_tonera <= 0)
            {
                console.log("Prazan");
                break;
            }
            this.ukupanBrojStranica++;
        }
    }
    console.log(this.ukupanBrojStranica);
    console.log(this.nivo_tonera);
}
Samsung_M283x.printaj(17);