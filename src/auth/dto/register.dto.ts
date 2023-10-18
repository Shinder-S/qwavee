import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class RegisterDto {
    @MinLength(1)
    @ApiProperty({ description : 'Insert a new name' })
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({ description : 'Insert an email' })
    email: string;

    @IsString()
    @MinLength(8)
    @ApiProperty({ description : 'Enter a new password' })
    @Transform(({ value }) => value.trim())
    password: string;
}