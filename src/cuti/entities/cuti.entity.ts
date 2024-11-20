import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cuti {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  alasanCuti: string;

  @Column()
  tanggalMulaiCuti: Date;

  @Column()
  tanggalSelesaiCuti: Date;
}
