document.getElementById('form').addEventListener('submit', function (event) {
	event.preventDefault()

	const formData = new FormData(this)
	const data = {
		username: formData.get('login'),
		password: formData.get('password'),
	}
	console.log(data)
	fetch('http://localhost:5000/auth/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then(res => res.json())
		.then(res => {
			if (res.token) {
				localStorage.setItem('flag', 1)
				window.location.href = '/'
			} else {
				alert('Registration failed: ' + res.message)
			}
		})
		.catch(error => {
			console.error('Error:', error)
		})
})
