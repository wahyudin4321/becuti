import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  create(createUserDto: CreateUserDto) {
    const password = bcrypt.hashSync(createUserDto.password, 10);

    const user = new User();
    user.namaDepan = createUserDto.namaDepan;
    user.namaBelakang = createUserDto.namaBelakang;
    user.email = createUserDto.email;
    user.tanggalLahir = createUserDto.tanggalLahir
      ? new Date(createUserDto.tanggalLahir)
      : null;
    user.jenisKelamin = createUserDto.jenisKelamin;
    user.password = password;

    return this.userRepo.save(user);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOneBy({ id: id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const password = bcrypt.hashSync(updateUserDto.password, 10);

    const user = new User();
    user.namaDepan = updateUserDto.namaDepan;
    user.namaBelakang = updateUserDto.namaBelakang;
    user.email = updateUserDto.email;
    user.tanggalLahir = updateUserDto.tanggalLahir
      ? new Date(updateUserDto.tanggalLahir)
      : null;
    user.jenisKelamin = updateUserDto.jenisKelamin;
    user.password = password;

    return await this.userRepo
      .update({ id: id }, user)
      .then(() => {
        return 'success update';
      })
      .catch((error) => {
        return error;
      });
  }

  async remove(id: number) {
    return await this.userRepo
      .delete({ id: id })
      .then(() => {
        return 'success delete';
      })
      .catch((error) => {
        return error;
      });
  }
}
