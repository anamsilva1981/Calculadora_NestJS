import { Injectable } from '@nestjs/common';
import { SomaDto } from './dto/soma.dto'
import {SubtracaoDto } from './dto/subtracao.dto'
import { DivisaoDto } from './dto/divisao.dto';
import { MultiplicacaoDto } from './dto/mult.dto';


@Injectable()
export class CalculadoraService {
    soma(entrada: SomaDto): number{
        const resultadoSoma = entrada.valor1 + entrada.valor2;
        return resultadoSoma;
    }

    subtracao(entrada: SubtracaoDto): number{
        const resultSubtracao = entrada.valor1 - entrada.valor2;
        return resultSubtracao;
    }

    divisao(entrada: DivisaoDto): number{
        const resultDivisao = entrada.valor1 / entrada.valor2;
        return resultDivisao;
    }

    multiplicacao(entrada: MultiplicacaoDto): number{
        const resultMultiplicacao = entrada.valor1 * entrada.valor2;
        return resultMultiplicacao;
    }
}
