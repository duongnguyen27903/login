import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './users.entity';
import { DataSource } from 'typeorm';

@Injectable()

export class UsersService{
    constructor(
        @InjectRepository(Account) private accountRepository : Repository<Account>
    ){}
    
    async createUsers(newAccount: {email: string, password: string}){
        this.accountRepository.save(newAccount)
    }
}