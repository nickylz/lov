import { useState, useRef, useEffect } from 'react';
import audio1Src from './otros/1.mp3';
import audio2Src from './otros/2.mp3';

export default function BackgroundAudio() {
  const [activeTrack, setActiveTrack] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  const audio1Ref = useRef(null);
  const audio2Ref = useRef(null);

  // Configuramos volúmenes altos y nivelados (ajustamos el 2 un poco más alto si es necesario)
  useEffect(() => {
    if (audio1Ref.current) audio1Ref.current.volume = 0.5; // 90% de volumen
    if (audio2Ref.current) audio2Ref.current.volume = 1.0; // 100% de volumen para compensar si es bajo
  }, []);

  const handleAudio1Ended = () => {
    if (isPlaying) {
      setActiveTrack(2);
      if (audio2Ref.current) {
        audio2Ref.current.currentTime = 0;
        audio2Ref.current.play().catch(() => {});
      }
    }
  };

  const handleAudio2Ended = () => {
    if (isPlaying) {
      setActiveTrack(1);
      if (audio1Ref.current) {
        audio1Ref.current.currentTime = 0;
        audio1Ref.current.play().catch(() => {});
      }
    }
  };

  const handleAcceptMusic = () => {
    setShowPrompt(false);
    setIsPlaying(true);
    setActiveTrack(1);
    if (audio1Ref.current) {
      audio1Ref.current.currentTime = 0;
      audio1Ref.current.play().catch(() => {});
    }
  };

  const handleDeclineMusic = () => {
    setShowPrompt(false);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (activeTrack === 1 && audio1Ref.current) audio1Ref.current.pause();
      if (activeTrack === 2 && audio2Ref.current) audio2Ref.current.pause();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      if (activeTrack === 1 && audio1Ref.current) {
        audio1Ref.current.play().catch(() => {});
      } else if (activeTrack === 2 && audio2Ref.current) {
        audio2Ref.current.play().catch(() => {});
      }
    }
  };

  return (
    <>
      <audio
        ref={audio1Ref}
        src={audio1Src}
        onEnded={handleAudio1Ended}
        preload="auto"
      />
      <audio
        ref={audio2Ref}
        src={audio2Src}
        onEnded={handleAudio2Ended}
        preload="auto"
      />

      {showPrompt && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 rounded-2xl bg-[#f5f0eb] p-4 shadow-xl border border-[#e6dec9] animate-fade-in max-w-[220px] text-center font-sans-clean">
          <p className="text-xs font-medium text-[#4a3b32]">
            ¿Deseas música de fondo? 🎶
          </p>
          <div className="flex gap-2 w-full">
            <button
              onClick={handleAcceptMusic}
              className="flex-1 rounded-xl bg-[#5c4a42] py-1.5 text-xs font-medium text-[#fdfbf7] shadow-sm hover:bg-[#4a3b32] transition"
            >
              Sí, por favor
            </button>
            <button
              onClick={handleDeclineMusic}
              className="rounded-xl bg-[#e6dec9] px-3 py-1.5 text-xs font-medium text-[#5c4a42] hover:bg-[#d6ccc2] transition"
            >
              No
            </button>
          </div>
        </div>
      )}

      {!showPrompt && (
        <button
          onClick={togglePlay}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-[#5c4a42] text-[#fdfbf7] shadow-lg hover:bg-[#4a3b32] transition-all active:scale-95 border border-[#e6dec9]"
          title={isPlaying ? "Pausar música" : "Reproducir música"}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            <svg className="w-5 h-5 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
      )}
    </>
  );
}