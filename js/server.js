const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Received form data: Name - ${name}, Email - ${email}, Message - ${message}`);

  // Здесь вы можете добавить код для сохранения данных формы в базе данных или выполнения других серверных действий

  res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
