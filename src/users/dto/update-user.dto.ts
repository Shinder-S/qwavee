import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user';
import { IsNotEmpty } from 'class-validator';
export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    password: string;
}