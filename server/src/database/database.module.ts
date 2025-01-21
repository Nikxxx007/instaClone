import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Тип базы данных
      host: 'localhost', // Хост базы данных
      port: 5432, // Порт подключения
      username: 'postgres', // Имя пользователя
      password: 'password', // Пароль
      database: 'my_database', // Название базы данных
      entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Пути к сущностям
      synchronize: true, // Синхронизация структуры базы данных (не рекомендуется в продакшне)
    }),
  ],
})
export class DatabaseModule {}
