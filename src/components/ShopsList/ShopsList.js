import ShopItem from '../ShopItem/ShopItem';
import './ShopsList.css';

const ShopsList = () => {
  return (
    <div class="shops-list">
      <ShopItem 
        title="Parduotuve 1" 
        email="info@parduotuve1.lt" 
        phone="+3245646464" 
        address="Arsenalo g. 5, Vilnius 01143" 
        mapUrl="https://goo.gl/maps/mLds4bsZazJgdbk19"  
      />
      <ShopItem 
        title="Parduotuve 2" 
        email="info@parduotuve2.lt" 
        phone="+324544444" 
        address="Arsenalo g. 25, Vilnius 01143" 
        mapUrl="https://goo.gl/maps/mLds4bsZazJgdbk19"  
      />
      <ShopItem 
        title="Parduotuve 3" 
        email="info@parduotuve3.lt" 
        address="Arsenalo g. 10, Vilnius 01143" 
        mapUrl="https://goo.gl/maps/mLds4bsZazJgdbk19"  
      />
      <ShopItem 
        title="Parduotuve 4" 
        email="info@parduotuve4.lt" 
        phone="+3245666666" 
        address="Arsenalo g. 125, Vilnius 01143" 
        mapUrl="https://goo.gl/maps/mLds4bsZazJgdbk19"  
      />

    </div>
  );
}

export default ShopsList;