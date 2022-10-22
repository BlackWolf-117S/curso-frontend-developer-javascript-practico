const Cuenta = document.querySelector('#cuenta');
const NavCuenta = document.querySelector('#nav-cuenta');

Cuenta.addEventListener('click', (event) => {
	NavCuenta.classList.toggle('inactive');
	console.log(event);
});
