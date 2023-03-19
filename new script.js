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
    function pow()
    {
     screen.value=Math.pow(screen.value,3);
    }
    function sqrt()
    {
     screen.value=Math.sqrt(screen.value,2);
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
     screen.value= 2.718281828459045;
    }
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
    function backspc()
    {
     screen.value=screen.value.substr(0,screen.value.length-1);
    }
    
    function hcf(){
var a=parseInt(document.getElementById("screen1").value);
var b=parseInt(document.getElementById("screen2").value);
var c;
for(i=1;i<=a<b?a:b;i++){
if(a%i==0&&b%i==0)
c=i;
}
screen.value=c;
    }

 function hcf(){
var a=parseInt(document.getElementById("screen1").value),b=parseInt(document.getElementById("screen2").value),gcd;
for(i=1;i<=(a<b?a:b);i++){
if(a%i==0&b%i==0)
gcd=i
}
screen.value=gcd;
    }

    function lcm(){
var a=parseInt(document.getElementById("screen1").value),b=parseInt(document.getElementById("screen2").value);
for(i=(a>b?a:b);i<=a*b;i+=(a>b?a:b)){
if(i%a==0&&i%b==0){
break;
}
}
screen.value=i;
    }
    
 function octtodec(){
var a=screen.value,k=0,b=0;
while(a){
b=b+a%10*(8**k);
k++;
a=parseInt(a/10);
}
screen.value=b;
 }

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

 function dectobin(){
var a=screen.value,k=0,b=0;
while(a){
b=b+a%2*(10**k);
k++;
a=parseInt(a/2);
}
screen.value=b;
 }

 function fibbo(){
var a=-1,b=1,c,n=screen.value,k=0;
while(k<=n){
c=a+b;
a=b;b=c;
k++;
}
screen.value=c;
 }

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
    

    













    
  //dekhlo yaha se hai  
/*<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CALCULATOR</title>
  <link rel="stylesheet" href="new style.css">
</head>

<body>
  <div class="calculator">
    <div class="display">
        <input id="screen" type="text" placeholder="0">
    </div>
    <table>
        <tr> 
            <td><input id="screen1" type="text" placeholder="0"></td>
            <td><input id="screen2" type="text" placeholder="0"></td>
        </tr>
    </table>
         <div class="btns">
            <div class="row">
                <button onclick="fibbo()">ntf</button>
                <button onclick="octtodec()">otd</button>
                <button id="ac" onclick="clrdisp()">AC</button>
                <button id="del" onclick="backspc()">DEL</button>
                <button onclick="fact()">x!</button>
                <button class="btn">(</button>
                <button class="btn">)</button>                
                <button class="btn">%</button>
                
            </div>    
            <div class="row">
                <button onclick="ramanujannum()">ntr</button>
                <button onclick="dectooct()">dto</button>
                <button onclick="sin()">sin</button>
                <button onclick="pi()">π</button>
                <button class="btn">7</button>
                <button class="btn">8</button>
                <button class="btn">9</button>
                <button class="btn">/</button>
            </div>    
            <div class="row">
                <button onclick="neilarmsnum()">nta</button>
                <button onclick="bintodec()">btd</button>
                <button onclick="cos()">cos</button>
                <button onclick="log()">ln</button>
                <button class="btn" >4</button>
                <button class="btn" >5</button>
                <button class="btn" >6</button>
                <button class="btn" >×</button>
            </div>    
            <div class="row">
                <button onclick="isprime()">isp</button>
                <button onclick="dectobin()">dtb</button>
                <button onclick="tan()">tan</button>
                <button onclick="sqrt()">√ </button>
                <button class="btn" >1</button>
                <button class="btn" >2</button>
                <button class="btn" >3</button>
                <button class="btn" >-</button>
            </div>    
            <div class="row">
                <button  onclick="lcm()">lcm</button>
                <button  onclick="hcf()">hcf</button>
                <button onclick="e()">e<span style="position:relative ; bottom: .4em; right: .1em;">y</span> </button>
                <button onclick="pow()">x<span style="position:relative ; bottom: .4em; right: .1em;">y</span></button>
                <button class="btn" >0</button>
                <button class="btn" >.</button>
                <button id="eqbtn" onclick="eql('=')">=</button>
                <button class="btn">+</button>
            </div>
        </div>    
    </div>
    </body>

    <script>
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

function clrdisp(){
document.getElementById("screen").value=" ";
}

    function cos()
    {
        var a=screen.value;
     screen.value=Math.cos(a);
    }
    function tan()
    {
        var a=screen.value;
     screen.value=Math.tan(a);
    }
    function pow()
    {
        var a=parseFloat(document.getElementById("screen1").value),b=parseFloat(document.getElementById("screen2").value);
     screen.value=a**b;
    }
    function sqrt()
    {
     var a=screen.value;
     screen.value=a**0.5;
    }
    function log()
    {
        var a=screen.value;
     screen.value=Math.log(a);
    }
    function pi()
    {
     screen.value= 3.14159265359;
    }
    function e()
    {
     var a=screen.value;
     screen.value=2.718281828459045**a;
    }
    function sin()
    {
      var a=screen.value;
      screen.value=Math.sin(a);
    }
    function fact()
    {
        var  num,f;
        f=1
        num=screen.value;
        while(num)
        {
            f=f*num;
            num--;
        }
     screen.value=f;
    }

    function backspc()
    {
        document.getElementById("screen").value=document.getElementById("screen").value.toString().slice(0,-1);
    }    
    
    function hcf(){
var a=parseInt(document.getElementById("screen1").value),b=parseInt(document.getElementById("screen2").value),gcd;
for(i=1;i<=(a<b?a:b);i++){
if(a%i==0&b%i==0)
gcd=i
}
screen.value=gcd;
    }

    function lcm(){
var a=parseInt(document.getElementById("screen1").value),b=parseInt(document.getElementById("screen2").value);
for(i=(a>b?a:b);i<=a*b;i+=(a>b?a:b)){
if(i%a==0&&i%b==0){
break;
}
}
screen.value=i;
    }
    
 function octtodec(){
var a=screen.value,k=0,b=0;
while(a){
b=b+a%10*(8**k);
k++;
a=parseInt(a/10);
}
screen.value=b;
 }

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

 function dectobin(){
var a=screen.value,k=0,b=0;
while(a){
b=b+a%2*(10**k);
k++;
a=parseInt(a/2);
}
screen.value=b;
 }

 function fibbo(){
var a=-1,b=1,c,n=screen.value,k=0;
while(k<=n){
c=a+b;
a=b;b=c;
k++;
}
screen.value=c;
 }

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
    </script>

    

</html>*/

    
    
    
    
    
    
    

    

    

