function launchSB3(game,stage){
 if(!game.blob)throw Error('No se encontró el archivo SB3.');
 stage.innerHTML='';
 const panel=document.createElement('div');panel.className='sb3-local-panel';
 panel.innerHTML='<div style="max-width:560px;padding:30px;text-align:center;color:#eaf0f7;font-family:Arial,sans-serif"><div style="font-size:42px;color:#a4f04b">✳</div><h2 style="font-size:22px">Proyecto Scratch importado</h2><p style="color:#aab5c5;font-size:13px;line-height:1.7">El archivo .sb3 quedó guardado en tu biblioteca. Para reproducirlo dentro de LUCXGAMES con TurboWarp, necesitás una URL pública del proyecto: el reproductor remoto no puede leer directamente un archivo local privado del navegador.</p><a href="https://turbowarp.org/" target="_blank" rel="noopener" style="display:inline-block;background:#a4f04b;color:#111;padding:11px 16px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:12px">Abrir TurboWarp</a><p style="color:#8491a4;font-size:11px">Podés cargar el .sb3 desde tu dispositivo en TurboWarp. La integración de reproducción local directa queda pendiente para una siguiente iteración.</p></div>';
 stage.appendChild(panel);
 return 'Scratch .sb3 se importa y conserva localmente, pero la reproducción directa local todavía no está conectada. TurboWarp permite abrir el archivo manualmente desde su web.';
}