import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  // Paso 5: Lógica del Servicio
  validateGoogleUser(user: any) {
    // AQUÍ IRÍA LA LÓGICA DE BASE DE DATOS (Buscar o crear usuario)
    // Como lo omitimos, pasamos directamente a generar el token.

    const payload = { email: user.email, sub: user.googleId };
    const jwt = this.jwtService.sign(payload);

    return {
      ...user,
      jwt,
    };
  }
}
