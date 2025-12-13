import { Module } from '@nestjs/common';
import { ShortUrlService } from './short-url.service';
import { ShortUrlController } from './short-url.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ShortUrl, ShortUrlSchema } from './entities/short-url.entity';

@Module({
  imports:[MongooseModule.forFeature([
      { name: ShortUrl.name, schema: ShortUrlSchema }
    ]),],
  controllers: [ShortUrlController],
  providers: [ShortUrlService],
})
export class ShortUrlModule {}
