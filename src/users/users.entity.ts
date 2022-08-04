import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({ nullable : true, unique : true })
    email: string;
    @Column({ nullable: true })
    password: string;
}