export function renderHomePage() {
    const content = document.querySelector('#content')

    const headline = document.createElement('h1');
    headline.textContent = "The best food ever.";

    const copyText = document.createElement('p');
    copyText.textContent = "We said it. Don't believe us? Come and see for yourself. Buy any of our delicious entrees and if your not fully satisfied? Too bad. I guess you just have bad taste. As my late grandmother used to say, 'If you don't like my cooking, starve'."

    content.appendChild(headline);
    content.appendChild(copyText);

    return content;
}
