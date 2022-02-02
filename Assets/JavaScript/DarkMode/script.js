function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() { 
    if(body.classList.contains(lightModeClass)){
        body.classList.remove(lightModeClass);
        body.classList.add(darkModeClass);       
    }else if(body.classList.contains(darkModeClass)){
        body.classList.remove(darkModeClass);
        body.classList.add(lightModeClass);      
    }
}

function changeText() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";
    if(body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;        
        return;
    }
    button.innerHTML = darkMode; 
}

const lightModeClass = 'light-mode';
const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);