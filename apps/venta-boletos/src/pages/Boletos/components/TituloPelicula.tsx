import '../../../styles/Morganite.css';
export function TituloPelicula({ title = "SPIDERMAN NO WAY HOME"}) {
  return (
    <div className="title text-white">
      <h1>{title}</h1>
    </div>
  );
}