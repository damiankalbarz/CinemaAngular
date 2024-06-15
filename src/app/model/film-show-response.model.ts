export interface Cinema {
  id: number;
  name: string;
  location: string;
}

export interface Film {
  id: number;
  title: string;
  description: string;
}

export interface Room {
  id: number;
  name: string;
  seats: number;
}

export interface FilmShowResponse {
  id: number;
  dateTime: string;
  cinema: Cinema;
  film: Film;
  room: Room;
  availableSeats: number;
}
