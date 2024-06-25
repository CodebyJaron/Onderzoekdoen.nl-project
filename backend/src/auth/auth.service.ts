import { sign } from 'jsonwebtoken';
import { hash, compare } from 'bcryptjs';
import { jwtConstants } from 'src/constants';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findByUsername(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async hashPassword(
    password: string,
    saltRounds: number = 10,
  ): Promise<string> {
    return hash(password, saltRounds);
  }

  async comparePasswords(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return compare(password, hashedPassword);
  }

  generateToken(userId: number, email: string): string {
    const payload = { sub: userId, email };
    const secret = jwtConstants.secret;
    const options = { expiresIn: '1h' };

    return sign(payload, secret, options);
  }
}
