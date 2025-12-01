import express from "express";


const app = express();
const PORT = 4000;


// Запуск сервера
app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server listening on http://127.0.0.1:${PORT}`);
});


async function startScheduler() {
  try {

  } catch (error) {
    console.error('Ошибка при запуске планировщика:', {
      message: error.message,
      stack: error.stack
    });
    process.exit(1);
  }
}

startScheduler();
