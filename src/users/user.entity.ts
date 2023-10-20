import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({ description: 'Enter your email user' })
    email: string;

    @Column()
    @ApiProperty({ description: 'Enter your full name' })
    @IsNotEmpty()
    name: string;

    @Column()
    @ApiProperty({ description: 'Enter a password (8 digits at least)'})
    @IsNotEmpty()
    password: string;
}