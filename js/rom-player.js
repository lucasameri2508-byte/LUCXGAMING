async function launchROM(game,stage){
 if(!game.blob)throw Error('No se encontró el archivo ROM guardado.');
 const ext=game.fileName.split('.').pop().toLowerCase(),url=URL.createObjectURL(game.blob);
 stage.innerHTML='<div id="game"></div>';
 window.EJS_player='#game';
 window.EJS_core=game.core||lxGuessCore(game.fileName);
 window.EJS_gameUrl=url;
 window.EJS_gameName=game.name;
 window.EJS_pathtodata='https://cdn.emulatorjs.org/stable/data/';
 window.EJS_startOnLoaded=true;
 window.EJS_color='#a4f04b';
 const script=document.createElement('script');
 script.src='https://cdn.emulatorjs.org/stable/data/loader.js';
 document.body.appendChild(script);
 if(['cue','iso','bin'].includes(ext))return 'PlayStation 1 puede requerir una BIOS compatible. Para juegos BIN normalmente también necesitás el archivo CUE correspondiente.';
 return 'El emulador se carga desde EmulatorJS. Usá su menú para configurar controles y guardar/cargar partidas.';
}