import { useState, useEffect } from 'react';
import { CSSProperties } from 'react';
import { ElementSize, Stand } from '../types/eventMapTypes';

type Props = Stand;

const Stand = ({
  isHorizontal,
  isAvailable,
  left,
  top,
  standNumber,
}: Props) => {
  const [size, setSize] = useState<ElementSize>({
    width: 0,
    height: 0,
  });

  const handleSeatClick = (standNumber: number) => {
    console.log(`Seat number ${standNumber} clicked`);
  };

  useEffect(() => {
    const updateStands = async () => {
      const mapImg = document.getElementById('galleryMap');
      if (mapImg) {
        const { width: imgWidth, height: imgHeight } =
          mapImg.getBoundingClientRect();
        const size = {
          // width: imgWidth * 0.072,
          // height: imgHeight * 0.0698,
          width: imgWidth * 0.089,
          height: imgHeight * 0.059,
        };
        setSize(size);
      }
    };

    window.addEventListener('resize', updateStands);
    updateStands();

    return () => {
      window.removeEventListener('resize', updateStands);
    };
  }, []);

  const style: CSSProperties = {
    position: 'absolute',
    left: `${left}%`,
    top: `${top}%`,
    cursor: 'pointer',
    height: `${size?.height}px`,
    width: `${size?.width}px`,
  };

  const bgColor = isAvailable
    ? 'hover:bg-amber-300 hover:bg-opacity-60'
    : 'bg-emerald-200 hover:bg-emerald-400 hover:bg-opacity-60';
  const shape = isHorizontal ? '' : 'rotate-[270deg]';

  return (
    <div
      className={`${bgColor} ${shape} bg-opacity-60`}
      key={standNumber}
      style={style}
      onClick={() => handleSeatClick(standNumber)}
    />
  );
};

export default Stand;
