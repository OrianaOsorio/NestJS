import { User } from 'src/modules/users/entities';
export declare class CreateTuitDto {
    readonly message: string;
    readonly user: Partial<User>;
}
