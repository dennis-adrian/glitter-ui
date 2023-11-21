import { useEffect, useState } from 'react';
import { Festival } from '../types/festivalTypes';
import { get } from '../api/helpers';
import { formatDateWithTime } from './utils/dateFormatter';
import Table from './shared/Table';

const Festivals = () => {
  const [festivals, setFestivals] = useState<Festival[]>([]);

  useEffect(() => {
    const fetchFestivals = async () => {
      const festivals = await get('festivals');
      if (festivals?.length) {
        setFestivals(festivals);
      }
    };

    fetchFestivals();
  }, []);

  return (
    <>
      <h1 className="text-3xl my-4">Festivales</h1>
      <div className="flex justify-end">
        <button className="btn btn-primary m-4">Crear Festival</button>
      </div>
      <Table
        headers={[
          '',
          'Nombre',
          'Fecha de Inicio',
          'Fecha Final',
          'Lugar',
          'Acciones',
        ]}
      >
        {festivals.length > 0 &&
          festivals.map((festival, i) => (
            <tr key={festival.id}>
              <td>{i + 1}</td>
              <td>{festival.name}</td>
              <td>{formatDateWithTime(festival.startDate)}</td>
              <td>{formatDateWithTime(festival.endDate)}</td>
              <td className="truncate">{festival.location}</td>
              <td>Actions</td>
            </tr>
          ))}
      </Table>
    </>
  );
};

export default Festivals;
