import { IsEnum, MinLength } from "class-validator";

export class CreateRestDto {
    @MinLength(3)
    name: string;

    @IsEnum(['Coder','Developer','Engineer'],{message: 'Use correct job title'})
    job:  'Coder' | 'Developer' | 'Engineer';
}
