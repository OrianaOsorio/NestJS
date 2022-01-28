import { Tuit } from './tuit.entity';
import { TuitsService } from './tuits.service';
export declare class TuitsController {
    private readonly tuitService;
    constructor(tuitService: TuitsService);
    getTuits(filterQuery: any): Tuit[];
    getTuit(id: string): Tuit;
    createTuit(message: string): void;
    updateTuit(id: string, tuit: any): Tuit;
    removeTuit(id: string): void;
}
