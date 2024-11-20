import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PegawaiService } from './pegawai.service';
import { CreatePegawaiDto } from './dto/create-pegawai.dto';
import { UpdatePegawaiDto } from './dto/update-pegawai.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../auth/guards/jwt.guards';

@ApiTags('Pegawai')
@Controller('pegawai')
@ApiBearerAuth()
@UseGuards(JwtGuard)
export class PegawaiController {
  constructor(private readonly pegawaiService: PegawaiService) {}

  @Post()
  create(@Body() createPegawaiDto: CreatePegawaiDto) {
    return this.pegawaiService.create(createPegawaiDto);
  }

  @Get()
  findAll() {
    return this.pegawaiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pegawaiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePegawaiDto: UpdatePegawaiDto) {
    return this.pegawaiService.update(+id, updatePegawaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pegawaiService.remove(+id);
  }
}
