import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
 
@Entity()
export class Rooms{
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    title: string;

    @Column()
    img: string;

    @Column()
    location: string;

    @Column()
    star: number;

    @Column()
    price: number;
 
    @Column()
    description: string;
 
    @Column({
        default: true
    })
    reservado: boolean;
 
    @CreateDateColumn()
    create_at: Date;
 
    @UpdateDateColumn()
    updated_at: Date;
}
