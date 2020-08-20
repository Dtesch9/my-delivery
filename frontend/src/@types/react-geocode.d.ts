import 'react-geocode';

declare module 'react-geocode' {
  export interface GeoCodingResponse {
    results: AddressResponse[];
  }

  export type LocationResponse = LatLngShape;
}

interface LatLngShape {
  lat: number;
  lng: number;
}

interface BoundsShape {
  northeast: LatLngShape;
  southwest: LatLngShape;
}

type ViewPortShape = BoundsShape;

interface Geometry {
  bounds: BoundsShape;
  location: LatLngShape;
  location_type: string;
  viewport: ViewPortShape;
}

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: [string];
}

type Street = AddressComponent;
type City = AddressComponent;
type State = AddressComponent;
type Country = AddressComponent;
type PostalCode = AddressComponent;

interface AddressResponse {
  address_components: [Street, City, State, Country, PostalCode];
  formatted_address: string;
  geometry: Geometry;
  place_id: string;
  types: [string];
}
