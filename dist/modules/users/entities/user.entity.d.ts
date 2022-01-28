import { BaseEntity } from 'typeorm';
import { Tuit } from 'src/modules/tuits/tuit.entity';
export declare class User extends BaseEntity {
    id: number;
    name: string;
    email: string;
    username: string;
    password: string;
    private tempPassword;
    tuits: Tuit[];
    followers: number;
    following: number;
    tokens: string[];
    picture: string;
    background: string;
    location: string;
    birthdate: Date;
    bio: string;
    website: string;
    isVerified: boolean;
    resetPasswordToken: string;
    resetPasswordExpires: Date;
    createdAt: Date;
    updatedAt: Date;
    private loadTempPassword;
    hashPassword(): Promise<void>;
    hashPasswordOnUpdate(): Promise<void>;
}
