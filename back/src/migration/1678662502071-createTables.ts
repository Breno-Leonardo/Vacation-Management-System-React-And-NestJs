import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTables1678662502071 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    

CREATE TABLE projetoqq.colaborador (
	matricula varchar NOT NULL,
	nome varchar NOT NULL,
	cpf varchar NOT NULL,
	senha varchar NOT NULL,
	cargo varchar NOT NULL,
	email varchar NOT NULL,
	gmail varchar NOT NULL,
	data_admissao date NOT NULL DEFAULT now(),
	saldo_dias_ferias int4 NOT NULL,
	modelo_contratacao varchar NOT NULL,
	fim_aquisitivo date NOT NULL DEFAULT now(),
	"time" int4 NULL,
	CONSTRAINT "PK_10392206c948c4265e7a1f01533" PRIMARY KEY (matricula)
);


CREATE TABLE projetoqq."time" (
	id serial4 NOT NULL,
	nome varchar NOT NULL,
	gestor varchar NOT NULL,
	CONSTRAINT "PK_9ec81ea937e5d405c33a9f49251" PRIMARY KEY (id)
);

CREATE TABLE projetoqq.solicitacao_decimo_terceiro (
	id serial4 NOT NULL,
	data_da_solicitacao date NOT NULL DEFAULT now(),
	colaborador varchar NOT NULL,
	CONSTRAINT "PK_028a68b173434589c65b51786f1" PRIMARY KEY (id)
);

CREATE TABLE projetoqq.solicitacao_ferias (
	id serial4 NOT NULL,
	data_da_solicitacao date NOT NULL DEFAULT now(),
	data_inicio date NOT NULL DEFAULT now(),
	data_termino date NOT NULL DEFAULT now(),
	mensagem_colaborador varchar NULL,
	mensagem_gestor varchar NULL,
	status_solicitacao varchar NOT NULL,
	colaborador varchar NOT NULL,
	CONSTRAINT "PK_f7db6bc73a729f68872d6181e15" PRIMARY KEY (id)
);

ALTER TABLE projetoqq.colaborador ADD CONSTRAINT "FK_a04ebcbad1de3817f80efb86c08" FOREIGN KEY ("time") REFERENCES projetoqq."time"(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE projetoqq."time" ADD CONSTRAINT "FK_33e07074bd809488da50da246e9" FOREIGN KEY (gestor) REFERENCES projetoqq.colaborador(matricula) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE projetoqq.solicitacao_decimo_terceiro ADD CONSTRAINT "FK_d0f657b4027e542b92a7e14e684" FOREIGN KEY (colaborador) REFERENCES projetoqq.colaborador(matricula) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE projetoqq.solicitacao_ferias ADD CONSTRAINT "FK_80f31f5a67e554e19edf9672143" FOREIGN KEY (colaborador) REFERENCES projetoqq.colaborador(matricula) ON DELETE CASCADE ON UPDATE CASCADE;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    drop table projetoqq.solicitacao_ferias;
    drop table projetoqq.solicitacao_decimo_terceiro;
    drop table projetoqq.colaborador;
    drop table projetoqq.time;

    `);
  }
}
