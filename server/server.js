const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const database = [
	{
		username: 'pdngl',
		email: 'pdngl@gmail.com',
		name: 'Christian Jaena',
		password: 'infotech',
	},
];
app.use(express.json());
app.use(cors());

app.post('/signin', (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(404).json('Wrong Credentials');
	}
	return database[0].email === email && database[0].password === password
		? res.json(database[0])
		: res.status(404).json('Error');
});

app.listen(PORT, () => {
	console.log(`Server running at port ${PORT}`);
});
