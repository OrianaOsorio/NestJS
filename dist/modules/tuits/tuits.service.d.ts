import { Repository } from 'typeorm';
import { CreateTuitDto, PaginationQueryDto, UpdateTuitDto } from './dto';
import { Tuit } from './tuit.entity';
import { User } from '../users/entities';
export declare class TuitsService {
    private readonly tuitRepository;
    private readonly userRepository;
    constructor(tuitRepository: Repository<Tuit>, userRepository: Repository<User>);
    getTuits({ limit, offset }: PaginationQueryDto): Promise<Tuit[]>;
    getTuit(id: number): Promise<Tuit>;
    createTuit({ message, user }: CreateTuitDto): Promise<Tuit>;
    updateTuit(id: number, { message }: UpdateTuitDto): Promise<Tuit>;
    removeTuit(id: number): Promise<void>;
}
