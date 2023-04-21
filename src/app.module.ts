import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from "@nestjs/config"
import { TypeOrmModule } from '@nestjs/typeorm';
import { csvModule } from './csv/csv.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    imports: [ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".local.env",
      // envFilePath: ".prod.env",
    })],
    useFactory: (configService: ConfigService) => ({
      type: "postgres",
      host: configService.get("DB_HOST"),
      port: configService.get("DB_PORT"),
      username: configService.get("DB_USERNAME"),
      password: configService.get("DB_PASSWORD"),
      database: configService.get("DB_DATABASE"),
      synchronize: configService.get("DB_SYNC"),
      entities: ["__dirname + '/**/*.entity{.ts,.js}"],
      logging: true
    }),
    inject: [ConfigService]
  }), csvModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
