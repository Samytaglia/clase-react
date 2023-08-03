import ProductCard from "../../common/productCard/ProductCard";
import Skeleton from '@mui/material/Skeleton';

const ItemList = ({ items }) => {
  // Definir arreglo de 12 elementos
  const arr = Array.from({ length: items.length > 0 ? items.length : 12 }, (_, index) => index);

  // Distribuir el arreglo en 4 filas de 3 elementos 
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const cardGroups = chunkArray(arr, 4); 
  return (
    <div
      style={{
        width: "95%",
        marginTop: "1%",
        marginLeft: "2.5%",
        marginBottom: '5%',
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.id} style={{ flex: '1', minWidth: '23%', marginBottom: '20px' }}> {/* Adjusted minWidth to fit 4 cards in a row */}
              <ProductCard item={item} />
          </div>
        ))
      ) : (
        // Si no hay items, muestra los skeletons
        <div>
          {cardGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: '20px',
              }}
            >
              {group.map((index) => (
                <div key={index} style={{ flex: '1', minWidth: '23%', marginRight: '20px' }}> 
                  <Skeleton variant="rectangular" width={300} height={510} />
                  <div style={{ paddingRight: '8px' }}>
                    <Skeleton width="60%" height={40} style={{marginLeft:"20%"}}/>
                    <Skeleton width="30%" style={{marginLeft:"35%"}}/>
                    <Skeleton width="40%" height={45} style={{marginLeft:"30%"}}/>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemList;
