import '../../../styles/titulo-morganite.css';
export function TituloPelicula({ title = "SPIDERMAN NO WAY HOME"}) {
  return (
    <div className="title text-white md:order-1">
      <h1>{title}</h1>
    </div>
  );
}