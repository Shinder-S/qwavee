import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({ unique: true })
    @IsEmail()
    @ApiProperty({description: 'Enter email of user'})
    @IsNotEmpty()
    email: string

    @Column()
    @ApiProperty({description: 'Enter your full name'})
    @IsNotEmpty()
    name: string

    @Column()
    @ApiProperty({description: 'Enter a password (8 digits at least)'})
    @IsNotEmpty()
    password: string

}