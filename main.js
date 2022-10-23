const Cuenta = document.querySelector('#cuenta');
const NavCuenta = document.querySelector('#nav-cuenta');
const inactive = document.querySelector('.inactive');

const NavIconoMenuAmburgesa = document.querySelector('#nav-icono-menu-amburgesa');
const NavMenuMovile = document.querySelector('#nav-menu-movile');

const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

Cuenta.addEventListener('click', (event) => {
	const isProductDetailClosed = productDetail.classList.contains('inactive');
	if (!isProductDetailClosed) {
		productDetail.classList.add('inactive');
	}

	NavCuenta.classList.toggle('inactive');
});
NavIconoMenuAmburgesa.addEventListener('click', (event) => {
	const isProductDetailClosed = productDetail.classList.contains('inactive');

	if (!isProductDetailClosed) {
		productDetail.classList.add('inactive');
	}
	NavMenuMovile.classList.toggle('inactive');
});

navbarShoppingCart.addEventListener('click', (event) => {
	// productDetail.classList.toggle('inactive');

	const isModbileMenuClosed = NavMenuMovile.classList.contains('inactive');
	if (!isModbileMenuClosed) {
		NavMenuMovile.classList.add('inactive');
	}
	productDetail.classList.toggle('inactive');
});
