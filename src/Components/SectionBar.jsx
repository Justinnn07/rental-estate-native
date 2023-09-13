import * as React from 'react';

export default function SectionBar() {
  const [selected, setSelected] = React.useState(0);

  const labels = ['House', 'Apartment', 'Hotel', 'Villa', 'Community', 'Area'];

  return (
    <div 
      style={{ 
        position: 'relative',
        display: 'flex', 
        flexDirection: 'row',
        borderRadius: '8px',
        overflowX: 'scroll', 
        boxSizing: 'border-box',
        padding: '4px',
        margin: '0 -5px',
        fontSize: '14px',
      }}>
      {labels.map((label, index) => (
        <div key={index} onClick={() => setSelected(index)}
          style={{
            margin: '10px 5px',
            flex: '0 0 auto',
            textAlign: 'center',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            border: 'none',
            color: selected === index ? '#ffffff' : '#bebebe',
            transition: 'all .15s ease-in-out',
            backgroundSize: '100% auto',
            fontFamily: 'inherit',
            fontSize: '17px',
            padding: '0.6em 1.5em',
            backgroundColor: selected === index ? '' : '#f7f7f7',
            background: selected === index ? 'linear-gradient(30deg, #0400ff, #4ce3f7)' : '#f7f7f7'
          }}>
          {label}
        </div>
      ))}
    </div>
  );
};