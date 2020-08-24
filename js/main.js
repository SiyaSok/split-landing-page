const Right = document.querySelector('.Right');
const Left = document.querySelector('.Left');
const container = document.querySelector('.container');

console.log(Right);
console.log(Left);

Right.addEventListener('mouseenter', () => {
	container.classList.add('hover-right');
});

Right.addEventListener('mouseleave', () => {
	container.classList.remove('hover-right');
});

Left.addEventListener('mouseenter', () => {
	container.classList.add('hover-left');
});

Left.addEventListener('mouseleave', () => {
	container.classList.remove('hover-left');
});
