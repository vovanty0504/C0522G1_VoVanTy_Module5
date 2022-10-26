import {Facility} from "./facility";
import {Customer} from "./customer";

export interface Contract {
  id?: number;
  startDate?: string;
  endDate?: string;
  deposit?: number;
  customer?: Customer;
  facility?: Facility;
}
