import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'test@mail.ru', description: 'Почта'})
    readonly email: string;
    @ApiProperty({example: 'qwe123asd', description: 'Пароль'})
    readonly password: string; 
}