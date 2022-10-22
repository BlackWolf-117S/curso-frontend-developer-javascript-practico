const Cuenta = document.querySelector('#cuenta');
const NavCuenta = document.querySelector('#nav-cuenta');

const NavIconoMenuAmburgesa = document.querySelector('#nav-icono-menu-amburgesa');
const NavMenuMovile = document.querySelector('#nav-menu-movile');

Cuenta.addEventListener('click', (event) => {
	NavCuenta.classList.toggle('inactive');
	console.log(event);
});
NavIconoMenuAmburgesa.addEventListener('click', (event) => {
	NavMenuMovile.classList.toggle('inactive');
});
