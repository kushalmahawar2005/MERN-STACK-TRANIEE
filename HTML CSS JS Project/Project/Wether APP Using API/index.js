async function getData() {
  let API = '3304c487546ad2cf3d18ace543f4acbf';
   lat = document.getElementById('lat').value;
   lon = document.getElementById('lon').value;
  let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`;

  let data = await fetch(URL);
  let res = await data.json();
  console.log(res);

  document.getElementById("cou").textContent = res.sys.country;
  document.getElementById("temp").textContent = res.main.temp;
  document.getElementById("city").textContent = res.name;
  document.getElementById("humidity").textContent = res.main.humidity;

}
