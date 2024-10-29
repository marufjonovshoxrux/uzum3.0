export function Thing(item) {
	const shop_thing = document.createElement('div')
	const img_thing = document.createElement('div')
	const text_thing = document.createElement('div')

	const img_like = document.createElement('img')
	const img_like_click = document.createElement('img')
	const img_photo = document.createElement('img')
	const div_for_img = document.createElement('div')

	const name_thing = document.createElement('span')
	const rassrochka_thing = document.createElement('span')
	const price_fake = document.createElement('span')
	const one_line = document.createElement('div')
	const really_price = document.createElement('span')
	const img_basket = document.createElement('img')

	shop_thing.classList.add('shop_thing')
	img_thing.classList.add('img_thing')
	text_thing.classList.add('text_thing')
	one_line.classList.add('one_line')
	name_thing.classList.add('name_thing')
	rassrochka_thing.classList.add('rassrochka_thing')
	price_fake.classList.add('price_fake')
	really_price.classList.add('really_price')
	img_basket.classList.add('basket')
	img_like.classList.add('like')
	img_like_click.classList.add('like_click')
	img_photo.classList.add('photo')
	div_for_img.classList.add('div_for_img')

	img_like.src = '/like.svg'
	img_like.alt = 'like'
	img_like.id = 'like'

	img_like_click.src = '/likeonclick.svg'
	img_like_click.alt = 'like'
	img_like_click.id = 'like_click'

	img_photo.src = item.thumbnail
	img_photo.alt = item.title

	img_basket.src = '/basket.svg'
	img_basket.alt = 'basket'

	name_thing.innerHTML = item.title
	rassrochka_thing.innerHTML = 'Rating ' + item.rating
	price_fake.innerHTML = item.discountPercentage + '$'
	really_price.innerHTML = item.price + '$'

	shop_thing.append(img_thing, text_thing, img_basket)
	img_thing.append(img_like, img_like_click, div_for_img)
	div_for_img.append(img_photo)

	text_thing.append(name_thing, rassrochka_thing, price_fake, one_line)
	one_line.append(really_price)

	img_photo.onclick = () => {
		location.assign(`/pages/product/?id=` + item.id)
	}
	text_thing.onclick = () => {
		location.assign(`/pages/product/?id=` + item.id)
	}


	

	img_basket.onmouseover = () => {
		img_basket.style.backgroundColor = '#acacac'
		img_basket.style.borderRadius = '50%'
	}

	img_basket.onmouseout = () => {
		img_basket.style.backgroundColor = 'white'
	}

	img_like.onclick = () => {
		let items = JSON.parse(localStorage.getItem('things')) || []

		items.push(item)

		localStorage.setItem('things', JSON.stringify(items))

		img_like.style.display = 'none'
		img_like_click.style.display = 'block'
	}

	img_like_click.onclick = () => {
		let items = JSON.parse(localStorage.getItem('things')) || []

		items = items.filter(e => e.id !== item.id)

		localStorage.setItem('things', JSON.stringify(items))
 
		img_like.style.display = 'block'
		img_like_click.style.display = 'none'
	}
	
	img_basket.onclick = () => {
		let items = JSON.parse(localStorage.getItem('korzina')) || []
		
		items.push(item)
		
		localStorage.setItem('korzina', JSON.stringify(items))
		
		
	}

	likeSave(item.id)
	async function likeSave(itemID) {
		const things = JSON.parse(localStorage.getItem('things')) || []
		const isLiked = things.some(e => e.id === itemID)

		if (isLiked) {
			img_like.style.display = 'none'
			img_like_click.style.display = 'block'
		} else {
			img_like.style.display = 'block'
			img_like_click.style.display = 'none'
		}
	}
	// likeSave(item.id)

	return shop_thing
}
