import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }
    @Post("signup")
    async signup(@Body() body) {
    const newUser = { ...body}
        try {
            await this.usersService.createUsers(newUser)
            return { message: "create user success" }
        }
        catch (e) {
            console.log(e);
            throw new BadRequestException()
        }
    }

    @Post("signin")
    async signin( @Body() body ){
        const userAccount = {...body};
        try{
        return this.usersService.checkUsers(userAccount);
        }
        catch(e){
            console.log(e);
            throw new BadRequestException()
        }
    }

    
}
