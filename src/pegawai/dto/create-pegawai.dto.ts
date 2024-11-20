import { ApiProperty } from '@nestjs/swagger';

export class CreatePegawaiDto {
  @ApiProperty()
  namaDepan: string;

  @ApiProperty()
  namaBelakang: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  noHp: string;

  @ApiProperty()
  alamat: string;

  @ApiProperty()
  jenisKelamin: string;
}
