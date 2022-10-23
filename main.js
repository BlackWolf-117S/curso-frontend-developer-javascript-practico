const Cuenta = document.querySelector('#cuenta');
const NavCuenta = document.querySelector('#nav-cuenta');
const inactive = document.querySelector('.inactive');

const NavIconoMenuAmburgesa = document.querySelector('#nav-icono-menu-amburgesa');
const NavMenuMovile = document.querySelector('#nav-menu-movile');

const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppinngCartContainer = document.querySelector('#shoppinngCartContainer');

const CardContainer = document.querySelector('.cards-container');

const producDatailsContainer = document.querySelector('#product-detail');
const productDetailClosedIcon = document.querySelector('.product-detail-close');

Cuenta.addEventListener('click', (event) => {
	const isProductDetailClosed = shoppinngCartContainer.classList.contains('inactive');
	if (!isProductDetailClosed) {
		shoppinngCartContainer.classList.add('inactive');
	}

	NavCuenta.classList.toggle('inactive');
});

NavIconoMenuAmburgesa.addEventListener('click', (event) => {
	const isProductDetailClosed = shoppinngCartContainer.classList.contains('inactive');
	if (!isProductDetailClosed) {
		shoppinngCartContainer.classList.add('inactive');
	}
	NavMenuMovile.classList.toggle('inactive');
	cloProductDetailAside();
});

navbarShoppingCart.addEventListener('click', (event) => {
	const isModbileMenuClosed = NavMenuMovile.classList.contains('inactive');
	if (!isModbileMenuClosed) {
		NavMenuMovile.classList.add('inactive');
	}
	const isProductDeatilClosedd = producDatailsContainer.classList.contains('inactive');
	if (!isProductDeatilClosedd) {
		producDatailsContainer.classList.add('inactive');
	}

	shoppinngCartContainer.classList.toggle('inactive');
});

productDetailClosedIcon.addEventListener('click', cloProductDetailAside);

function openProductDetailAside(event) {
	shoppinngCartContainer.classList.add('inactive');
	producDatailsContainer.classList.remove('inactive');
}

function cloProductDetailAside(event) {
	const isProductDetailOpen = producDatailsContainer.classList.contains('inactive');
	producDatailsContainer.classList.add('inactive');
}

const productList = [];
productList.push({
	name: 'Bike',
	price: 120,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
	name: 'Bike',
	price: 12700,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
	name: 'Bicycle helmet',
	price: 1200,
	image:
		'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
});
productList.push({
	name: 'Bicycle helmet',
	price: 1600,
	image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg',
});
productList.push({
	name: 'Bicycle helmet',
	price: 1500,
	image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
});
productList.push({
	name: 'Seat',
	price: 300,
	image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg',
});
productList.push({
	name: 'Tennis Montain Bike',
	price: 2200,
	image:
		'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg',
});
productList.push({
	name: 'Sunglasses',
	price: 800,
	image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602',
});
productList.push({
	name: 'Sunglasses',
	price: 600,
	image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603',
});
productList.push({
	name: 'Bicycle seat bag',
	price: 876,
	image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg',
});

function renderProduct(arr) {
	for (product of arr) {
		// console.log(product.name);
		const productCard = document.createElement('div');
		productCard.classList.add('product-card');

		const img = document.createElement('img');
		img.setAttribute('src', product.image);
		img.addEventListener('click', openProductDetailAside);

		const productInfo = document.createElement('div');
		productInfo.classList.add('product-info');

		const productInfoDiv = document.createElement('div');

		const productPrice = document.createElement('p');
		productPrice.innerText = `$${product.price},00`;
		const productName = document.createElement('p');
		productName.innerText = product.name;

		productInfoDiv.appendChild(productPrice);
		productInfoDiv.appendChild(productName);

		const productFigure = document.createElement('figure');
		const imgFigure = document.createElement('img');
		imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');

		productFigure.appendChild(imgFigure);

		productInfo.appendChild(productInfoDiv);
		productInfo.appendChild(productFigure);

		productCard.appendChild(img);
		productCard.appendChild(productInfo);

		CardContainer.appendChild(productCard);
	}
}

renderProduct(productList);
