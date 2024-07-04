interface IName {
  [key: string]: string;
}
interface IFlags {
  [key: string]: string;
}
export interface Types {
  _id: number;
name:IName
  flags:IFlags
  area: number;
  region: string;
}
