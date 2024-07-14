export interface BookingTrip {
  title: string;
  duration: number;
  price: number;
}

export interface Booking {
  id: string;
  userId: string;
  tripId: string;
  guests: number;
  date: string;
  trip: BookingTrip;
  totalPrice: number;
  createdAt: string;
}

export interface Trip {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: number;
  price: number;
  image: string;
  createdAt: string;
}

export interface User {
  id: number;
  fullName: string;
  email: string;
  createdAt: string;
}