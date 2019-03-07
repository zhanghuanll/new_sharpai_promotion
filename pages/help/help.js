window.onload = function () {
    const template1 = document.querySelector('.con1');
    const copy1 = document.importNode(template1.content, true);
    const content1 = document.querySelector('.content1');
    content1.appendChild(copy1);

    const template2 = document.querySelector('.con2');
    const copy2 = document.importNode(template2.content, true);
    const content2 = document.querySelector('.content2');
    content2.appendChild(copy2);

    const template3 = document.querySelector('.con3');
    const copy3 = document.importNode(template3.content, true);
    const content3 = document.querySelector('.content3');
    content3.appendChild(copy3);

    const tabF = document.querySelector('.tabF');
    tabF.focus();
}


