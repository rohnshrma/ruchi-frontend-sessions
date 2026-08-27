const URL = "https://jsonplaceholdertypicode.com/posts";

function sendRequest(URL, cb) {
  var request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      cb( null , JSON.parse(request.responseText));
    }
    if (request.readyState === 4 && request.status !== 200) {
     cb("Failed to fetch data" , null);
    }
  });

  request.open("GET", URL);
  request.send();
}

sendRequest(URL, (err, data) => {
  if (err) {
    console.log("ERROR =>  Something went wrong!");
  } else {
    console.log("DATA =>",data);
  }
});
