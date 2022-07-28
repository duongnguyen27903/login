import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import md5 from "md5"
@Controller('users')
export class UsersController {
    constructor(public usersService: UsersService) { }
    @Post("signup")
    async login(@Body() body) {
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

    

    
    
}
