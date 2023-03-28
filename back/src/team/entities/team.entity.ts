import { CollaboratorEntity } from 'src/collaborator/entities/collaborator.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'time' })
export class TeamEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'nome', nullable: false })
  nome: string;

  @ManyToOne(() => CollaboratorEntity, (gestor) => gestor.matricula, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'gestor', referencedColumnName: 'matricula' })
  gestor: CollaboratorEntity;
}
