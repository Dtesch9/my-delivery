import React from 'react';
import { useLocation } from 'react-router-dom';

// import { Container } from './styles';

interface RouteParams {
  start_point: [number, number];
  end_point: [number, number];
}

const RoutePath: React.FC = () => {
  const RouteParams = useLocation<RouteParams>();

  console.log(RouteParams.state);

  return <div />;
};

export default RoutePath;
