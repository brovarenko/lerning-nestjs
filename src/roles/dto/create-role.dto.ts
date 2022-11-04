import { IsString, Length, IsEmail } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  @IsEmail({}, { message: 'Incorrect email' })
  readonly value: string;
  @IsString()
  @Length(4, 16, { message: 'Min length 4 symbols? max length 15 symbols' })
  readonly description: string;
}
