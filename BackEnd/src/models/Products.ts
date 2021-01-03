import {Entity , PrimaryGeneratedColumn , Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('users')

class Product {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    url_image: string;
    
    @Column({type: "float8"})
    price: number;
    
    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
export default Product;