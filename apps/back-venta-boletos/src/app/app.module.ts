import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CorreoModule } from './correo/correo.module';

@Module({
  imports: [CorreoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
