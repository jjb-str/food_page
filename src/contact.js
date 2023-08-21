export function renderContactPage() {
    const content = document.querySelector('#content')

    const headline = document.createElement('h1');
    headline.textContent = "Contact Us";

    const contactInfo = document.createElement('p');
    contactInfo.textContent = "We're located nearby somewhere, probably. Just get in your car and look around, if you find us come in and buy something."

    content.appendChild(headline);
    content.appendChild(contactInfo);

    return content;
}