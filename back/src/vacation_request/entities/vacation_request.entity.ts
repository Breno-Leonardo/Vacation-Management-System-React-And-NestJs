import { CollaboratorEntity } from 'src/collaborator/entities/collaborator.entity';
import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'solicitacao_ferias' })
export class VacationRequestEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @CreateDateColumn({
    name: 'data_da_solicitacao',
    nullable: false,
    type: 'date',
  })
  dataSolicitacao: Date;

  @CreateDateColumn({
    name: 'data_inicio',
    nullable: false,
    type: 'date',
  })
  dataInicio: Date;

  @CreateDateColumn({
    name: 'data_termino',
    nullable: false,
    type: 'date',
  })
  dataTermino: Date;

  @Column({ name: 'mensagem_colaborador', nullable: true })
  mensagemColaborador: string;

  @Column({ name: 'mensagem_gestor', nullable: true })
  mensagemGestor: string;

  @Column({ name: 'status_solicitacao', nullable: false })
  statusSolicitacao: string;

  @ManyToOne(() => CollaboratorEntity, (colaborador) => colaborador.matricula, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'colaborador', referencedColumnName: 'matricula' })
  colaborador: CollaboratorEntity;
}
