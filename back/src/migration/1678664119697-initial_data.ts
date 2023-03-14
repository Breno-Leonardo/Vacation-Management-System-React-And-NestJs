import { MigrationInterface, QueryRunner } from 'typeorm';

//Uma query inicial para alimentar com os dados do gestor que não tem gestor e criar o primeiro time que seria o time de gestores liderado por esse gestor

export class initialData1678664119697 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        INSERT INTO projetoqq.colaborador
        (matricula, nome, cpf, senha, cargo, email, gmail, data_admissao, saldo_dias_ferias, modelo_contratacao, fim_aquisitivo)
        VALUES('0', 'Gestor sem gestor', '11111111111', '$2b$10$ct1gI7WihgL9TRe0RF0j5eCf0GnKaGiR.mvI0/oXdTBxnL9nM3I9i', 'Gestor Master', 'gestorMaster@verdecard.com.br', 'gestorMaster@gmail.com', '1980-01-01', 0, 'CLT', '2024-01-01');

        INSERT INTO projetoqq."time"
        (nome, gestor)
        VALUES('Time De Gestores', '0');
        
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(``);
  }
}
