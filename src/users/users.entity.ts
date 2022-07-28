import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({ unique: true })
    email: string;
    @Column({ nullable: true })
    password: string;
}