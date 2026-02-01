const form= document.querySelector('form')  
form.addEventListener('submit', function(e)
{
    e.preventDefault();   
/* without preventDefualt() the page will be refreshed once we clicke submit 
and we will not see the results. */

    const height =parseInt(document.querySelector('#height').value)  //# cuz height is a id dats why #height ....for class its .classname 
    const weight=parseInt(document.querySelector('#weight').value)  //parseint converts string to int ....cuz here we always get string
    const results=document.querySelector('#results');

if(height==='' || isNaN(height) || height<0)        //is not a number
{results.innerHTML=`pls give valid height ${height}`}
else if(weight==='' || isNaN(weight) || weight<0)
{results.innerHTML=`pls give valid weight ${weight}`}
else{
    const bmi=(weight/(height*height)*10000);
    results.innerHTML=`<span>${bmi}</span>`
}}
);

/* diff between innerHTML , innertext and textcontent 
innerHTL reads the html tags . but innertext and textcontent 
dont. 
eg:-
<div id="box">
  Hello
  <span style="display:none">Secret</span>
</div>

const box = document.quesryselector('#box')
box.innertext  -----> hello    respects na dreads the css ...display:none 
it is slower cud it reads css instrutions 

box.textcontent ----> hello secret 
faster cuz prints everything. 