import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Layout from "../Layout/Layout";

const title = "Aonde estamos?";
const subtitle = "Saiba aonde nos procurar";

const Location = () => {
  const pulsingIcon = L.divIcon({
    className: "", // vazio porque vamos usar Tailwind dentro do html
    html: `
    <div class="relative w-5 h-5">
      <div class="absolute inline-flex w-full h-full bg-red-500 rounded-full opacity-75 animate-ping"></div>
      <div class="relative w-5 h-5 bg-red-500 rounded-full"></div>
    </div>
  `,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10],
  });

  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    if (typeof window !== "undefined") {
      const map = L.map(mapRef.current).setView([-12.96318, -38.50715], 16);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      }).addTo(map);

      L.marker([-12.96318, -38.50715], { icon: pulsingIcon })
        .addTo(map)
        .bindPopup("Estamos aqui!")
        .openPopup();

      return () => {
        map.remove();
      };
    }
  }, []);

  return (
    <Layout title={title} subtitle={subtitle}>
      <div className="">
        <div className="flex justify-center mt-9">
          <div
            className="w-[80%] h-[350px] z-0 rounded-[20px]"
            ref={mapRef}
          ></div>
        </div>
        <div className="w-[100%] flex justify-center mt-9">
          <div className="w-[80%] flex flex-col items-center">
            <div className="w-[90%]">
              <h1 className="font-semibold">Localização</h1>
              <p className="text-xs ml-5 w-[90%]">
                Rua Direita do Santo Antônio, 2 - Santo Antônio Além do Carmo,
                Salvador - BA 40301-280
              </p>
            </div>
            <div className="w-[90%]">
              <h1 className="font-semibold">Horário</h1>
              <p className="text-xs ml-5 w-[90%]">
                Aberto: terça a sábado, das 12:00 às 22:00
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=-12.96318,-38.50715"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[30%] bg-black text-xs text-white text-center rounded-[20px] m-3 p-2"
            >
              Ir no Maps
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Location;
