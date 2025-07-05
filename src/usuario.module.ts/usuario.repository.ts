export class UsuarioRepository {
  private usuarios = [];
   async salvar(usuario) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    this.usuarios.push(usuario);
  }

  async listar(){
     return  this.usuarios;
  }
}
