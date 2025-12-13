import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config'; 
import { ShortUrlModule } from './short-url/short-url.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';


@Module({
  imports: [ ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10,  
    }])
    
    ,MongooseModule.forRootAsync({
    imports:[ConfigModule],
    useFactory: async(configService: ConfigService) => ({
      uri: configService.get<string>('MONGO_URI'),
    }),
    inject: [ConfigService],
  }), ShortUrlModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
