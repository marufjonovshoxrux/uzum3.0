import { Comment } from '../../components/Comment.js'
import { Header } from '../../components/Header.js'
import { Thing } from '../../components/Thing.js'
import { ApiCall } from '../../lib/http.request.js'
import { reload } from '../../lib/utils.js'

const apiCall = new ApiCall(import.meta.env.VITE_BASE_URL)

const products = apiCall.getData('/products')
const urlParams = new URLSearchParams(window.location.search)
const productId = urlParams.get('id')

const header = document.querySelector('header')
const title = document.querySelector('title')
const name_product = document.querySelector('.name-product')
const product_image = document.querySelector('.product_img')
const people_band = document.querySelector('.people_band')
const lenght_comment = document.querySelector('.lenght_comment')
const product_comment = document.querySelector('.product-comment')
const price = document.querySelector('.price')
const rassrochka = document.querySelector('.rassrochka_span')
const info_product = document.querySelector('.info_product')
const img_1 = document.querySelector('.img-1')
const img_2 = document.querySelector('.img-2')
const img_3 = document.querySelector('.img-3')
const min_img_1 = document.querySelector('.min-img-1')
const min_img_2 = document.querySelector('.min-img-2')
const min_img_3 = document.querySelector('.min-img-3')
const see_comments = document.querySelector('.see_comments')
const not_see_comments = document.querySelector('.not_see_comments')
const product_type = document.querySelector('.product_type')
const thumbnails = document.querySelector('.thumbnails')
const save_two = document.querySelector('.save_two')
const save_two_active = document.querySelector('.save_two_active')
const beauty = document.querySelector('.beauty')
const furniture = document.querySelector('.furniture')
const groceries = document.querySelector('.groceries')
const fragrances = document.querySelector('.fragrances')
const buy_onclick = document.querySelector('.buy_onclick')
const sale_price = document.querySelector('.sale_price')
const rasrochka = document.querySelector('.rassrochka')
const add_basket = document.querySelector('.add_basket')

if (productId) {
	 apiCall.getData(`/products/${productId}/`).then(product => {
		console.log(product)
		title.innerHTML = product.title
		name_product.innerHTML = product.title

		img_1.src = product.images[0]
		img_2.src = product.images[1]

		min_img_1.src = product.images[0]
		min_img_2.src = product.images[1]
		min_img_3.src = product.images[2]

		const rating = product.rating
		const starContainer = document.querySelector('.stars')
		starContainer.style.width = `${(rating / 5) * 100}%`
		people_band.innerHTML = rating
		lenght_comment.innerHTML = product.reviews.length + ' отзывов'
		info_product.innerHTML = product.description
		price.innerHTML = product.price + '$'
		sale_price.innerHTML = product.dimensions.width + '$'
		rassrochka.innerHTML = 'от ' + product.discountPercentage + ' $/месяц'

		const comment = product.reviews
		const data = comment.slice(0, 1)
		const data_two = comment.slice(0, 2)

		if (product.images.length < 2) {
			console.log('hello world')
			thumbnails.remove()
			img_1.style.marginLeft = '200px'
		}
		min_img_1.onclick = () => {
			img_1.src = product.images[0]
			img_2.style.display = 'none'
			img_1.style.marginLeft = '200px'
		}

		min_img_2.onclick = () => {
			img_1.src = product.images[1]

			img_2.style.display = 'none'
			img_1.style.marginLeft = '200px'
		}
		min_img_3.onclick = () => {
			img_1.src = product.images[2]

			img_2.style.display = 'none'
			img_1.style.marginLeft = '200px'
		}

		see_comments.onclick = () => {
			const data_three = comment
			reload(data_three, product_comment, Comment)
			see_comments.style.display = 'none'
			not_see_comments.style.display = 'block'
		}

		not_see_comments.onclick = () => {
			reload(data, product_comment, Comment)
			reload(data_two, product_comment, Comment)

			see_comments.style.display = 'block'
			not_see_comments.style.display = 'none'
		}

		apiCall.getData(`/products?category=${product.category}`).then(res => {
			const product_categoriy = res.slice(0, 10)
			reload(product_categoriy, product_type, Thing)
			console.log(res)
		})

		save_two.onclick = () => {
			localStorage.setItem('things', JSON.stringify([product]))

			save_two.style.display = 'none'
			save_two_active.style.display = 'block'
		}

		save_two_active.onclick = () => {
			localStorage.removeItem('things', JSON.stringify([product]))

			save_two.style.display = 'block'
			save_two_active.style.display = 'none'
		}
		likeSave(product.id)
		async function likeSave(itemID) {
			const things = JSON.parse(localStorage.getItem('things')) || []
			const isLiked = things.some(e => e.id === itemID)

			if (isLiked) {
				save_two.style.display = 'none'
				save_two_active.style.display = 'block'
			} else {
				save_two.style.display = 'block'
				save_two_active.style.display = 'none'
			}
		}

		add_basket.onclick = () => {
			let items = JSON.parse(localStorage.getItem('korzina')) || []

			items.push(product)

			localStorage.setItem('korzina', JSON.stringify(items))
		}

		reload(data, product_comment, Comment)
		reload(data_two, product_comment, Comment)
	})
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

buy_onclick.onclick = () => {
	location.href = 'https://uzum.uz/ru/checkout'
}
rasrochka.onclick = () => {
	location.href = 'https://uzum.uz/ru/promo/installment'
}

reload([{}], header, Header)
