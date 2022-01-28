"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseProvider = void 0;
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
const fs_1 = require("fs");
const enum_1 = require("../common/enum");
async function createOrmConfigFile(dbConfig) {
    const path = (0, path_1.join)(__dirname, '../../');
    (0, fs_1.writeFileSync)(path + 'ormconfig.json', JSON.stringify(dbConfig, null, 2));
}
exports.DatabaseProvider = typeorm_1.TypeOrmModule.forRootAsync({
    inject: [config_1.ConfigService],
    async useFactory(config) {
        const isDevelopmentEnv = config.get('NODE_ENV') !== enum_1.Environment.Production;
        const dbConfig = {
            type: 'postgres',
            host: config.get('DB_HOST'),
            port: +config.get('DB_PORT'),
            username: config.get('DB_USER'),
            password: config.get('DB_PASSWORD'),
            database: config.get('DB_NAME'),
            autoLoadEntities: true,
            synchronize: isDevelopmentEnv,
            migrations: ['dist/database/migrations/*.js'],
            entities: ['dist/**/*.entity.js'],
            cli: {
                migrationsDir: 'src/database/migrations',
            },
            logging: 'all',
        };
        if (isDevelopmentEnv) {
            createOrmConfigFile(dbConfig);
        }
        return dbConfig;
    },
});
//# sourceMappingURL=database.provider.js.map