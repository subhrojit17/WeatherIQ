
import { useState } from "react";
import Weather from "./Weather";

function App() {
  const [unit, setUnit] = useState("C");
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`app-container ${theme}`}>
      <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'1.2rem 2.5vw 1.2rem 2.5vw'}}>
        <span style={{fontWeight:700,fontSize:'1.5rem',letterSpacing:'1px'}}>WeatherIQ</span>
        <div style={{display:'flex',gap:'1.5rem',alignItems:'center'}}>
          <div style={{display:'flex',gap:'0.5rem',background:'rgba(255,255,255,0.10)',borderRadius:'1.2rem',padding:'0.2rem 0.7rem'}}>
            <span
              style={{fontWeight:unit==='C'?700:400,opacity:unit==='C'?1:0.6,cursor:'pointer'}}
              onClick={()=>setUnit('C')}
            >°C</span>
            <span style={{opacity:0.5}}>|</span>
            <span
              style={{fontWeight:unit==='F'?700:400,opacity:unit==='F'?1:0.6,cursor:'pointer'}}
              onClick={()=>setUnit('F')}
            >°F</span>
          </div>
          <button
            style={{
              border:'none',background:'rgba(255,255,255,0.10)',borderRadius:'1.2rem',padding:'0.2rem 1.1rem',color:'#fff',fontWeight:600,cursor:'pointer',fontSize:'1rem',transition:'background 0.2s'}}
            onClick={()=>setTheme(theme==='dark'?'light':'dark')}
          >
            {theme==='dark' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </header>
      <main>
        <Weather unit={unit} theme={theme} />
      </main>
    </div>
  );
}

export default App;
