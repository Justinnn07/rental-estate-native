import * as React from 'react';
import bellIcon from '../assets/bellIcon.png';


export default function Header() {
  function Dropdown() {
    const [value, setValue] = React.useState('');
    
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    
    return (
      <div
        style={{
          height: '25px'
        }}>
        <select value={value} onChange={handleChange}
          style={{
            background: 'transparent',
            border: 'none',
            fontSize: '25px',
            outline: 'none',
            fontFamily: "'Inter', sans-serif",
            fontWeight: '400',
          }}>
          <option value="Jakarta">Jakarta</option>
          <option value="California">California</option>
          <option value="New York">New York</option>
          <option value="Tokyo">Tokyo</option>
          <option value="Dubai">Dubai</option>
        </select>
      </div>
    );
  };
  
  function handleIconClick() {
    console.log('Notifications');
  };

  return (
    <header 
      style={{ 
        display: 'flex',
        alignitems: 'center',
        justifyContent: 'space-between'
      }}>
      <div
        style={{
          marginTop: '25px'
        }}>
        <h1 
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: '400',
            fontSize: '16px',
            color: '#afafaf',
            margin: '0 3px'
          }}>
          Location
        </h1>
        <Dropdown />
      </div>
      <div
        style={{
          marginTop: '35px'
        }}>
      <button onClick={handleIconClick} 
        style={{ 
          background: 'none', 
          border: 'none'
        }}>
        <img src={bellIcon} alt="Notification Bell" 
          style={{ 
            width: '30px',
            height: '30px',
          }} />
      </button>
      </div>
    </header>
  );
};
