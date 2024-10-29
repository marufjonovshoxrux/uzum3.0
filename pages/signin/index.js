import { ApiCall } from "../../lib/http.request"

const apiCall = new ApiCall(import.meta.env.VITE_BASE_URL)

const form = document.forms.namedItem('signin')
const email = document.querySelector('#email')

const locale = JSON.parse(localStorage.getItem('user'))
const users = await apiCall.getData('/users')

email.value = locale.email


form.onsubmit = async e => {
	e.preventDefault()

	const signin = {
		email: new FormData(form).get('email'),
		password: new FormData(form).get('password'),
	}

	const email = await apiCall.getData('/users?email=' + signin.email)
	const password = await apiCall.getData('/users?password=' + signin.password)

	if (email.length > 0) {
		alert('Почта правильно')
		// return
	} else {
		alert('Почта неправильно')
	}

	if (password.length) {
		alert('Пароль правильно')
	} else {
		alert('Пароль неправильно')
	}

	if (email.length > 0 && password.length) {
		location.assign('/')
	}

	// localStorage.setItem('sign', JSON.stringify(signin))
}


