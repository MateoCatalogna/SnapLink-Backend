import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({timestamps: true})
export class ShortUrl {

    @Prop({required:true, unique:true})
    shortUrl: string;

    @Prop({required:true})
    originalUrl: string;

    @Prop({default:0})
    clicks: number;
}

export const ShortUrlSchema = SchemaFactory.createForClass(ShortUrl)
