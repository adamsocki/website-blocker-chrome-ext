const defineCss = () =>
{
    return `<style>
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 100%;
        height: auto;
    }
    </style>`
}

const defineHTML = () => 
{
    return `<div class = "content">
    <img src ="https://i.postimg.cc/BQBFprQW/get-to-work.png" alt = "pica">
    </div>`
}

const forbiddenUrls = ["www.facebook.com"];
const set = new Set(forbiddenUrls);

 if (set.has(window.location.hostname))
 {
    document.head.innerHTML = defineCss();
    document.body.innerHTML = defineHTML();
    // replace HTML and CSS
 }