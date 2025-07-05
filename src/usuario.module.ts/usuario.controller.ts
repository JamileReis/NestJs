import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  private usuarioRepository = new UsuarioRepository();

  @Post()
  async criaUsuario(@Body() dadosDoUsuario) {
    this.usuarioRepository.salvar(dadosDoUsuario);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return dadosDoUsuario;
  }

  @Get()
  async listUsuarios() {
    return this.usuarioRepository.listar();
  }
}
