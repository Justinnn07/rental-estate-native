import House from '../assets/house.jpg';
import LocationIcon from '@mui/icons-material/PlaceOutlined';

export default function HouseCard() {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'auto',
        padding: '16px'
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '300px',
          minWidth: '300px',
          maxHeight: '350px',
          minHeight: '350px',
          borderRadius: '20px',
          marginLeft: '-6px',
          boxShadow: '0px 5px 10px 4px rgba(0,0,0,0.4)'
        }}>
        <img src={House} alt={'House'} 
          style={{
            position: 'absolute',
            width: '300px',
            height: '350px',
            borderRadius: '20px'
          }}/>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '5px 12px',
            color: '#ffffff',
            background: 'rgba(128, 128, 128, 0.5)',
            width: '34%',
            height: '10%',
            borderRadius: '20px',
            marginTop: '25px',
            marginLeft: '150px'
          }}>
          <LocationIcon />
          <p>1.8 km</p>
        </div>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#ffffff',
            marginBottom: '20px',
            marginRight: '60px',
          }}>
          <h3 
            style={{
              fontSize: '22px',
              fontWeight: '400',
              marginBottom: '6px'
            }}>
            Dreamsville House
          </h3>
          <p
            style={{
            fontSize: '18px',
            fontWeight: '300'
            }}>
            Sultan Iskandar Muda
          </p>
        </div>
      </div>
    </div>
  );
};