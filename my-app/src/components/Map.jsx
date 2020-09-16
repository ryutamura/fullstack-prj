import React, { useState } from "react";
import '../styles/Map.css';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import mapStyles from "../styles/mapStyles";



export default function Gmap({rapperList}) {
    function Map() {
        const [selectedRapper, setSelectedRapper] = useState(null);

        return (
            <GoogleMap 
                defaultZoom={4} 
                defaultCenter={{ lat: 39.50, lng: -98.35 }} 
                defaultOptions={{ styles: mapStyles }}
            >
                {rapperList.map((rapper) => (
                    <Marker key={rapper.id} position={{lat: rapper.latitude, lng: rapper.longitude}}
                    onClick={() => {
                        setSelectedRapper(rapper);
                    }}
                    icon={{
                        url: "/rap.svg",  
                        scaledSize: new window.google.maps.Size(25, 25)
                    }}
                    />

                ))}

                {selectedRapper && (
                    <InfoWindow position={{lat: selectedRapper.latitude, lng: selectedRapper.longitude}}
                        onCloseClick={() => {
                            setSelectedRapper(null);
                        }}
                    
                    >
                    
                        <div>
                            <h2 id="rapper-name">{selectedRapper.name}</h2>
                            <p id="rapper-city">City: {selectedRapper.city}</p>
                            <p id="rapper-bio">{selectedRapper.bio_sum}</p>
                            <p className="rapper-links">More info about {selectedRapper.name}: </p>
                            <a  href={selectedRapper.bio_url} target="_blank">Click here</a>
                            <p className="rapper-links">{selectedRapper.name}'s music video: </p>
                            <a href={selectedRapper.youtube} target="_blank">Click here</a>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        );
    }

    const WrappedMap = withScriptjs(withGoogleMap(Map));

    return (
        <div style={{width: '100vw', height: '100vh'}}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDJ3sPnmTBMN1DZGJBX9gxuNg-O9mgHOAo`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `600px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
        
            />

        </div>
    )
}