import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNotEmpty()
    @ApiProperty({ description: 'Edit email registered' })
    email: string;

    @IsNotEmpty()
    @ApiProperty({ description: 'Edit your name' })
    name: string;

    @IsNotEmpty()
    @ApiProperty({ description: 'Enter your password' })
    password: string;
}