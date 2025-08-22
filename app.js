let btn=document.querySelector("#button");
let h2=document.querySelector("h2");
h2.classList.add("addNoneVisibility");

btn.addEventListener("click",async()=>{
   
    console.log("button clicked");
    let loading=document.querySelector(".anime");
    let info=await getapi();
    let h2=document.querySelector("h2");
    let temp=document.querySelector(".temp");
    let desc=document.querySelector(".description");
    let h_perc=document.querySelector("#h-perc");
    let w_perc=document.querySelector("#w-perc");
    let img=document.querySelector("#image");
    img.classList.add("addNoneVisibility");
    console.log (info);
    loading.classList.add("animation");
    h2.classList.remove("addNoneVisibility");
   
    setTimeout(() => {
      
        console.log("timeout");
        img.classList.remove("addNoneVisibility");
        h2.classList.add("addNoneVisibility");
        loading.classList.remove("animation");  
    if(info.cod=="404" || info.cod=="400"){
        let img=document.querySelector("#image");
        img.setAttribute("src","/assets/404error.png");
        temp.classList.add("addNoneVisibility");
        desc.classList.add("addNoneVisibility");
        h_perc.classList.add("addNoneVisibility");
        w_perc.classList.add("addNoneVisibility");
        img.classList.add("incsize");
        console.log("reloaded");  
      
   }
   else{
         temp.classList.remove("addNoneVisibility");
        desc.classList.remove("addNoneVisibility");
        h_perc.classList.remove("addNoneVisibility");
        w_perc.classList.remove("addNoneVisibility");
        
        
        temp.innerHTML=`${Math.round(info.main.temp-273.15)}<sup> °C</sup>`;
        desc.style.textTransform="capitalize";
        desc.innerHTML=`${info.weather[0].description}`;
        
        h_perc.innerHTML=`${info.main.humidity}%`;
        w_perc.innerText=`${info.wind.speed}Km/H`;

       
        if(info.weather[0].main=="Clear"){
        img.setAttribute("src","/assets/sunny.png");
        }
        else if(info.weather[0].main=="Clouds"){
            img.setAttribute("src","/assets/cloudy.png");
        }
        else if(info.weather[0].main=="Mist" || info.weather[0].main=="Fog"){
            img.setAttribute("src","/assets//fog or mist.png");
        }
        else if(info.weather[0].main=="Rain"){
            img.setAttribute("src","/assets/rain.png");
        }
        else {
            img.setAttribute("src","/assets/snowflake.png");
        }
    }
      
}
    , 2000);
    
});

let loading=document.querySelector(".anime");
loading.addEventListener("click",()=>{
    alert("Welcome to Weather App!!!");
});


async function getapi(){
    try{
        let input=document.querySelector("input").value;
        const api_key="1248283522f3e97216a8bd28797ee85f";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_key}`;
        let place=await fetch(url);
        let p=await place.json();
        console.log(p);
        return p;
    }catch(e){
        alert("no data found");
        return e;
    }
}



