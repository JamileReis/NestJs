
🚀 Proyecto NestJS
Este es un proyecto basado en el framework NestJS para Windows, una plataforma progresiva para construir aplicaciones del lado del servidor eficientes y escalables.

📋 Descripción del Proyecto
Este repositorio contiene una implementación básica de una API RESTful utilizando NestJS con TypeScript. El proyecto demuestra:

Arquitectura modular

Inyección de dependencias

Estructura organizada en controllers, services y modules

Configuración lista para desarrollo

💻 Tecnologías Principales
NestJS - Framework backend

TypeScript - Lenguaje principal

Node.js (v16+) - Entorno de ejecución

ESLint + Prettier - Estándares de código

🛠️ Estructura del Proyecto

src/
├── app.controller.ts    # Controller principal
├── app.module.ts       # Módulo raíz
├── app.service.ts      # Lógica de negocio
└── main.ts             # Punto de entrada
⚙️ Características Implementadas
Ruta GET / - Endpoint básico

Módulos organizados - Estructura escalable

Services inyectables - Patrón de diseño

Configuración de ambientes - Dev/Prod

📌 Recomendaciones para Windows
Ejecutar terminal como Administrador

Si hay problemas de permisos:

cmd
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
Para el watcher de archivos:

cmd
echo 65536 > \\.\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem\MaxUserPort
🌟 Casos de Uso
Perfecto para:

Aprender NestJS desde cero

Usar como plantilla base

Entender arquitectura backend moderna
