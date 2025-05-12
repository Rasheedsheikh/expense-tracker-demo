import { BadRequestException, ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto, LoginDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>,
  ) {}
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }
  async register(createAuthDto: CreateAuthDto): Promise<Auth> {
    // Check if email already exists
    const existingUser = await this.authRepository.findOne({
      where: { email: createAuthDto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email already registered');
    }

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(createAuthDto.password, 10);

    // Create and save the new user
    const newUser = this.authRepository.create({
      ...createAuthDto,
      password: hashedPassword,
    });

    return this.authRepository.save(newUser);
  }


  async login(loginDto: LoginDto): Promise<Auth> {
    const user = await this.authRepository.findOne({
      where: { email: loginDto.email },
    });

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isMatch = await bcrypt.compare(loginDto.password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    return user; // Optional: Add JWT token return here
  }
}


  
