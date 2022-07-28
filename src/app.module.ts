import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './users/users.entity';

@Module({
  imports : [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'rosie.db.elephantsql.com',
    port: 5432,
    username: 'pqbwmkbs',
    password: '8zk0r5UmWqWNfYExCvXK2AgCvM-xOWIO',
    database: 'pqbwmkbs',
    entities: [Account],
    synchronize: true,
    
  }),
  UsersModule
],

})
export class AppModule {}
