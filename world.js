window.onload=main();

function main(){ 
 var lookup_button=document.getElementById("lookup"); 
 let result=document.getElementById("result"); 
 
 var httpRequest= new XMLHttpRequest();
 var url = "https://lab007-elton0019.c9users.io/world.php?q=";
   
lookup_button.onclick=function(){ 
     let tick=document.getElementById("tick") ;
     let place= document.getElementById("country");
     var search_value= place.value ;
     
     httpRequest.onreadystatechange = function(){
         if(httpRequest.readyState === XMLHttpRequest.DONE) { 
            if(httpRequest.status === 200) { 
                var response = httpRequest.responseText; 
                    result.innerHTML=response; 
                } 
                else{ 
                    alert('There was a problem with the request.'); 
                } 
        }
     }; 
     
     
     if (tick.value == true){
     var new_url=url + search_value;
     httpRequest.open("get",new_url);
     httpRequest.send(); 
     result.innerHTML=httpRequest.responseText;
     
    } 
    else{  
        var all_url ="https://lab007-elton0019.c9users.io/world.php?all=true";
        httpRequest.open('get', all_url); 
        httpRequest.send(); 
        result.innerHTML=httpRequest.responseText;
        
        
    }

 }
    
}