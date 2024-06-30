import { Band } from "./band";

export interface Artist {
  id: string;
  name: string;
  surname: string;
  birthday: string;
  bands: Band[];
}
