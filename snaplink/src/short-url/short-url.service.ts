import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { UpdateShortUrlDto } from './dto/update-short-url.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ShortUrl } from './entities/short-url.entity';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid';

@Injectable()
export class ShortUrlService {
  constructor(@InjectModel(ShortUrl.name) private shortUrlModel: Model<ShortUrl>) {}

  async create(createShortUrlDto: CreateShortUrlDto) {
    const code = nanoid(6);

    const newShortUrl = new this.shortUrlModel({
      originalUrl: createShortUrlDto.originalUrl,
      shortUrl: code,
    });

    return await newShortUrl.save()
  }

  findAll() {
    return `This action returns all shortUrl`;
  }

  async findUrl(code: string): Promise<string | null> {
    const link = await this.shortUrlModel.findOne({ shortUrl: code });
    if (!link){
      return null;
    }

    link.clicks++;
    await link.save();

    return link.originalUrl;
  }

  update(id: number, updateShortUrlDto: UpdateShortUrlDto) {
    return `This action updates a #${id} shortUrl`;
  }

  remove(id: number) {
    return `This action removes a #${id} shortUrl`;
  }
}
