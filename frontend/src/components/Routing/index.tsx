import { MapLayer, MapLayerProps } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { withLeaflet } from 'react-leaflet';

interface RoutingProps extends MapLayerProps {
  map: any;
  start_point: [number, number];
  end_point: [number, number];
}

class Routing extends MapLayer<RoutingProps> {
  createLeafletElement(): any {
    const { map, start_point, end_point } = this.props;

    const leafletElement = L.Routing.control({
      waypoints: [L.latLng(start_point), L.latLng(end_point)],
    }).addTo(map.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
