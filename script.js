/* 
{
    "id": 60,
    "name": "anil kumar",
    "email": "anil@gmail.com",
    "gender": "male",
    "status": "active"
}
*/

let consoleForm = document.getElementById("consoleForm");
let requestUrl = document.getElementById("requestUrl");
let requestMethod = document.getElementById("requestMethod");
let requestBody = document.getElementById("requestBody");
let responseStatus = document.getElementById("responseStatus");
let responseBody = document.getElementById("responseBody");
let requestUrlErrMsg = document.getElementById("requestUrlErrMsg");
let method = null;

if(requestUrl.value === ""){
    requestUrlErrMsg.textContent = "Required*";
}
else{
    requestUrlErrMsg.textContent = "";
}

function methodFun(event){
    method = event.target.value;
}

function httpReqFun(event){
    event.preventDefault();
    let options = {
    method: requestMethod.value,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer b45cbc0b442be7d7223007d50affece73032a936ab4df03a93b96a29f7b53f9e",
    },
    body: requestBody.value,
    };
    let url = requestUrl.value;
    
    fetch(url, options)
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(jsonData => {
        responseStatus.value = jsonData.code;
        responseBody.value = JSON.stringify(jsonData);
    });
}

consoleForm.addEventListener("submit", httpReqFun);
requestMethod.addEventListener("change", methodFun);