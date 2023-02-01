window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});


const API = 'https://cv-function-app.azurewebsites.net/api/GetResumeCounter?code=z3k5i7cwY3SplORyD-jyhd5aLCraCG4t-IV6fCs0bXDJAzFuVsLghA=='; 

const getVisitCount = () => {
    let count = 30;
    fetch(API)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}