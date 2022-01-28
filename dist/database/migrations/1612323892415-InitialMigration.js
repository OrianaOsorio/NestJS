"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialMigration1612323892415 = void 0;
class InitialMigration1612323892415 {
    constructor() {
        this.name = 'InitialMigration1612323892415';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "example_deleteme" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "example_deleteme"`);
    }
}
exports.InitialMigration1612323892415 = InitialMigration1612323892415;
//# sourceMappingURL=1612323892415-InitialMigration.js.map