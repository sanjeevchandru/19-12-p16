document.write("16.Find Leap years in a range"+"<br>");
function test16(a,b){
    var r=[];
    for(let i=a;i<=b;i++){
        r.push(i);
    }
    var x=r.filter(function(e){
        if(((e%4==0)&&(e%100!=0))||((e%100==0)||(e%400==0))){
            return e;
        }
        else{
            return false;
        }
    })
    return x;
}
document.write(test16(2000,2023)+"<br><br>");