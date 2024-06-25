import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('/login')
  async login(
    @Body() body: { username: string; password: string },
    @Res() res: Response,
  ) {
    const { username, password } = body;
    const user = await this.userService.findByUsername(username);

    if (!user) {
      return res
        .status(401)
        .json({ message: 'Authentication failed. User not found.' });
    }

    const isMatch = await this.authService.comparePasswords(
      password,
      user.password,
    );

    if (isMatch) {
      const token = this.authService.generateToken(user.id, user.username);
      res.json({ token, username: user.username });
    } else {
      res
        .status(401)
        .json({ message: 'Authentication failed. Passwords do not match.' });
    }
  }
}
