// API -> tusgailan hadgalsan medeeleliig holbogch
// fetch() -> API ruu huselt yvuulna
// promise -> Nadad hariu irne gedeg amlalt
// .then() -> promise
// response -> 200 : approved, 404, 300, 500 : error
// json() -> zambaraagui medeellig tsegtstei gargaj irne
/*fetch('https://fakestoreapi.com/products').then(
    response => response.json()
).then(
    product =>{
        console.log(product[product.length-1].rating.rate)
    }
)*/
var input = document.getElementsByTagName('input')[0]
var country=document.querySelector(".name");
var temp=document.querySelector(".temp");
var desc=document.querySelector(".desc");
var ws=document.querySelector(".ws");
function search(){
    var city = input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
    response => response.json()
    ).then(
        product =>{
            console.log(product)
            country.innerText=product.name
            ws.innerText="Wind speed: "+product.wind.speed+"m/s"
            temp.innerText="Temperature: "+product.main.temp+" celsius"
            desc.innerText=product.weather[0].description
            document.getElementsByTagName('img')[0].style.width="200px";
            switch(product.weather[0].main){
                case "Clouds":
                    document.getElementsByTagName('img')[0].src="cloud.webp";
                    break;
                case "Clear":
                    document.getElementsByTagName('img')[0].src="clear.webp";
                    break;
                case "Rain":
                    document.getElementsByTagName('img')[0].src="rain.webp";
                    break;
                case "Snow":
                    document.getElementsByTagName('img')[0].src="snow.webp";
                    break;
                case "Haze":
                    document.getElementsByTagName('img')[0].src="mist.webp";
                    break;
            }
        }
)
}