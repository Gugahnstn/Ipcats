export interface CardType {
  phrase?: string | null;
  title?: string | null;
  flag?: string | null;
}

export interface SearchMapProps {
  longitude: number | undefined;
  latitude: number | undefined;
}

export interface ViewPort {
  attributionControl: boolean;
  longitude: number | undefined;
  latitude: number | undefined;
  zoom: number;
}