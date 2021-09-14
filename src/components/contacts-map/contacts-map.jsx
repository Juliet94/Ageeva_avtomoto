import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import marker from '../../assets/images/mark.svg';

const MapSettings = {
  CENTER: [59.966261, 30.327636],
  MARKER: [59.968137, 30.316272],
  ZOOM: 14,
};

function ContactsMap() {
  return (
    <YMaps>
      <Map width={'100%'} height={'100%'} defaultState={{ center: MapSettings.CENTER, zoom: MapSettings.ZOOM }}>
        <Placemark geometry={MapSettings.MARKER} options={{iconLayout: 'default#image', iconImageHref: marker}}/>
      </Map>
    </YMaps>
  );
}

export default ContactsMap;
