import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pegawai {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  namaDepan: string;

  @Column()
  namaBelakang: string;

  @Column()
  email: string;

  @Column()
  noHp: string;

  @Column()
  alamat: string;

  @Column()
  jenisKelamin: string;
}
