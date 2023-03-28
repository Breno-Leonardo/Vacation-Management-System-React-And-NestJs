import { TeamEntity } from 'src/team/entities/team.entity';
import {
  Entity,
  Column,
  ManyToOne,
  PrimaryColumn,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'colaborador' })
export class CollaboratorEntity {
  @PrimaryColumn({ name: 'matricula' })
  matricula: string;

  @Column({ name: 'nome', nullable: false })
  nome: string;

  @Column({ name: 'cpf', nullable: false })
  cpf: string;

  @Column({ name: 'senha', nullable: false })
  senha: string;

  @Column({ name: 'cargo', nullable: false })
  cargo: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'gmail', nullable: false })
  gmail: string;

  @CreateDateColumn({
    name: 'data_admissao',
    nullable: false,
    type: 'date',
  })
  dataAdmissao: Date;

  @Column({ name: 'saldo_dias_ferias', nullable: false })
  saldoDiasFerias: number;

  @Column({ name: 'modelo_contratacao', nullable: false })
  modeloContratacao: string;

  @CreateDateColumn({
    name: 'fim_aquisitivo',
    nullable: false,
    type: 'date',
  })
  fimAquisitivo: Date;

  @ManyToOne(() => TeamEntity, (team) => team.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'time', referencedColumnName: 'id' })
  time: TeamEntity;
}
