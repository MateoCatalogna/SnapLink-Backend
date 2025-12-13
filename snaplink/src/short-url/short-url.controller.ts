import { Controller, Get, Post, Body, Patch, Param, Delete, Redirect, NotFoundException } from '@nestjs/common';
import { ShortUrlService } from './short-url.service';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { UpdateShortUrlDto } from './dto/update-short-url.dto';

@Controller('short-url')
export class ShortUrlController {
  constructor(private readonly shortUrlService: ShortUrlService) {}

  @Post()
  async create(@Body() createShortUrlDto: CreateShortUrlDto) {
    const result = await this.shortUrlService.create(createShortUrlDto);

    return { 
      shortUrl: result.shortUrl
    };
  }

  @Get()
  findAll() {
    return this.shortUrlService.findAll();
  }

  @Get(':code')
  @Redirect()
  async redirect(@Param('code') code: string) {
    const originalUrl = await this.shortUrlService.findUrl(code);

    if (!originalUrl) {
      throw new NotFoundException('El enlace no existe o ha caducado');
    }

    return { url: originalUrl, statusCode: 302 };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShortUrlDto: UpdateShortUrlDto) {
    return this.shortUrlService.update(+id, updateShortUrlDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shortUrlService.remove(+id);
  }
}
