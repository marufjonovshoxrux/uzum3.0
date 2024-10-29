import { Header } from '../../components/Header.js'
import { Thing } from '../../components/Thing.js'
import { ApiCall } from '../../lib/http.request.js'
import { reload } from '../../lib/utils.js'

const apiCall = new ApiCall(import.meta.env.VITE_BASE_URL)
const products2 = apiCall.getData('/products')

const box_thing = document.querySelector('.box_thing2')
const header = document.querySelector('header')
const nothing = document.querySelector('.nothing')

const products = JSON.parse(localStorage.getItem('products'))
const beauty = JSON.parse(localStorage.getItem('beauty'))
const fragrances = JSON.parse(localStorage.getItem('fragrances'))
const furniture = JSON.parse(localStorage.getItem('furniture'))
const groceries = JSON.parse(localStorage.getItem('groceries'))
const beauty2 = document.querySelector('.beauty')
const furniture2 = document.querySelector('.furniture')
const groceries2 = document.querySelector('.groceries')
const fragrances2 = document.querySelector('.fragrances')
const btn_page = document.querySelector('.btn_page')

btn_page.onclick = () => {
	location.assign('/')
}

if (products == 0) {
	nothing.style.display = 'flex'
}
if (products) {
	reload(products, box_thing, Thing)

	localStorage.removeItem('products')
}

if (beauty) {
	reload(beauty, box_thing, Thing)

	localStorage.removeItem('beauty')
}
if (fragrances) {
	reload(fragrances, box_thing, Thing)

	localStorage.removeItem('fragrances')
}
if (furniture) {
	reload(furniture, box_thing, Thing)

	localStorage.removeItem('furniture')
}
if (groceries) {
	reload(groceries, box_thing, Thing)
	localStorage.removeItem('groceries')
}


beauty2.onclick = () => {
	const beauty2 = products2.slice(0, 5)
	localStorage.setItem('beauty', JSON.stringify(beauty2))

	location.assign('/pages/products/')
}

fragrances2.onclick = () => {
	const fragrance2 = products2.slice(6, 11)
	localStorage.setItem('fragrances', JSON.stringify(fragrance2))
	location.assign('/pages/products/')
}

furniture2.onclick = () => {
	const furniture2 = products2.slice(10, 15)
	localStorage.setItem('furniture', JSON.stringify(furniture2))
	location.assign('/pages/products/')
}

groceries2.onclick = () => {
	const groceries2 = products2.slice(16, 30)
	localStorage.setItem('groceries', JSON.stringify(groceries2))
	location.assign('/pages/products/')
}
reload([{}], header, Header)
