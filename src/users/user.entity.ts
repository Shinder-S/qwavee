import { IsEmail, IsNotEmpty } from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({ unique: true })
    @IsEmail()
    @IsNotEmpty()
    email: string

    @Column()
    @IsNotEmpty()
    name: string

    @Column()
    @IsNotEmpty()
    password: string

}