import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './users/users.entity';

@Module({
  imports : [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'rosie.db.elephantsql.com',
    port: 5432,
    username: 'uiyweqpb',
    password: 'Qd418S7HbTWB9ElZDFV5bPNl-SCL1XOl',
    database: 'uiyweqpb',
    entities: [Account],
    keepConnectionAlive: true,
    synchronize: true,
    
  }),
  UsersModule,
],

})
export class AppModule {}
