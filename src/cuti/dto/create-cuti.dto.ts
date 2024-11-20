import { ApiProperty } from '@nestjs/swagger';

export class CreateCutiDto {
  @ApiProperty()
  alasanCuti: string;

  @ApiProperty()
  tanggalMulaiCuti: string;

  @ApiProperty()
  tanggalSelesaiCuti: string;
}
