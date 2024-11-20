import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CutiModule } from './cuti/cuti.module';
import { User } from './users/entities/user.entity';
import { Cuti } from './cuti/entities/cuti.entity';
import { AuthModule } from './auth/auth.module';
import { Pegawai } from './pegawai/entities/pegawai.entity';
import { PegawaiModule } from './pegawai/pegawai.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'host.docker.internal',
      port: 3306,
      username: 'root',
      password: '12345',
      database: 'cuti',
      entities: [User, Pegawai, Cuti],
      synchronize: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    PegawaiModule,
    CutiModule,
    AuthModule,
  ],
})
export class AppModule {}
