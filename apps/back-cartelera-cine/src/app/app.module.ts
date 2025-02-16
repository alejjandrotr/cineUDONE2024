import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AggpeliModule } from './aggpeli/aggpeli.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', //para conectarse
      host:'localhost',
      port:3306,
      username:'root',
      password:'1234',
      database: 'cartelera',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    AggpeliModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
