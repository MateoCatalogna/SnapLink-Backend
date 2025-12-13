import { IsNotEmpty, IsUrl } from "class-validator";

export class CreateShortUrlDto {
    @IsNotEmpty({message: 'La url no puede estar vacía'})
    @IsUrl({}, {message:'Se debe enviar un direccion URL valida'})
    originalUrl: string;
}
