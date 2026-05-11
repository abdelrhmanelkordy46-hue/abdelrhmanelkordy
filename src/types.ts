export type CarStatus = 'available' | 'rented' | 'maintenance' | 'accident';
export type BookingStatus = 'pending' | 'active' | 'completed' | 'cancelled';
export type TransactionType = 'income' | 'expense';

export interface Car {
  id: string;
  plateNumber: string;
  brand: string;
  model: string;
  year: number;
  type: string;
  status: CarStatus;
  dailyPrice: number;
  fuelLevel: number;
  mileage: number;
  branchId: string;
  lastLocation?: {
    lat: number;
    lng: number;
    speed?: number;
  };
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  idNumber: string;
  loyaltyPoints: number;
  blacklisted: boolean;
}

export interface Booking {
  id: string;
  carId: string;
  customerId: string;
  startDate: any; // Firestore Timestamp
  endDate: any;
  totalAmount: number;
  status: BookingStatus;
  contractUrl?: string;
}

export interface Transaction {
  id: string;
  amount: number;
  type: TransactionType;
  category: string;
  description: string;
  bookingId?: string;
  branchId: string;
  createdAt: any;
}

export interface UserProfile {
  uid: string;
  email: string;
  name: string;
  role: 'admin' | 'employee' | 'super-admin';
  companyId: string;
  branchId?: string;
}
