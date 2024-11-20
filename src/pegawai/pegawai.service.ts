import { Injectable } from '@nestjs/common';
import { CreatePegawaiDto } from './dto/create-pegawai.dto';
import { UpdatePegawaiDto } from './dto/update-pegawai.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pegawai } from './entities/pegawai.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PegawaiService {
  constructor(
    @InjectRepository(Pegawai) private pegawaiRepo: Repository<Pegawai>,
  ) {}

  create(createPegawaiDto: CreatePegawaiDto) {
    const pegawai = new Pegawai();
    pegawai.namaDepan = createPegawaiDto.namaDepan;
    pegawai.namaBelakang = createPegawaiDto.namaBelakang;
    pegawai.email = createPegawaiDto.email;
    pegawai.noHp = createPegawaiDto.noHp;
    pegawai.alamat = createPegawaiDto.alamat;
    pegawai.jenisKelamin = createPegawaiDto.jenisKelamin;

    return this.pegawaiRepo.save(pegawai);
  }

  findAll() {
    return this.pegawaiRepo.find();
  }

  findOne(id: number) {
    return this.pegawaiRepo.findOneBy({ id: id });
  }

  async update(id: number, updatePegawaiDto: UpdatePegawaiDto) {
    const pegawai = new Pegawai();
    pegawai.namaDepan = updatePegawaiDto.namaDepan;
    pegawai.namaBelakang = updatePegawaiDto.namaBelakang;
    pegawai.email = updatePegawaiDto.email;
    pegawai.noHp = updatePegawaiDto.noHp;
    pegawai.alamat = updatePegawaiDto.alamat;
    pegawai.jenisKelamin = updatePegawaiDto.jenisKelamin;

    return await this.pegawaiRepo
      .update({ id: id }, pegawai)
      .then(() => {
        return 'success update';
      })
      .catch((error) => {
        return error;
      });
  }

  async remove(id: number) {
    return await this.pegawaiRepo
      .delete({ id: id })
      .then(() => {
        return 'success delete';
      })
      .catch((error) => {
        return error;
      });
  }
}
