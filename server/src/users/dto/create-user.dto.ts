import { IsString, IsEmail, IsBoolean, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional() // Поле необязательное
  bio?: string;

  @IsString()
  @IsOptional() // Поле необязательное
  avatarUrl?: string;

  @IsBoolean()
  @IsOptional() // Поле необязательное, по умолчанию true
  is_active?: boolean;
}
