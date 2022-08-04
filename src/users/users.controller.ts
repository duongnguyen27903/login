import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }
    @Post("signup")
    async signup(@Body() body) {
        // console.log(body);
    const newUser = { ...body/* password: md5(body.password)*/ }
        try {
            await this.usersService.createUsers(newUser)
            return { message: "create user success" }
        }
        catch (e) {
            console.log(e);
            throw new BadRequestException()
        }
    }

    @Post("login")
    async ( @Body() body ){
        const userAccount = {...body };
        return this.usersService.checkUsers(userAccount);
    }
    
}
