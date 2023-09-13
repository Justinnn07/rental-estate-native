import HouseCard from "./HouseCard";
import MiniCard from "./MiniCard";

export default function SuggestionSection() {

  return (
    <div>
      <div 
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '0 5px',
          marginTop: '20px'
        }}>
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: '400',
            fontSize: '24px'
          }}>
          Near from you
        </h2>
        <button
          style={{
            background: 'transparent',
            border: 'none',
            fontSize: '16px',
            color: '#a9a9a9'
          }}>
          See more
        </button>
      </div>
      <div>
        <HouseCard />
      </div>
      <div 
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '0 5px',
          marginTop: '20px'
        }}>
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: '400',
            fontSize: '24px'
          }}>
          Best for you
        </h2>
        <button
          style={{
            background: 'transparent',
            border: 'none',
            fontSize: '16px',
            color: '#a9a9a9'
          }}>
          See more
        </button>
      </div>
      <div>
        <MiniCard />
      </div>
    </div>
  );
};