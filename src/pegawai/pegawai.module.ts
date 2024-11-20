import { Module } from '@nestjs/common';
import { PegawaiService } from './pegawai.service';
import { PegawaiController } from './pegawai.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pegawai } from './entities/pegawai.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pegawai])],
  controllers: [PegawaiController],
  providers: [PegawaiService],
})
export class PegawaiModule {}
