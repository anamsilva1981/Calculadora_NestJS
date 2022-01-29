import { Controller, Body, Post } from '@nestjs/common';
import { CalculadoraService } from './calculadora.service';
import { SomaDto } from './dto/soma.dto';
import { SubtracaoDto } from './dto/subtracao.dto';
import { DivisaoDto } from './dto/divisao.dto';
import { MultiplicacaoDto } from './dto/mult.dto';

@Controller('calculadora')
export class CalculadoraController {
  constructor(private readonly calculadoraService: CalculadoraService) {}

  @Post('soma')
  soma(@Body() entrada: SomaDto): number {
    return this.calculadoraService.soma(entrada);
  }

  @Post('subtracao')
  subtracao(@Body() entrada: SubtracaoDto): number {
    return this.calculadoraService.subtracao(entrada);
  }

  @Post('divisao')
  divisao(@Body() entrada: DivisaoDto): number {
    return this.calculadoraService.divisao(entrada);
  }

  @Post('multiplicacao')
  multiplicacao(@Body() entrada: MultiplicacaoDto): number{
    return this.calculadoraService.multiplicacao(entrada);
  }

}
