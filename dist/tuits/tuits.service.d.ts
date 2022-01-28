import { Tuit } from './tuit.entity';
export declare class TuitsService {
    private tuits;
    getTuits(): Tuit[];
    getTuit(id: string): Tuit;
    createTuit(message: string): void;
    updateTuit(id: string, message: any): Tuit;
    removeTuit(id: string): void;
}
