import './Map.css';

const Map = ({mapSrc}) => {
  return (
    <div className="map-wrapper">
      <iframe 
        src={mapSrc}
        width="600" 
        height="450" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;