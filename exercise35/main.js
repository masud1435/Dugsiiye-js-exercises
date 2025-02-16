function changeImage(){
    const image = document.querySelector('#image');
    const url = prompt("please enter your image");
    image.setAttribute('src', url);
    const borderColor = prompt("please choose border- color");
    image.style.border = `5px solid ${borderColor}`;
    const width = prompt("please enter width");
    image.style.width = width + 'px';
    const height = prompt("please enter height");
    image.style.height = height + 'px';
    const borderRadius = prompt("please choose border-radius");
    image.style.borderRadius = borderRadius + 'px';
}