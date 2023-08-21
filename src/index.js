import {renderHomePage} from './home';
import {renderMenuPage} from './menu';
import {renderContactPage} from './contact';
import './style.css';

function tabs() {
    
    const buttons = document.createElement('div');
    const content = document.createElement('div');
    content.setAttribute('id', 'content')

    const homeTab = document.createElement('button');
    homeTab.classList.add('home');
    homeTab.textContent = 'Home';
    homeTab.addEventListener('click', function () {
        const content = document.createElement('div');
        content.setAttribute('id', 'content')
        if (document.querySelector('#content')) {
            document.querySelector('#content').remove();
            document.body.appendChild(content)
        }
        document.body.appendChild(renderHomePage())
    })

    const menuTab = document.createElement('button');
    menuTab.classList.add('menu');
    menuTab.textContent = 'Menu';
    menuTab.addEventListener('click', function () {
        const content = document.createElement('div');
        content.setAttribute('id', 'content')
        if (document.querySelector('#content')) {
            document.querySelector('#content').remove();
            document.body.appendChild(content)
        }
        document.body.appendChild(renderMenuPage())
    })

    const contactTab = document.createElement('button');
    contactTab.classList.add('contact');
    contactTab.textContent = 'Contact';
    contactTab.addEventListener('click', function () {
        const content = document.createElement('div');
        content.setAttribute('id', 'content')
        if (document.querySelector('#content')) {
            document.querySelector('#content').remove();
            document.body.appendChild(content)
        }
        document.body.appendChild(renderContactPage())
    })


    buttons.appendChild(homeTab);
    buttons.appendChild(menuTab);
    buttons.appendChild(contactTab);
    
    return buttons;
}

document.body.appendChild(tabs())
document.body.appendChild(renderHomePage());