const counter = document.querySelector(".views-counter")
async function showCounter(){
    let response = await fetch("https://2th74ml4tunuwevxdowlit3nma0lkczw.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}

showCounter()