const express = require('express');
const app = express();

app.use(express.json());

// Обработчик для Callback API ВКонтакте
app.post('/callback', (req, res) => {
  console.log('Данные от ВК:', req.body);
  res.status(200).send('OK');
});

// Проверка работы сервера
app.get('/', (req, res) => {
  res.send('Сервер работает!');
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});