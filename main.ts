// TypeScript file
var nn:number;
//var newArray=new Array(new Array(),new Array())
var  newArray:string[][];
var  Arraya:string[];
var k:number;
var l:number;
var m:number;
Arraya=[];
newArray=[[]];
nn=3;
m=2*nn-1;
initialize()
set();
output();

function initialize():void
{
    newArray.pop();
    for(k=0;k<m;k++)
    Arraya.push(" ");
    for(l=0;l<nn;l++)
    newArray.push(Arraya);
     for(k=0;k<nn;k++)
    {
        console.log(newArray[k]);
    }
}

function set():void
{
  
    //var k:number;
    //var l:number
    for(k=0;k<nn;k++)
    {  
        newArray[k][(m-1)/2]="*";
        for(l=0;l<=k;l++)
        {
            newArray[k][(m-1)/2-l]="*";
           
            newArray[k][(m-1)/2+l]="*";
            console.log(k);
            console.log(newArray[k]);
            console.log();
        }
    }
            
}

function output():void
{
     for(k=0;k<nn;k++)
    {
          console.log(k);
            console.log(newArray[k]);
    }
 //   console.log();
   // console.log(newArray[1]);
}