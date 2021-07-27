//TODO: add code here
 
 
     

window.addEventListener("load",function(){
    let json=[];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    response.json().then(function(json){
        console.log(json);
    const container=document.getElementById("container");        
    let obj=json;
     console.log(obj); 
     console.log(json.length);
    json.sort(function(a,b){
        return(a.hoursInSpace-b.hoursInSpace)
    })
   
    document.getElementById("name").innerHTML += `: ${json.length}`;
   
     for(index=0;index<json.length;index++){
         if(json[index].active==true)
         {
         
      container.innerHTML+= 
        `<div class="astronaut">
            <div class="bio">
            
             <h3> ${json[index].firstName} ${ json[index].lastName}<h3>
        <ul>
             <li> Hours in Space : ${json[index].hoursInSpace}</li>
             <li style="color:green;">Active:${json[index].active}</li>
            <li>Skils:${json[index].skills}</li>
             </ul>
             </div>
             <img class="avatar" src="${json[index].picture}"></div>
    `
         }else
         container.innerHTML+= 
        `<div class="astronaut">
            <div class="bio">
            
             <h3> ${json[index].firstName} ${ json[index].lastName}<h3>
        <ul>
             <li> Hours in Space : ${json[index].hoursInSpace}</li>
             <li >Active:${json[index].active}</li>
            <li>Skils:${json[index].skills}</li>
             </ul>
             </div>
             <img class="avatar" src="${json[index].picture}"></div>
    `
}
});
});
});     

