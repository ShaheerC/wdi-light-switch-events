document.addEventListener('DOMContentLoaded', function () {
    // let body = document.querySelector('body');
    // body.style.backgroundColor = 'black';
    
    let status = document.querySelector('.status');
    status.innerText = "The page has loaded!";

    let body = document.querySelector('body');
    let button = document.querySelector('.switch');

    button.addEventListener('click', function () {
        let buttonClass = button.className;
        if (buttonClass == ('switch on'))  {
            button.className = 'switch off';
            body.className = 'dark';
            status.innerText = "Hey, who turned off the lights?";
        } else if (buttonClass == ('switch off')) {
            button.className = 'switch on';
            body.className = 'light';
            status.innerText = "It's so bright in here!";
        }
    });
});
