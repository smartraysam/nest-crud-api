import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestModule } from './rest/rest.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [RestModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
