// TODO: add code here
window.addEventListener('load', function(){
    let URL = 'https://handlers.education.launchcode.org/static/astronauts.json';
    fetch(URL).then(function(response){
        console.log(response);
        const jsonPromise = response.json();
        jsonPromise.then(function(json){
            const container = document.getElementById('container');
            container.innerHTML = '';
            for(let index of json){
                container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${index.firstName} ${index.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${index.hoursInSpace}</li>
                            <li>Active: ${index.active}</li>
                            <li>Skills: ${index.skills}</li>
                        </ul>
                    </div>
                <img class="avatar" src="${index.picture}">
                </div>                
                `
            }
        });
    })

});
