export function Comment(item) {
	const comment = document.createElement('div')
	const bio_comment = document.createElement('div')
	const comment_all = document.createElement('div')

	const div = document.createElement('div')
	const star_rating = document.createElement('div')

	const name_user = document.createElement('span')
	const email_user = document.createElement('a')
	const data = document.createElement('span')
	const stars = document.createElement('div')

	const span = document.createElement('span')

	comment.classList.add('comment')
	bio_comment.classList.add('bio_comment')
	comment_all.classList.add('comment_all')
	star_rating.classList.add('star-rating')
	name_user.classList.add('name_user')
	data.classList.add('data')
	stars.classList.add('stars')
	email_user.classList.add('email_user')
	email_user.href = item.reviewerEmail
	div.style.display = 'flex'
	div.style.flexDirection = 'column'
	div.style.gap = '5px'

    const isoDate = item.date
    const date = new Date(isoDate)

    const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		}
	const formattedDate = date.toLocaleString('ru-RU', options)
	email_user.innerHTML = item.reviewerEmail
	name_user.innerHTML = item.reviewerName
	data.innerHTML = formattedDate
	span.innerHTML = 'Коментарий: ' + item.comment

	comment.append(bio_comment, comment_all)
	bio_comment.append(div, star_rating)
	comment_all.append(span)
	div.append(name_user,email_user, data)
	star_rating.append(stars)
    
    return comment
}
