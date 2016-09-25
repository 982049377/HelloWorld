// TypeScript file

var a=1;
var b=[2];

function test(p:number):void
{
    p=2;    
}
function test2(p:number[]):void
{
    p[0]=3;
}
test(a);
test2(b);

//key-value
//JSON
var students_scores = 
{
    students:
    {
        "s06050215":
        {
            name:"wangze",
            score:60
        },
        "s06080216":
        {
            name:"111",
            score:0
        }
    }
};
students_scores.students.s06050215.name;
var arr=[1,2,3,4,"asdasd",students_scores.students.s06050215]
arr.push(5);


var arguments = process.argv.splice(2);
var x=Process.argv[2];
