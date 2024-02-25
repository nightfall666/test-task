import { ApiProperty } from "@nestjs/swagger";
import {Model, Column, DataType, Table } from "sequelize-typescript";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table( {tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column( {type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'test@mail.ru', description: 'Почтовый адрес'})
    @Column( {type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'qwe123asd', description: 'Пароль'})
    @Column( {type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'test', description: 'Имя'})
    @Column( {type: DataType.STRING})
    name: string;
}