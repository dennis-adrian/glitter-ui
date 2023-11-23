import { useEffect, useRef, useState } from 'react';

import { StandModel, StandPosition } from 'src/types/eventMapTypes';

import Stand from '../Stand';

type Props = {
  label: string;
  mapImg: string;
  stands: StandModel[];
  standsPositions: StandPosition[];
  standProportions: { wideSide: number; narrowSide: number };
  onStandClick: (stand: StandModel) => void;
};

const FestivalMap = ({
  label,
  mapImg,
  stands,
  standsPositions,
  standProportions,
  onStandClick,
}: Props) => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleSizeChange = () => {
      if (isMapLoaded) {
        imgRef.current &&
          setImgSize({
            width: imgRef.current.width,
            height: imgRef.current.height,
          });
      }
    };

    window.addEventListener('resize', handleSizeChange);
    if (isMapLoaded) {
      imgRef.current &&
        setImgSize({
          width: imgRef.current.width,
          height: imgRef.current.height,
        });
    }

    return () => {
      window.removeEventListener('resize', handleSizeChange);
    };
  }, [isMapLoaded, imgRef]);

  return (
    <div className="m-auto max-w-md p-1">
      <h3 className="font-title text-xl my-3">{label}</h3>
      <div className="relative">
        <section className="flex justify-center w-100 m-auto">
          <img
            ref={imgRef}
            src={mapImg}
            alt="mapa del proximo evento"
            onLoad={() => setIsMapLoaded(true)}
          />
        </section>
        {isMapLoaded &&
          stands?.length > 0 &&
          stands.map((stand) => {
            const position = standsPositions.find(
              (position: StandPosition) => position.id === stand.standNumber,
            ) ?? { left: 0, top: 0 };

            return (
              <Stand
                imgSize={imgSize}
                key={stand.id}
                position={position}
                proportions={standProportions}
                stand={stand}
                onClick={onStandClick}
              />
            );
          })}
      </div>
    </div>
  );
};

export default FestivalMap;
