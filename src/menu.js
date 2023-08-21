export function renderMenuPage() {
    const content = document.querySelector('#content')

    const headline = document.createElement('h1');
    headline.textContent = "Our Menu";

    const menuItem = document.createElement('div');
    menuItem.classList.add("menu-item");
    menuItem.textContent = "This is a menu item"

    content.appendChild(headline);
    content.appendChild(menuItem);

    return content;
}