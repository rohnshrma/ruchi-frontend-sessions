const URL = "https://jsonplaceholder.typicode.com/posts"
var request = new XMLHttpRequest()

request.addEventListener("readystatechange" , ()=>{
    if(request.readyState ===4 && request.status === 200){
        console.log(JSON.parse(request.responseText))   
    }
    if (request.readyState ===4 && request.status !== 200){
        console.log("Failed to fetch data")
    }
})


request.open("GET" , URL)
request. send()


 
// 0 : unsent
// 1 : open function has been called
// 2 : send function has been called
// 3 : downloading data (partial)
// 4 : request completed
