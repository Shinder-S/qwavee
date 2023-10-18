import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt/dist';
import { LoginDto } from './dto/login-auth';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    async login({ email, password }: LoginDto) {
        const user = await this.userService.findByEmailWithPassword(email);

        if(!user) {
            throw new UnauthorizedException('Invalid user');
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if(!checkPassword) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload = { email: user.email };

        const token = await this.jwtService.signAsync(payload)

        return {
            token,
            email,
        };
    }

    async register({ name, email, password }: RegisterDto) {
        const user = await this.userService.findByEmailWithPassword(email);

        if(user) {
            throw new Error("User already exists");
        }

        await this.userService.create({
            name,
            email,
            password: await bcrypt.hash(password, 10),
        });

        return {
            name,
            email,
        };
    }
}
