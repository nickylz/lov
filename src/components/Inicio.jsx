import { useState } from 'react';

// Importamos todas las imágenes de la carpeta otros (c1 a c8)
import c1 from './otros/c1.png';
import c2 from './otros/c2.png';
import c3 from './otros/c3.png';
import c4 from './otros/c4.png';
import c5 from './otros/c5.png';
import c6 from './otros/c6.png';
import c7 from './otros/c7.png';
import c8 from './otros/c8.png';

export default function Inicio() {
  const frasesCarta = [
    "jJajajaja no se q decir, ehhh te quiero muchos gracias por estar conmigo todo este tiempo, me gusta mucho pasarla contigo hablando y no me arrepiento estar contigo.",
    "TE AMOOO TE AMOO ERES LA MEJOR, GRACIAS POR ESTAR UN EMS CONMIGO MI AMOR, ME VOY A CASAR CONTIGO HAY QUE TENER UNA LINDA CASITA Y ESTAR LOS 2 JUNTOS MUCHO TIEMPO MÁS, NO ME DEJES :3 UWU"
  ];

  const [indiceFrase, setIndiceFrase] = useState(0);

  const cambiarFrase = () => {
    setIndiceFrase((prev) => (prev + 1) % frasesCarta.length);
  };

  const imagenesCarrusel = [c1, c2, c3, c4, c5, c6, c7, c8];

  const [indiceImagen, setIndiceImagen] = useState(0);

  const siguienteImagen = () => {
    setIndiceImagen((prev) => (prev + 1) % imagenesCarrusel.length);
  };

  const imagenAnteriorIdx = (indiceImagen - 1 + imagenesCarrusel.length) % imagenesCarrusel.length;
  const imagenSiguienteIdx = (indiceImagen + 1) % imagenesCarrusel.length;

  // Función para volver arriba de todo suavemente
  const irArriba = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-start bg-[#fdfbf7] font-sans-clean overflow-y-auto">
      
      {/* 1. BANNER SUPERIOR MARRÓN OSCURITO */}
      <div className="w-full bg-[#4a3b32] py-14 px-4 shadow-md flex flex-col items-center text-center space-y-3 mb-8">
        <div className="space-y-2 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-serif-chic font-bold text-[#fdfbf7] tracking-wide flex items-center justify-center gap-3">
            Feliz 1 mes, amor 
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#e0a99c] fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </h1>
          <p className="text-xs md:text-sm text-[#d6ccc2] tracking-widest uppercase font-medium">
            Juntos desde el 27 de julio de 2026
          </p>
        </div>
      </div>

      {/* Contenedor central */}
      <div className="w-full max-w-5xl px-4 flex flex-col space-y-10 pb-12">
        
        {/* 2. SECCIÓN MITAD Y MITAD (Carta frases izquierda | Playlist grande derecha) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-stretch">
          
          {/* Mitad Izquierda: Carta de Frases */}
          <div 
            onClick={cambiarFrase}
            className="cursor-pointer rounded-2xl bg-[#f5f0eb] p-8 shadow-md border border-[#e6dec9] transition-all hover:bg-[#efeadd] active:scale-[0.99] flex flex-col justify-between text-left"
            title="Haz clic para leer otra cosita"
          >
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#a69585] block mb-4 font-semibold flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                ☆*: .｡. o(≧▽≦)o .｡.:*☆
              </span>
              <p className="text-base md:text-lg text-[#5c4a42] font-medium leading-relaxed italic">
                &ldquo;{frasesCarta[indiceFrase]}&rdquo;
              </p>
            </div>
            <span className="text-[11px] text-[#8c7a6b] text-right mt-8 tracking-wider font-medium">
              (Haz clic aquí)
            </span>
          </div>

          {/* Mitad Derecha: Playlist de Spotify GRANDE */}
          <div className="w-full rounded-2xl overflow-hidden shadow-md border border-[#e6dec9] bg-[#f5f0eb] p-2 flex items-center justify-center">
            <iframe 
              data-testid="embed-iframe" 
              style={{ borderRadius: '12px' }} 
              src="https://open.spotify.com/embed/playlist/2N1iiCuN0Ml8rgoxnhQuHE?utm_source=generator&si=ca317335509546d0" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            />
          </div>

        </div>

        {/* 3. SECCIÓN INFERIOR: CARRUSEL A LA IZQUIERDA Y TEXTO FIJO A LA DERECHA */}
        <div className="w-full bg-[#f5f0eb]/60 rounded-3xl p-6 md:p-10 border border-[#e6dec9] shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Columna Izquierda: El Carrusel */}
          <div className="w-full flex flex-col items-center space-y-4">
            <div 
              onClick={siguienteImagen}
              className="relative w-full max-w-[280px] md:max-w-xs aspect-square cursor-pointer flex items-center justify-center select-none group"
              title="Haz clic para cambiar de foto"
            >
              {/* Foto de atrás izquierda */}
              <div className="absolute left-0 w-3/4 aspect-square rounded-2xl overflow-hidden shadow-md border border-[#e6dec9] opacity-40 scale-90 -translate-x-4 rotate-[-4deg] bg-[#f5f0eb]">
                <img 
                  src={imagenesCarrusel[imagenAnteriorIdx]} 
                  alt="Anterior" 
                  className="w-full h-full object-cover filter blur-[0.5px]"
                />
              </div>

              {/* Foto de atrás derecha */}
              <div className="absolute right-0 w-3/4 aspect-square rounded-2xl overflow-hidden shadow-md border border-[#e6dec9] opacity-40 scale-90 translate-x-4 rotate-[4deg] bg-[#f5f0eb]">
                <img 
                  src={imagenesCarrusel[imagenSiguienteIdx]} 
                  alt="Siguiente" 
                  className="w-full h-full object-cover filter blur-[0.5px]"
                />
              </div>

              {/* Foto Principal 1:1 */}
              <div className="relative z-10 w-4/5 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-[#e6dec9] bg-[#f5f0eb] transition-transform duration-300 group-hover:scale-[1.02]">
                <img 
                  src={imagenesCarrusel[indiceImagen]} 
                  alt="Momento principal" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-[#4a3b32]/80 text-[#fdfbf7] text-xs px-3 py-1.5 rounded-full font-medium shadow-sm backdrop-blur-sm">
                    Siguiente foto ➔
                  </span>
                </div>
              </div>
            </div>

            {/* Indicadores de puntos */}
            <div className="flex flex-wrap justify-center gap-1.5 pt-1 max-w-xs">
              {imagenesCarrusel.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIndiceImagen(idx);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    indiceImagen === idx ? 'w-5 bg-[#4a3b32]' : 'w-2 bg-[#4a3b32]/30'
                  }`}
                  title={`Ir a foto ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Columna Derecha: Subtítulo y Texto Único Fijo */}
          <div className="flex flex-col justify-center space-y-4 text-left px-2 md:px-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#a69585]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Fotitos que somos nosotros o me recordan a ti uwu ({indiceImagen + 1} de {imagenesCarrusel.length})
            </div>

            <h2 className="text-2xl md:text-3xl font-serif-chic font-semibold text-[#4a3b32]">
              Te amo mi amorcito
            </h2>

            <p className="text-sm md:text-base text-[#5c4a42] font-medium leading-relaxed italic">
              &ldquo; Sabes me siento feliz de estar contigo, te quiero mucho así que por eso te hice esta pequeña cartita para ti porque te lo mereces.  &rdquo;
            </p>

            <button
              onClick={siguienteImagen}
              className="mt-2 self-start bg-[#4a3b32] text-[#fdfbf7] text-xs font-medium px-4 py-2.5 rounded-xl shadow-sm hover:bg-[#5c4a42] transition-all active:scale-95"
            >
              Ver siguiente foto uwu ➔
            </button>
          </div>

        </div>

      </div>

      {/* 4. FOOTER FINAL */}
      <footer className="w-full bg-[#4a3b32] py-8 px-4 text-center flex flex-col items-center space-y-3 mt-auto border-t border-[#5c4a42]">
        <p className="text-sm md:text-base font-serif-chic font-medium text-[#fdfbf7] italic tracking-wide">
          &ldquo;Te amooo mucho, i lof youuu hay que casarnos muackk &rdquo; ❤️
        </p>
        
        {/* Botón para volver al inicio */}
        <button 
          onClick={irArriba}
          className="mt-2 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d6ccc2] hover:text-[#fdfbf7] bg-[#5c4a42] px-4 py-2 rounded-full transition-all active:scale-95 shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/>
          </svg>
          arribaaaa :333
        </button>
      </footer>

    </div>
  );
}