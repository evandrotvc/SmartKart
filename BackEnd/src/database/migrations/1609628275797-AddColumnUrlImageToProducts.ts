import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnUrlImageToProducts1609628275797 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('products' , new TableColumn({
            name: "url_image",
            type: "varchar",
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('products' , 'url_image');
    }

}
