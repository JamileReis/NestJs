import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './Validacao/usuario.entity';

@Injectable()
export class UsuarioRepository {
  private usuarios: UsuarioEntity[] = [];


  async salvar(usuario: UsuarioEntity): Promise<void> {
    this.usuarios.push(usuario);
  }

  async listar(): Promise<UsuarioEntity[]> {
    return this.usuarios;
  }

  async existeComEmail(email: string): Promise<boolean> {
    const encontrado = this.usuarios.find(u => u.email === email);
    return encontrado !== undefined;
  }

  async atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
    const possivelUsuario = this.usuarios.find(
      usuarioSalvo => usuarioSalvo.id === id
    );

    if (!possivelUsuario) {
      throw new Error('Usuário não existe');
    }

    Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      possivelUsuario[chave] = valor;
    });

    return possivelUsuario;
  }
}
