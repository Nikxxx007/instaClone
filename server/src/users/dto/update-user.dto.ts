import { IsString, IsEmail, IsBoolean, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional() // Поле необязательное
  username?: string;

  @IsEmail()
  @IsOptional() // Поле необязательное
  email?: string;

  @IsString()
  @IsOptional() // Поле необязательное
  password?: string;

  @IsString()
  @IsOptional() // Поле необязательное
  bio?: string;

  @IsString()
  @IsOptional() // Поле необязательное
  avatarUrl?: string;

  @IsBoolean()
  @IsOptional() // Поле необязательное
  is_active?: boolean;
}
