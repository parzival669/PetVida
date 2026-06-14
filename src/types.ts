export type DepartmentType = 'direcao' | 'especialistas' | 'apoio';

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  department: DepartmentType;
  tags?: string[];
  subSpecialty?: string[];
  skills?: string[];
}

export interface ClinicalRoleResponsibility {
  roleTitle: string;
  personName?: string;
  icon: string;
  responsibilities: string[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  badge: string;
  tagline: string;
  price: number;
}

export interface Appointment {
  id: string;
  petName: string;
  service: string;
  doctor: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed';
}

export interface PetProfile {
  name: string;
  breed: string;
  stars: number;
  photo: string;
  medicalRecords: string[];
  vaccines: {
    name: string;
    date: string;
    status: 'completed' | 'pending';
  }[];
  diet: string[];
}

export interface HealthPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  coverages: string[];
  badgeColor: string;
  btnStyle: string;
}
