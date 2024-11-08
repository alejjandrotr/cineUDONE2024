import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrecioModule } from './precio/precio.module';

@Module({
  imports: [PrecioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
