// function ageChecker(age){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if (age >=18){
//             resolve("Eligible")
//         }else{
//             reject("Not Eligible")
//         }
//     } , 5000)
//    })
// }

// ageChecker(23)
// .then(data => console.log(data))
// .catch(err=> console.log(err))
// ageChecker(12)
// .then(data => console.log(data))
// .catch(err=> console.log(err))


const URL = "https://jsonplaceholder.typicode.com/posts"
function fetchData(URL) {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        resolve(JSON.parse(request.responseText));
      }
      if (request.readyState === 4 && request.status !== 200) {
       reject("Failed to fetch data");
      }
    });

    request.open("GET", URL);
    request.send();
  });
}




fetchData(URL)
.then(data=>console.log(data))
.catch(err=>console.log(err))