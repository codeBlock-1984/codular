import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/* eslint-disable indent */
/* eslint-disable @typescript-eslint/indent */
@Entity()
/**
 * Class representing a user
 */
export class User {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  age!: number;

}
