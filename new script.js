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
    
    
    
    
    
    
    
    
    

    

    

