//to function the buttons
var screen=document.querySelector('#screen');
       var btn=document.querySelectorAll('.btn');
  for(item of btn)
{
    item.addEventListener('click',(e)=>{
        btntext=e.target.innerText;
        if(btntext=='×')
        {
            btntext='*';
        }
        if(btntext=='÷')
        {
            btntext='/';
        }
       screen.value+=btntext;
    });
}

    function sin()
    {
     screen.value=Math.sin(screen.value);
    }
    function cos()
    {
     screen.value=Math.cos(screen.value);
    }
    function tan()
    {
     screen.value=Math.tan(screen.value);
    }
    // a no. raise to the power other
    function pow()
    {
           var a=parseFloat(document.getElementById("screen1").value),b=parseFloat(document.getElementById("screen2").value);
     screen.value=a**b;
    }
//square of a number
    function pow()
    {
           var a=screen.value;
     screen.value=a**2;
    }
//square root of any number
    function sqrt()
    {
           var a=screen.value;
     screen.value=a**0.5;
    }
    function log()
    {
     screen.value=Math.log(screen.value);
    }
    function pi()
    {
     screen.value= 3.14159265359;
    }

    function e()
    {
           var a=screen.value;
     screen.value= 2.718281828459045**a;
    }
//factorial of a no.
    function fact()
    {
        var i, num,f;
        f=1
        num=screen.value;
        for(i=1; i<=num; i++)
        {
            f=f*i;
        }
        i=i-1;
     screen.value=f;
    }
//delete input one by one
    function backspc()
    {
     screen.value=screen.value.substr(0,screen.value.length-1);
    }
    //hcf of two number
    function hcf(){
        var a=parseInt(document.getElementById("screen1").value),b=parseInt(document.getElementById("screen2").value),gcd;
        for(i=1;i<=(a<b?a:b);i++){
        if(a%i==0&b%i==0)
        gcd=i
        }
        screen.value=gcd;
            }
//lcm of two no.
            function lcm(){
        var a=parseInt(document.getElementById("screen1").value),b=parseInt(document.getElementById("screen2").value);
        for(i=(a>b?a:b);i<=a*b;i+=(a>b?a:b)){
        if(i%a==0&&i%b==0){
        break;
        }
        }
        screen.value=i;
            }
           //octal to decimal conversion 
         function octtodec(){
        var a=screen.value,k=0,b=0;
        while(a){
        b=b+a%10*(8**k);
        k++;
        a=parseInt(a/10);
        }
        screen.value=b;
         }
//decimal to binary conversion
         function dectobin(){
            var a=screen.value,k=0,b=0;
            while(a){
            b=b+a%2*(10**k);
            k++;
            a=parseInt(a/2);
            }
            screen.value=b;
             }

//binary to decimal conversion
         function bintodec(){
        var a=screen.value,k=0,b=0;
        if(btntext==1||btntext==0){
        while(a){
        b=b+a%10*(2**k);
        k++;
        a=parseInt(a/10);
        }
        screen.value=b;
         }
        else{
        alert("reenter it is not valid");
        clrdisp();
        }
        }
//decimal to octal conversion
         function dectooct(){
        var a=screen.value,k=0,b=0;
        while(a){
        b=b+a%8*(10**k);
        k++;
        a=parseInt(a/8);
        }
        screen.value=b;
         }
//nth term of fibbonacci series
         function fibbo(){
        var a=-1,b=1,c,n=screen.value,k=0;
        while(k<=n){
        c=a+b;
        a=b;b=c;
        k++;
        }
        screen.value=c;
         }
//nth term of ramanujan number
         function ramanujannum(){
        var a=screen.value,t=0;
        for(i=1729;t<a;i++){
        k=0;
        for(x=1;x**3<i;x++){
        for(y=x+1;x**3+y**3<=i;y++){
            if(x**3+y**3==i)
            k++;
        }
        }
        if(k==2){
        screen.value=i;
        t++;
        }
        }
         }
        //nth term of neilarmstrong number    
         function neilarmsnum(){
        var a=screen.value,t=0;
        for(i=1;t<a;i++){
        nod=i.toString().length;
        sum=0;
        temp=i;
        while(temp){
        b=temp%10;
        sum+=b**nod;
        temp=parseInt(temp/10);
        }
        if(sum==i){
        t++;
        screen.value=i;
        }
        }
         }
//to check a number is prime or not
function isprime(){
        var a=parseInt(screen.value);
        for(i=2;i<=a;i++){
        if(a%i==0)
        break;
        }
        if(a==i)
        screen.value="prime number";
        else
        screen.value="not prime number";
         } 
          
            
            
            
            
