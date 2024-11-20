import { Injectable } from '@nestjs/common';
import { CreateCutiDto } from './dto/create-cuti.dto';
import { UpdateCutiDto } from './dto/update-cuti.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cuti } from './entities/cuti.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CutiService {
  constructor(@InjectRepository(Cuti) private cutiRepo: Repository<Cuti>) {}

  create(createCutiDto: CreateCutiDto) {
    const cuti = new Cuti();
    cuti.alasanCuti = createCutiDto.alasanCuti;
    cuti.tanggalMulaiCuti = createCutiDto.tanggalMulaiCuti
      ? new Date(createCutiDto.tanggalMulaiCuti)
      : null;
    cuti.tanggalSelesaiCuti = createCutiDto.tanggalSelesaiCuti
      ? new Date(createCutiDto.tanggalSelesaiCuti)
      : null;

    return this.cutiRepo.save(cuti);
  }

  findAll() {
    return this.cutiRepo.find();
  }

  findOne(id: number) {
    return this.cutiRepo.findOneBy({ id: id });
  }

  async update(id: number, updateCutiDto: UpdateCutiDto) {
    const cuti = new Cuti();
    cuti.alasanCuti = updateCutiDto.alasanCuti;
    cuti.tanggalMulaiCuti = updateCutiDto.tanggalMulaiCuti
      ? new Date(updateCutiDto.tanggalMulaiCuti)
      : null;
    cuti.tanggalSelesaiCuti = updateCutiDto.tanggalSelesaiCuti
      ? new Date(updateCutiDto.tanggalSelesaiCuti)
      : null;

    return await this.cutiRepo
      .update({ id: id }, cuti)
      .then(() => {
        return 'success update';
      })
      .catch((error) => {
        return error;
      });
  }

  async remove(id: number) {
    return await this.cutiRepo
      .delete({ id: id })
      .then(() => {
        return 'success delete';
      })
      .catch((error) => {
        return error;
      });
  }
}
