import { StoreId } from "../shared/ids";

export interface Store {
  id: StoreId;
  name: string;
  city: string;
  country: string;
}