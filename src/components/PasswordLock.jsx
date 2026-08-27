import { useState } from 'react';

export default function PasswordLock({ onCorrectPassword }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'te') {
      onCorrectPassword();
    } else {
      setError(true);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[#fdfbf7] px-4 font-sans-clean overflow-hidden">
      
      {/* Formas geométricas flotantes de fondo */}
      <div className="absolute top-12 left-[10%] w-24 h-24 rounded-full bg-[#d9c3b0]/35 blur-sm pointer-events-none animate-float-slow" />
      <div className="absolute bottom-16 left-[15%] w-20 h-20 rounded-2xl bg-[#c2a892]/30 blur-sm pointer-events-none animate-float-fast" />
      <div className="absolute top-1/3 right-[12%] w-28 h-28 rounded-3xl bg-[#e6d5c3]/40 blur-sm pointer-events-none animate-float-fast rotate-12" />
      <div className="absolute bottom-1/4 right-[18%] w-16 h-16 rounded-full bg-[#d9c3b0]/30 blur-sm pointer-events-none animate-float-slow" />

      {/* Lluvia de corazones flotantes con blur suave y transparencia */}
      <div className="absolute top-[10%] left-[28%] text-[#c2a892]/35 animate-float-slow pointer-events-none">
        <svg className="w-10 h-10 blur-[0.5px]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>

      <div className="absolute top-[20%] right-[25%] text-[#d9c3b0]/40 animate-float-fast pointer-events-none">
        <svg className="w-14 h-14 blur-[0.5px] rotate-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>

      <div className="absolute bottom-[15%] left-[22%] text-[#c2a892]/40 animate-float-fast pointer-events-none">
        <svg className="w-16 h-16 blur-[0.5px] -rotate-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>

      <div className="absolute bottom-[20%] right-[20%] text-[#d9c3b0]/35 animate-float-slow pointer-events-none">
        <svg className="w-12 h-12 blur-[0.5px]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>

      <div className="absolute top-[60%] left-[8%] text-[#e6d5c3]/50 animate-float-slow pointer-events-none">
        <svg className="w-8 h-8 blur-[0.5px] rotate-45" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>

      <div className="absolute top-[18%] right-[8%] text-[#c2a892]/30 animate-float-fast pointer-events-none">
        <svg className="w-10 h-10 blur-[0.5px] -rotate-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>

      {/* Tarjeta principal con transparencia */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-[#f5f0eb]/85 backdrop-blur-md p-8 shadow-xl border border-[#e6dec9]">
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif-chic font-medium text-[#4a3b32]">
            Acceso al Sistema
          </h2>
          <p className="text-xs text-[#8c7a6b] mt-2 tracking-wider uppercase">
            Introduce la contraseña
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Contraseña..."
              className="w-full rounded-xl border border-[#d6ccc2] bg-white/80 px-4 py-3 text-[#4a3b32] placeholder-[#b0a69d] focus:border-[#8c7a6b] focus:outline-none focus:ring-1 focus:ring-[#8c7a6b] transition-all text-sm"
            />
          </div>
          
          {error && (
            <p className="text-xs text-[#b85d4f] text-center font-medium bg-[#fcf3f2]/90 py-2 rounded-lg border border-[#f7dcde]">
              Contraseña incorrecta.
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-[#5c4a42] py-3 font-medium text-[#fdfbf7] shadow-sm transition duration-200 hover:bg-[#4a3b32] active:scale-[0.99] text-sm tracking-wide"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}