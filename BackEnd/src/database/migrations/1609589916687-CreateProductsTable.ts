import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProductsTable1609589916687 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "products",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "name",
                        type: "varchar",
                        
                    },

                    {
                        name: "price",
                        type: "float",                        
                    },

                    {
                        name: "created_at",
                        type: "timestamp", //adiciona fuso horário na data do horário
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp", //adiciona fuso horário na data do horário
                        default: "now()",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
    }

}
