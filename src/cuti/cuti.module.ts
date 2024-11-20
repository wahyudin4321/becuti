import { Module } from '@nestjs/common';
import { CutiService } from './cuti.service';
import { CutiController } from './cuti.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cuti } from './entities/cuti.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cuti])],
  controllers: [CutiController],
  providers: [CutiService],
})
export class CutiModule {}
