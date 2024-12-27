window.onload = () => {
	fetchData();
};

const addProductBtn = document.querySelector("#btn-add-product");
addProductBtn.onclick = () => {
	const form = document.forms["product-form"];
	const name = form["ProductName"].value;
	const desc = form["ProductDescription"].value;
	const price = form["ProductPrice"].value;
	const category = form["ProductCategory"].value;
	const url = form["SiteURL"].value;

	addProduct(
		new Product(products.length + 15, name, price, category, desc, url),
	);
	fetchData();
};

class Product {
	constructor(id, name, price, category, description, url) {
		this.id = id;
		this.url = url;
		this.name = name;
		this.price = price;
		this.category = category;
		this.description = description;
	}
	innerURL() {
		return `<a href="${this.url}" target="_blank">Open</a>`;
	}
	innerUPDATE() {
		return `<button class="btn btn-warning" onclick=updateProduct(${this.id})>Update</button>`;
	}
	innerDELETE() {
		return `<button class="btn btn-danger" onclick=removeProduct(${this.id})>Delete</button>`;
	}
	innerHTML(index) {
		return `
			<tr>
				<th scope="row">${index}</th>
				<td colspan="3">${this.name}</td>
				<td>${this.price}</td>
				<td>${this.category}</td>
				<td>${this.description}</td>
				<td>${this.innerURL()}</td>
				<td>${this.innerUPDATE()}</td>
				<td>${this.innerDELETE()}</td>
			</tr>
			`;
	}
}

// Products
const products = [
	// new Product(3011, "Phone1", 15600, "Mobile Phones", "...", "Site.com"),
	// new Product(3012, "Phone2", 4200, "Mobile Phones", "...", "Site.com"),
	// new Product(3013, "Phone3", 11400, "Mobile Phones", "...", "Site.com"),
];

// Update Product
function updateProduct(id) {
	console.log(`UpdateProduct(${id}`);
}

// Remove Product
function removeProduct(id) {
	console.log(`RemoveProduct(${id}`);
	products.filter((product, index) => {
		if (product.id == id) {
			products.splice(index, 1);
		}
	});
	fetchData();
}

// Add Product
function addProduct(product) {
	products.push(product);
	fetchData();
}

function updateProduct(product) {
	
}

// Fetch Data
function fetchData() {
	const table = document
		.getElementById("table-data")
		.getElementsByTagName("tbody")[0];
	table.innerHTML = "";

	products.forEach((product, index) => {
		var row = table.insertRow();
		row.innerHTML = product.innerHTML(index + 1);
	});
}
