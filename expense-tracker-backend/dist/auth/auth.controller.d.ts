import { AuthService } from './auth.service';
import { CreateAuthDto, LoginDto } from './dto/create-auth.dto';
import { Auth } from './entities/auth.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createAuthDto: CreateAuthDto): Promise<Auth>;
    login(loginDto: LoginDto): Promise<Auth>;
    create(createAuthDto: CreateAuthDto): string;
}
