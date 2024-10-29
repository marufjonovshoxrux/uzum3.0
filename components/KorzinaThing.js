export function KorzinaThing(item) {
	const inproduct = document.createElement('div')
	const info_inproduct = document.createElement('div')
	const info_product2 = document.createElement('div')

	const inbaza = document.createElement('span')
	const dalevery_inproduct = document.createElement('span')

	const sel = document.createElement('div')
	const img_inproduct = document.createElement('div')
	const bio_inproduct = document.createElement('div')
	const bio_inproduct2 = document.createElement('div')
	const counter = document.createElement('div')
	const remove_product = document.createElement('div')

	const input = document.createElement('input')
	const img = document.createElement('img')
	const title_inproduct = document.createElement('span')
	const salary = document.createElement('span')
	const mines = document.createElement('button')
	const plus = document.createElement('button')
	const counterValue = document.createElement('input')
	const del = document.createElement('button')
	const img_del = document.createElement('img')
	const price_inproduct = document.createElement('span')
	const sale_inproduct = document.createElement('span')

	inproduct.classList.add('inproduct')
	info_inproduct.classList.add('info_inproduct')
	info_product2.classList.add('info_product2')
	inbaza.classList.add('inbaza')
	dalevery_inproduct.classList.add('dalevery_inproduct')
	sel.classList.add('sel')
	img_inproduct.classList.add('img_inproduct')
	img.classList.add('img_korzina')
	bio_inproduct.classList.add('bio_inproduct')
	bio_inproduct2.classList.add('bio_inproduct2')
	counter.classList.add('counter')
	remove_product.classList.add('remove_product')
	input.classList.add('Selectall')
	title_inproduct.classList.add('title_inproduct')
	salary.classList.add('salary')
	mines.classList.add('btn')
	plus.classList.add('btn')
	del.classList.add('delete')
	price_inproduct.classList.add('price_inproduct')
	sale_inproduct.classList.add('sale_inproduct')

	input.id = 'Select all3672'
	input.type = 'checkbox'
	input.name = 'Select all'
	img.src = item.thumbnail
	img.alt = item.title
	img_del.src = '/delete.svg'
	mines.id = 'mines'
	plus.id = 'plus'
	counterValue.id = 'counterValue'
	counterValue.type = 'text'
	counterValue.value= '1'
	counterValue.readOnly

	inbaza.innerHTML = 'На складе Uzum Market'
	dalevery_inproduct.innerHTML = item.shippingInformation
	title_inproduct.innerHTML = item.description
	salary.innerHTML = item.brand
	mines.innerHTML = '-'
	plus.innerHTML = '+'
	counterValue.innerHTML = '1'
	del.innerHTML = 'Удалить'
	price_inproduct.innerHTML = item.price + '$'
	sale_inproduct.innerHTML = item.rating + '$'

	inproduct.append(info_inproduct, info_product2)
	info_inproduct.append(inbaza, dalevery_inproduct)
	info_product2.append(img_inproduct, bio_inproduct, remove_product)
	sel.append(input)
	img_inproduct.append(img)
	bio_inproduct.append(title_inproduct, bio_inproduct2)
	bio_inproduct2.append(salary, counter)
	counter.append(mines, counterValue, plus)
	remove_product.append(del, price_inproduct, sale_inproduct)
	del.prepend(img_del)

	mines.onclick = () => {
		let quantity = parseInt(counterValue.value)
		if (quantity > 1) {
			quantity--
			counterValue.value = quantity

			// Уменьшаем цену
			let newPrice = item.price * quantity
			price_inproduct.innerHTML = newPrice.toFixed(2) + '$'
		}
	}

	plus.onclick = () => {
		let quantity = parseInt(counterValue.value)
		quantity++
		counterValue.value = quantity

		// Удваиваем цену
		let newPrice = item.price * quantity
		console.log(counterValue)

		price_inproduct.innerHTML = newPrice.toFixed(2) + '$'
	}

	del.onclick = () => {
		let items = JSON.parse(localStorage.getItem('korzina')) || []

		items = items.filter(e => e.id !== item.id)

		localStorage.setItem('korzina', JSON.stringify(items))

		if (items) {
			inproduct.remove()
		}
	}

	// inproduct.onclick = () => {
	// 	location.assign(`/pages/product/?id=` + item.id)

	// }

	return inproduct
}
