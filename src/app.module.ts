import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RouterModule } from '@nestjs/core';
import { TypeModule } from './models/type/types.module'
require('dotenv').config();

@Module({
  imports: [
  TypeModule,
  MongooseModule.forRoot(process.env.DBSTRING)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
