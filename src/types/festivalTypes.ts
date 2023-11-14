import { StandModel } from "./eventMapTypes";
import { User } from "./userTypes";

export type FestivalStatus = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'

export type Festival = {
  id?: number;
  name: string;
  description?: string;
  startDate: string;
  endDate: string;
  location?: string;
  locationURL?: string;
  logoURL?: string;
  status: FestivalStatus;
  availableArtists?: User[];
  stands?: StandModel[];
  artistsWithoutReservation?: User[];
}