import { Education } from "./education";
import { Experience } from "./experience";

export interface User {
    userId: number;
    name: string;
    email: string;
    phone: string;
    profileImage: string;
    education: Education[];
    workExperience: Experience[];

}
  