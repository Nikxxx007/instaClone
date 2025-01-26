import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController], // Контроллеры для обработки запросов
  providers: [UsersService], // Сервисы для бизнес-логики
  exports: [UsersService], // Экспортируем, если нужно использовать в других модулях
})
export class UsersModule {}
