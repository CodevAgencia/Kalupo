import { GoogleMap, useJsApiLoader, LoadScript, Marker } from '@react-google-maps/api';
import React, { useCallback, useEffect, useState } from 'react';
import styles from './MapContainer.module.scss'

interface MapContainerProps {
  handleCurrentAddress: (values: google.maps.GeocoderResult[]) => void
}

export const MapContainer:React.FC<MapContainerProps> = ({handleCurrentAddress}) => {
  const [center, setCenter] = useState<{ lat: number; lng: number }>({ lat: 0, lng: 0 });
  const [selectedLocation, setSelectedLocation] = useState<google.maps.LatLng | null>(null);
  const [address, setAddress] = useState<google.maps.GeocoderResult[]>([]);
  const [vibrateClass, setClassVibrate] = useState('')
  const containerStyle = {
    width: '100%',
    height: '380px'
  };
  

  function getLocation() {
    return new Promise((resolve: (position: GeolocationPosition) => void, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject(new Error('Geolocalización no soportada'));
      }
    });
  }
  
  useEffect(() => {
    getLocation()
      .then((position: GeolocationPosition) => {

        const { latitude, longitude } = position.coords;
        setCenter({ lat: latitude, lng: longitude });
      })
      .catch((error) => {
        console.error('Error al obtener la ubicación:', error);
      });
  }, []);

  
  const handleMapClick = ({ latLng }: google.maps.MapMouseEvent) => {
    setSelectedLocation(latLng);
    getAddressFromLatLng(latLng);
  };

  const getAddressFromLatLng = (latLng: google.maps.LatLng | null) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === 'OK') {
        if (results) {
          setAddress(results);
        } else {
          setAddress([]);
        }
      } else {
        setAddress([]);
      }
    });
  };

  const handleSelectAddrees = () => {
    console.log(address)
    if (address.length) {
      handleCurrentAddress(address)
    } else {
      setClassVibrate(styles.vibrate)
      setTimeout(() => setClassVibrate(''), 700)
    }
  }
  
  return (
    <div className={`p-8 bg-blue rounded-3xl ${vibrateClass}`}>
      <p className="text-xl font-bold text-white mb-4">Agregar dirección de entrega</p>
      <LoadScript
        googleMapsApiKey="AIzaSyCQjogK35jk0wq63RvTrTd1Ncp1-NgYUYc"
        
      >
        <GoogleMap
          onClick={handleMapClick}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          {selectedLocation && (
            <Marker
              position={{ lat: selectedLocation.lat(), lng: selectedLocation.lng() }}
              draggable={true}
              onDragEnd={handleMapClick}
            />
          )}
        </GoogleMap>
      </LoadScript>
      <button onClick={handleSelectAddrees} className='mt-4 bg-orange-b text-white w-full rounded-lg py-2.5'>Continuar</button>
    </div>
  )
}

export default React.memo(MapContainer)