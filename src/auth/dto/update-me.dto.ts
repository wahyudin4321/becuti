import { ApiProperty } from "@nestjs/swagger";

export class UpdateMeDto {
    @ApiProperty()
    namaDepan: string;
  
    @ApiProperty()
    namaBelakang: string;
  
    @ApiProperty()
    email: string;
  
    @ApiProperty()
    tanggalLahir: string;
  
    @ApiProperty()
    jenisKelamin: string;
  
    @ApiProperty()
    password: string;
}
