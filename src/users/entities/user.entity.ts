import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  namaDepan: string;

  @Column()
  namaBelakang: string;

  @Column()
  email: string;

  @Column()
  tanggalLahir: Date;

  @Column()
  jenisKelamin: string;

  @Column()
  password: string;
}
