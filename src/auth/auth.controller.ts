import { Controller, Get, Post, Body, Patch, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { UpdateMeDto } from './dto/update-me.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtGuard } from './guards/jwt.guards';
import { User } from './decorator/user.decorator';
import { ICurrentUser } from './strategies/type/user.type';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get('me')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  me(@User() user: ICurrentUser) {
    return this.authService.me(user);
  }

  @Patch('updateMe')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  updateMe(@User() users: ICurrentUser, @Body() updateMeDto: UpdateMeDto) {
    return this.authService.updateMe(users, updateMeDto);
  }
}
