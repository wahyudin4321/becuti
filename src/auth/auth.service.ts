import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UpdateMeDto } from './dto/update-me.dto';
import { LoginDto } from './dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ICurrentUser } from './strategies/type/user.type';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const userData = await this.userRepo.findOneBy({ email: loginDto.email });

    if (!userData) {
      throw new NotFoundException('User not found!');
    }

    if (!bcrypt.compareSync(loginDto.password, userData.password)) {
      throw new UnauthorizedException();
    }

    const atToken = await this.jwtService.signAsync(
      { sub: userData.id, email: userData.email },
      { secret: '123wertd!#', expiresIn: '24h' },
    );

    return { access_token: atToken };
  }

  me(user: ICurrentUser) {
    return this.userRepo.findOneBy({ id: user.id });
  }

  async updateMe(users: ICurrentUser, updateMeDto: UpdateMeDto) {
    const password = bcrypt.hashSync(updateMeDto.password, 10);

    const user = new User();
    user.namaDepan = updateMeDto.namaDepan;
    user.namaBelakang = updateMeDto.namaBelakang;
    user.email = updateMeDto.email;
    user.tanggalLahir = updateMeDto.tanggalLahir
      ? new Date(updateMeDto.tanggalLahir)
      : null;
    user.jenisKelamin = updateMeDto.jenisKelamin;
    user.password = password;

    return await this.userRepo
      .update({ id: users.id }, user)
      .then(() => {
        return 'success update';
      })
      .catch((error) => {
        return error;
      });
  }
}
