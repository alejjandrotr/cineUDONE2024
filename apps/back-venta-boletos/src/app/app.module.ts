import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Paymentinfo } from './paymentinfo/paymentinfo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'teamverdemysql',
      database: 'cine',
      entities: [Paymentinfo],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Paymentinfo])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
