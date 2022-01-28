"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TuitsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tuit_entity_1 = require("./tuit.entity");
const entities_1 = require("../users/entities");
let TuitsService = class TuitsService {
    constructor(tuitRepository, userRepository) {
        this.tuitRepository = tuitRepository;
        this.userRepository = userRepository;
    }
    async getTuits({ limit, offset }) {
        return await this.tuitRepository.find({
            relations: ['user'],
            skip: offset,
            take: limit,
        });
    }
    async getTuit(id) {
        const tuit = await this.tuitRepository.findOne(id, {
            relations: ['user'],
        });
        if (!tuit) {
            throw new common_1.NotFoundException('Resource not found');
        }
        return tuit;
    }
    async createTuit({ message, user }) {
        const tuit = this.tuitRepository.create({ message, user });
        return this.tuitRepository.save(tuit);
    }
    async updateTuit(id, { message }) {
        const tuit = await this.tuitRepository.preload({
            id,
            message,
        });
        if (!tuit) {
            throw new common_1.NotFoundException('Resource not found');
        }
        return tuit;
    }
    async removeTuit(id) {
        const tuit = await this.tuitRepository.findOne(id);
        if (!tuit) {
            throw new common_1.NotFoundException('Resource not found');
        }
        this.tuitRepository.remove(tuit);
    }
};
TuitsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tuit_entity_1.Tuit)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TuitsService);
exports.TuitsService = TuitsService;
//# sourceMappingURL=tuits.service.js.map