import { useEffect, useState } from "react";
import { get } from "../api/helpers";
import { Festival } from "../types/festivalTypes";
import { formatDateWithTime } from "../components/utils/dateFormatter";

const DashboardPage = () => {
  const [festivals, setFestivals] = useState<Festival[]>([]);

  useEffect(() => {
    const fetchFestivals = async () => {
      const festivals = await get('festivals');
      if (festivals?.length) {
        setFestivals(festivals);
      }
    }

    fetchFestivals();
  }, []);

  return (
    <>
      <h1 className="text-3xl my-4">Festivales</h1>
      <div className="flex justify-end">
        <button className="btn btn-primary m-4">Crear Festival</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Fecha de Inicio</th>
              <th>Fecha Final</th>
              <th>Lugar</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {festivals.length > 0 && (
              festivals.map((festival, i) => (
                <tr key={festival.id}>
                  <td>{i + 1}</td>
                  <td>{festival.name}</td>
                  <td>{formatDateWithTime(festival.startDate)}</td>
                  <td>{formatDateWithTime(festival.endDate)}</td>
                  <td className="truncate">{festival.location}</td>
                  <td>Actions</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default DashboardPage;