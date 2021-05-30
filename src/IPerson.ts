
export interface IPerson {
    _id: string;
    isActive: boolean;
    balance: number;
    age: number;
    eyeColor: string;
    name: string;
    gender: string;
  }

export const IPersonInterFaceAsString: string = `
interface IPerson {
  _id: string;
  isActive: boolean;
  balance: number;
  age: number;
  eyeColor: string;
  name: string;
  gender: string;
}`;