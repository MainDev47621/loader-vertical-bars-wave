const blocks = document.querySelectorAll('.block');
const container = document.querySelector('.container');

console.log('testing');
console.log(container.style.height);

blocks.forEach(block => {
    const animDelay = block.style.width;
    console.log(animDelay);
    console.log('test');
})