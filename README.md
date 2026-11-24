# LUCXGAMES — Universal Game Platform

**PLAY WITHOUT LIMITS.** ROM · SCRATCH · HTML

Interfaz estilo gaming/Steam para organizar y ejecutar tus propios juegos desde el navegador.

## Empezar rápido

1. Descargá y extraé `LUCXGAMES.zip`.
2. Creá un repositorio nuevo en GitHub llamado `LUCXGAMES`.
3. Subí **el contenido** de esta carpeta (no la carpeta contenedora duplicada) a la raíz del repositorio.
4. En GitHub abrí **Settings → Pages**.
5. En **Build and deployment**, elegí **Deploy from a branch**.
6. Seleccioná la rama `main`, carpeta `/(root)` y guardá.
7. Esperá a que GitHub Pages publique la web. La dirección será `https://TU-USUARIO.github.io/LUCXGAMES/`.

También podés probarlo localmente con un servidor estático (por ejemplo, la extensión Live Server de VS Code). Para IndexedDB y algunas funciones, es preferible `localhost` o HTTPS en vez de abrir el HTML con doble clic.

## Importar juegos

Desde **Añadir juegos**:
- **ROM:** NES, SNES, Game Boy, Game Boy Color, GBA, Nintendo DS, Sega Genesis, PlayStation 1 y Nintendo 64. Se aceptan extensiones habituales.
- **Scratch:** proyectos `.sb3`, reproducidos mediante TurboWarp.
- **HTML:** un `.zip` con `index.html` y todos sus recursos. También se acepta un HTML individual sin recursos asociados.

Los juegos se guardan en IndexedDB del navegador. **No se suben a GitHub ni a un servidor.** Cada navegador/dispositivo mantiene su propia biblioteca. Si borrás los datos del sitio, podés perder la biblioteca; conservá tus archivos originales y copias de seguridad.

## Motores

- ROM: [EmulatorJS](https://emulatorjs.org/) mediante CDN.
- Scratch: importación y almacenamiento local de `.sb3`; reproducción directa local pendiente. Podés abrir el archivo en [TurboWarp](https://turbowarp.org/) manualmente.
- HTML: iframe aislado (`sandbox`) y recursos empaquetados.

Los motores se descargan desde servicios externos, por lo que hace falta conexión a internet al iniciar esos reproductores. En esta entrega, Scratch conserva el archivo local pero requiere abrirlo manualmente en TurboWarp; la reproducción embebida directa todavía no está implementada. Las versiones/CDN de terceros pueden cambiar.

## Compatibilidad y notas

| Sistema | Core configurado |
|---|---|
| NES | FCEUmm |
| SNES | Snes9x |
| Game Boy / Color | Gambatte |
| GBA | mGBA |
| Nintendo DS | melonDS |
| Sega Genesis | Genesis Plus GX |
| PlayStation 1 | PCSX ReARMed |
| Nintendo 64 | Mupen64Plus Next |

La selección de core se pasa a EmulatorJS; la disponibilidad final depende de la versión del motor. PS1 puede necesitar BIOS compatible. Nintendo DS y algunos juegos de PS1/N64 pueden requerir archivos de firmware/BIOS, ajustes específicos o más memoria. No se incluyen BIOS ni ROMs.

## Guardados y controles

- La biblioteca, favoritos y datos de actividad se guardan localmente en IndexedDB.
- Los guardados de ROM dependen de EmulatorJS y del core utilizado; probá guardar/cargar desde el menú del emulador.
- Los juegos Scratch y HTML conservan sus mecanismos propios de guardado.
- El teclado y los mandos compatibles dependen del motor y del juego. EmulatorJS ofrece configuración de controles en su menú.
- Pantalla completa desde el botón del reproductor.

## Limitaciones de esta primera versión

- No sincroniza la biblioteca entre dispositivos.
- No descarga ni distribuye juegos, ROMs o BIOS.
- La importación HTML ZIP enlaza recursos referenciados desde el HTML principal. Juegos complejos con rutas dinámicas, módulos, workers o referencias CSS profundas pueden necesitar ajustes.
- La ejecución de ROM/HTML depende de conexión para cargar los reproductores CDN. Scratch se importa localmente, pero su reproducción embebida directa está pendiente.
- El guardado de estados no está unificado en un formato común.

## Estructura

```text
LUCXGAMES/
├── index.html
├── juegos.html
├── biblioteca.html
├── reproductor.html
├── css/
├── js/
├── assets/
├── games/
└── README.md
```

## Derechos de uso

Importá únicamente juegos, ROMs, proyectos y archivos que hayas creado, que sean de libre distribución o que tengas derecho a utilizar. No se incluyen contenidos protegidos ni firmware propietario.

---
**LUCXGAMES — Tu biblioteca. Tus juegos. Tu plataforma.**
