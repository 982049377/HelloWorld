// TypeScript file

var nn:number;
var  Arraya:string[];
var k:number;
var l:number;
var m:number;
Arraya=[];
nn=3;
m=2*nn-1;
initialize()
set();
function initialize():void
{
    for(k=0;k<m;k++)
    Arraya.push(" ");
}
function set():void
{
    for(k=0;k<nn;k++)
    {  
        Arraya[(m-1)/2]="*";
        for(l=0;l<=k;l++)
        {
            Arraya[(m-1)/2-l]="*";
            Arraya[(m-1)/2+l]="*";
        }
        console.log(Arraya);
    }          
}