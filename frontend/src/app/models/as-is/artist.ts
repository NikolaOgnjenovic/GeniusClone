import { Band } from "./band";
import { Performer } from "./performer";

export interface Artist extends Performer {
  surname: string;
  birthday: string;
  description: string;
  image: string;
  bands: Band[];
}
