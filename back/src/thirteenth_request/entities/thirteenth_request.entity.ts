import { CollaboratorEntity } from 'src/collaborator/entities/collaborator.entity';
import {
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'solicitacao_decimo_terceiro' })
export class ThirteenthRequestEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @CreateDateColumn({
    name: 'data_da_solicitacao',
    nullable: false,
    type: 'date',
  })
  dataSolicitacao: Date;

  @ManyToOne(() => CollaboratorEntity, (colaborador) => colaborador.matricula, {
    nullable: false,
  })
  @JoinColumn({ name: 'colaborador', referencedColumnName: 'matricula' })
  colaborador: CollaboratorEntity;
}
