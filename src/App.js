import React, {useState} from "react";
import Arkaplan from"./Bileşenler/Arkaplan";
import "./index.css";
import Arama from "./Bileşenler/Arama/AramaCubugu";
import Sonuc from "./Bileşenler/Sonuc";

function App() {
  const [havaDurumu, belirtHavaDurumu] = useState({});
  

  return (
    <section className="uygulama"> 
    <Arkaplan arkaplan={havaDurumu.weather && havaDurumu.weather[0].main} />
    <div id="baslik">Hava Durumu</div>
    <Arama belirtHavaDurumu={belirtHavaDurumu} />
    <Sonuc hava ={havaDurumu} />
    </section>
  );
}

export default App;
