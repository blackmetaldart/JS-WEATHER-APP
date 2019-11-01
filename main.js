//Variables For API
let q = null;
let units = "imperial";
let appid = "36dc527cf75b193eafdf60736d33837e";
const respData = null;

document.getElementById('submitMain').addEventListener('click', storeValue);
document.getElementById('submitHead').addEventListener('click', storeValue2);
document.getElementById('submitMain').addEventListener('click', showValue);
document.getElementById('submitHead').addEventListener('click', showValue);

//For EventListeners
function showValue (e) {
  //e.preventDefault();
  document.querySelector('.weatherBox').style.display = "flex";
  document.querySelector('.mainContainer').style.display = "none";
  document.querySelector('.header').style.display = "flex";
}

//For Event Listeners
function storeValue(e) {
  e.preventDefault();
  q = document.getElementById('inputMain').value;
  var url = `http://api.openweathermap.org/data/2.5/weather?zip=${q}&appid=${appid}`;

  fetch(url)
  .then((response) => {return response.json();})
  .then((response) => {return JSON.stringify(response);})
  .then((response) => {return JSON.parse(response);})
  .then((response) => {return getData(response);})
}


function storeValue2(e) {
    e.preventDefault();
    q = document.getElementById('inputHead').value;
    var url = `http://api.openweathermap.org/data/2.5/weather?zip=${q}&appid=${appid}`;

    fetch(url)
    .then((response) => {return response.json();})
    .then((response) => {return JSON.stringify(response);})
    .then((response) => {return JSON.parse(response);})
    .then((response) => {return getData(response);})
  }

function getData (data){
  console.log(data)
  var cityName = data.name;
  var weather = data.weather[0].description;
  var temp = data.main.temp;
  var minTemp = data.main.temp_min;
  var maxTemp = data.main.temp_max;

  temp = Math.floor(changeTemp(temp));
  minTemp = Math.floor(changeTemp(minTemp));
  maxTemp = Math.floor(changeTemp(maxTemp));
  console.log(temp);

  document.querySelector('.cityName').innerHTML = `<p> ${cityName} </p>`;
  document.querySelector('#showMin').innerHTML = `<p>Min Temp : ${minTemp}</p>`;
  document.querySelector('#showMax').innerHTML = `<p>Max Temp : ${maxTemp}</p>`;
  document.querySelector('.temperature').innerHTML = ` <p>Current Temp : ${temp}</p>`;
  document.querySelector('.weatherDescription').innerHTML = `<p>${weather}</p>`;
}

//To Change the Temperature
function changeTemp (temp) {
  temp = temp - 273;
  temp = temp * 1.8;
  temp = temp + 32;
  return temp;
}
