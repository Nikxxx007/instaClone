import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // Инициализация ConfigModule
    ConfigModule.forRoot({
      isGlobal: true, // Делаем модуль глобальным (не нужно импортировать в других модулях)
    }),

    // Настройка TypeOrmModule
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        autoLoadEntities: true, // Автоматически загружает сущности
        synchronize: true, // Автоматически синхронизирует структуру БД (в продакшене отключить!)
      }),
    }),
  ],
})

// @Module({
//   imports: [AuthModule, UsersModule, DatabaseModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
export class AppModule {}
