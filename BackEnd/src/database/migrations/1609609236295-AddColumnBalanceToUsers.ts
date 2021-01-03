import {Column, MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnBalanceToUsers1609609236295 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users' , new TableColumn({
            name: "balance",
            type: "float",
            scale: 2,
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users' , 'balance');
    }

}
