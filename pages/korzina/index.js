import { Header } from '../../components/Header.js'
import { KorzinaThing } from '../../components/KorzinaThing.js'
import { Thing } from '../../components/Thing.js'
import { ApiCall } from '../../lib/http.request.js'
import { reload } from '../../lib/utils.js'

const apiCall = new ApiCall(import.meta.env.VITE_BASE_URL)
const products = apiCall.getData('/products')
const korzina = JSON.parse(localStorage.getItem('korzina')) || []

const header = document.querySelector('header')

const beauty = document.querySelector('.beauty')
const furniture = document.querySelector('.furniture')
const groceries = document.querySelector('.groceries')
const fragrances = document.querySelector('.fragrances')
const nothing = document.querySelector('.nothing')
const products_place = document.querySelector('.products_place')
const lenght_product = document.querySelector('.lenght_product')
const box_korzina = document.querySelector('.box_korzina')
const full_price = document.querySelector('.full_price')
const sale_sale = document.querySelector('.sale_sale')
const btn_zakaz = document.querySelector('.btn_zakaz')

if (korzina.length > 0) {
	reload(korzina, products_place, KorzinaThing)
	const data = korzina[0]
	sale_sale.innerHTML = data.price + '$'
	console.log(korzina)
} else {
	nothing.style.display = 'flex'
	box_korzina.style.display = 'none'

}

const summa = korzina.reduce((total, item) => total + item.price, 0)
const summa_floor = Math.floor(summa)


full_price.innerHTML = summa_floor + '$'
lenght_product.innerHTML = korzina.length + ' Товара'

const btn_page = document.querySelector('.btn_page')

btn_page.onclick = () => {
	location.assign('/')
}

btn_zakaz.onclick = () => {
	location.assign('https://uzum.uz/ru/checkout')
}

beauty.onclick = () => {
	const beauty = products.slice(0, 5)
	localStorage.setItem('beauty', JSON.stringify(beauty))

	location.assign('/pages/products/')
}

fragrances.onclick = () => {
	const fragrance = products.slice(6, 11)
	localStorage.setItem('fragrances', JSON.stringify(fragrance))
	location.assign('/pages/products/')
}

furniture.onclick = () => {
	const furniture = products.slice(10, 15)
	localStorage.setItem('furniture', JSON.stringify(furniture))
	location.assign('/pages/products/')
}

groceries.onclick = () => {
	const groceries = products.slice(16, 30)
	localStorage.setItem('groceries', JSON.stringify(groceries))
	location.assign('/pages/products/')
}
reload([{}], header, Header)
