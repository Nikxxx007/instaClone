import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Подключаем глобальную валидацию
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Удаляет лишние поля, не описанные в DTO
      forbidNonWhitelisted: true, // Выбрасывает ошибку, если есть лишние поля
      transform: true, // Автоматически преобразует типы данных (например, строку в число)
    }),
  );

  // Включаем CORS
  app.enableCors({
    origin: 'http://localhost:3001', // Разрешаем запросы с фронта
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Если используешь cookies или авторизацию
  });

  await app.listen(3000);
}
bootstrap();
