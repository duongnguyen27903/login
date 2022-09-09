import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './users.entity';

@Injectable()

export class UsersService{
    constructor(
        @InjectRepository(Account) private accountRepository : Repository<Account>
    ){}
    
    async createUsers(newAccount: {email: string, password: string}){
        this.accountRepository.save(newAccount)

    }

    async checkUsers( check : { email : string , password : string } )
    {

        const user = await this.accountRepository.findOne({
            where : {
                email : check.email,
            }
        })
        if( !!user ){
            if( check.password == user.password ){
                return {message: "login success"}
            }else{
                throw new UnauthorizedException("Password incorrect")
            }
        }else 
        throw new UnauthorizedException("Tai khoan khong ton tai ")
    }
}