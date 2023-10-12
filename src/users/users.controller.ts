import { Body, Controller, Get, Post, Delete, Put, Param, UseGuards } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user';
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";
import { AuthGuard } from "@nestjs/passport";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Post()
    @UseGuards(AuthGuard)
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get()
    @UseGuards(AuthGuard)
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id);
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(+id, updateUserDto);
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    remove(@Param('id') id: string) {
        return this.userService.remove(+id);
    }
}