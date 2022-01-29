import { Module } from '@nestjs/common';
import { CalculadoraModule } from './calculadora/calculadora.module';

@Module({
  imports: [CalculadoraModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
