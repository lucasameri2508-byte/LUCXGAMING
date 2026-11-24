/* LUCXGAMES local library — IndexedDB */
const LXDB = (() => {
  const DB_NAME='lucxgames-library', STORE='games', VERSION=1;
  function open(){return new Promise((resolve,reject)=>{const req=indexedDB.open(DB_NAME,VERSION);req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains(STORE)){const s=db.createObjectStore(STORE,{keyPath:'id'});s.createIndex('addedAt','addedAt')}};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)})}
  async function run(mode,fn){const db=await open();return new Promise((resolve,reject)=>{const tx=db.transaction(STORE,mode),store=tx.objectStore(STORE);let req;try{req=fn(store)}catch(e){reject(e);return}tx.oncomplete=()=>{db.close();resolve(req?.result)};tx.onerror=()=>{db.close();reject(tx.error)};tx.onabort=()=>reject(tx.error)})}
  return {
    all:()=>run('readonly',s=>s.getAll()),
    get:id=>run('readonly',s=>s.get(id)),
    put:item=>run('readwrite',s=>s.put(item)),
    remove:id=>run('readwrite',s=>s.delete(id)),
    update:async(id,patch)=>{const item=await this.get(id);if(item)await this.put({...item,...patch})}
  };
})();
function lxId(){return 'lx_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,8)}
function lxTypeLabel(type){return ({rom:'ROM PLAYER',sb3:'SCRATCH',html:'HTML PLAYER'})[type]||'JUEGO'}
function lxPlatform(file,type){if(type!=='rom')return type==='sb3'?'Scratch':'HTML';const e=file.split('.').pop().toLowerCase();return ({nes:'NES',sfc:'SNES',smc:'SNES',gb:'Game Boy',gbc:'Game Boy Color',gba:'Game Boy Advance',nds:'Nintendo DS',gen:'Sega Genesis',md:'Sega Genesis',bin:'PS1 / Genesis',cue:'PlayStation 1',iso:'PlayStation 1',z64:'Nintendo 64',n64:'Nintendo 64',v64:'Nintendo 64'})[e]||'ROM'}
function lxGuessCore(file){const e=file.split('.').pop().toLowerCase();return ({nes:'fceumm',sfc:'snes9x',smc:'snes9x',gb:'gambatte',gbc:'gambatte',gba:'mgba',nds:'melonds',gen:'genesis_plus_gx',md:'genesis_plus_gx',bin:'pcsx_rearmed',cue:'pcsx_rearmed',iso:'pcsx_rearmed',z64:'mupen64plus_next',n64:'mupen64plus_next',v64:'mupen64plus_next'})[e]||'fceumm'}
