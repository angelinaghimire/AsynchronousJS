const DEMO_URL = 'https://course-api.com/react-store-products'
function fetchData(DEMO_URL, callback){
    fetch(DEMO_URL).then((response)=>{
        return response.json()
    }).then((data)=>{
    callback(data)
}).catch((error)=>{
    console.log("Error occured", error)})
}

function handleData (data){
    const objects = document.getElementById("p1");
    objects.innerHTML = "ID: " + data[1]["id"] +"<br>Name: " + data[1]["name"] + "<br>Price: " + data[1]["price"] + "<br>Colors: "
        + data[1]["colors"] + "<br>Category:" + data[1]["category"] + "<br>Company: " + data[1]["company"]
        + "<br>Description:" + data[1]["description"] +  "<br>Shipping:" + data[1]["shipping"]
    const imageDisplay = document.getElementById("image")
    imageDisplay.src = data[1]["image"]
}

fetchData(DEMO_URL, handleData)