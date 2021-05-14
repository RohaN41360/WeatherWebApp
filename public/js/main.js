const SearchBtn = document.getElementById('searchbtn');
const CityName = document.getElementById('CityName');
const city_name = document.getElementById('city_name');
const day = document.getElementById('day');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const datahide  = document.querySelector('.middle_layer');





const getinfo = async(e) =>{
    e.preventDefault();
    let CityVal = CityName.value;
    
    
    if(CityVal === ""){
        city_name.innerText = 'Please Enter the name of the city';
        
        datahide.classList.add('data_hide');
    }
    else{
        try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${CityVal}&units=metric&appid=0314ac4aab52ce50308db48cb00b384c`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        console.log(data);
        city_name.innerText = `${arrData[0].name} ,${arrData[0].sys.country}`;
        temp.innerText = arrData[0].main.temp+"°C";
        temp_status.innerText = arrData[0].weather[0].main;
        

        //console.log(temp);
        //console.log(temp_status);
            const tempMood = arrData[0].weather[0].main;
        // condition to check sunny or cloudy
        
if (tempMood === "Clear") {

    temp_status.innerHTML ="<i class='far fa-sun' style='font-size:48px;color:yellow'></i>";
    
    }
     else if (tempMood ===  "Clouds") 
     { 
         temp_status.innerHTML ="<i class='fas fa-cloud-sun' style='font-size:48px;color:blue'></i>"; 
     }
     else if (tempMood === "Rain") 
     {
    
    temp_status.innerHTML ="<i class='fas fa-cloud-rain' style='font-size:48px;color:black'></i>"; 
} else
 {
    
    temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#eccc68;'></i>"; 
}
      
datahide.classList.remove('data_hide');

        }
        catch{
            datahide.classList.add('data_hide');
            city_name.innerText = 'Please Enter the Proper City Name';
            
        }


    }
    
}
SearchBtn.addEventListener('click' , getinfo);