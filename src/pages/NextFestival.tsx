import festivalMap from '../assets/cba_map.png';
import StandPosition from '../components/Stand';
import { Stand } from '../types/eventMapTypes';

const NextFestivalPage = () => {
  const stands = [
    { stantNumber: 1, left: 34, top: 73.5, isHorizontal: false, isAvailable: true },
    { standNumber: 2, left: 32, top: 68, isHorizontal: true, isAvailable: false },
  ] as Stand[];

  return (
    <div>
      <img src={festivalMap} alt="mapa del proximo evento" useMap="#eventMap" />
      <map name="eventMap">
        {stands.map((stand) => (
          <StandPosition
            key={stand.standNumber}
            {...stand}
          />
        ))}
      </map>
    </div>
  )
}

export default NextFestivalPage