import { CreateTuitDto, PaginationQueryDto, UpdateTuitDto } from './dto';
import { Tuit } from './tuit.entity';
import { TuitsService } from './tuits.service';
export declare class TuitsController {
    private readonly tuitService;
    constructor(tuitService: TuitsService);
    getTuits(pagination: PaginationQueryDto): Promise<Tuit[]>;
    getTuit(id: number): Promise<Tuit>;
    createTuit(message: CreateTuitDto): Promise<Tuit>;
    updateTuit(id: number, tuit: UpdateTuitDto): Promise<Tuit>;
    removeTuit(id: number): Promise<void>;
}
