import { CreateAuthDto, LoginDto } from './dto/create-auth.dto';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private readonly authRepository;
    constructor(authRepository: Repository<Auth>);
    create(createAuthDto: CreateAuthDto): string;
    register(createAuthDto: CreateAuthDto): Promise<Auth>;
    login(loginDto: LoginDto): Promise<Auth>;
}
