import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({ nullable : false , unique : true })
    email: string;
    @Column({ nullable: false })
    password: string;
}