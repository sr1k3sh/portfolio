import React, { useEffect, useMemo, useState } from 'react'
import Map , {Source, Layer, Marker, Popup} from 'react-map-gl';
import { getcolorState } from '../AppSlice';
import { useSelector } from 'react-redux';
import { debounce } from '../app/utit';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// mapboxgl.workerClass = MapboxWorker;
// import mapboxgl from "mapbox-gl";
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const REACT_MAPBOX_TOKEN = 'pk.eyJ1IjoicjFrM3NoIiwiYSI6ImNrdGp5Nmx5cDFnczAzMnJ0OHMwaDEwbWkifQ.E2jcYVFQPA6IJ9xLQ4A7sw';
// mapboxgl.accessToken = REACT_MAPBOX_TOKEN;

export default function Testimonial(props) {

    const { refs } = props;

    const [popupInfo, setPopupInfo] = useState(null);

    const colorState = useSelector(getcolorState);

    const geojson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-77.032, 38.913]
            },
            properties: {
              name: 'John Doe',
              message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
              img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-122.414, 37.776]
            },
            properties: {
              name: 'John Wick',
              message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
              img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.3239595 , 27.7406487]
            },
            properties: {
              name: 'Rajesh Hamal',
              message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
              img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [77.490855 ,12.9542946]
            },
            properties: {
              name: 'Rajni kanth',
              message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
              img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            }
          },

        ]
    };

    const layerStyle = {
        'id': 'off-leash-areas',
        'type': 'symbol',
        'source': 'places',
        'layout': {
            'text-field': [
                'format',
                ['upcase', ['get', 'name']],
                { 'font-scale': 0.8 },
                '\n',
                {},
            ],
            'text-size': 11,
            'text-transform': 'uppercase',
            'text-letter-spacing': 0.05,
            'text-offset': [0, 3],
            },
            'paint': {
                'text-color': '#651FFF',
                // 'text-halo-color': '#fff',
                // 'text-halo-width': 1
        },
    };

    useEffect(() => {
    });

    const requestResize = useMemo(() => {
        return debounce((e) => {
            // console.log(e.target)
            // e.target._resizeCanvas()
            // // e.target.update();
            // // e.target.resize();
        }, 500);
    }, []);

    const onResizeCanvas = (e) =>{

        requestResize(e)
    }

    const onHireClick = (e) =>{
        e.preventDefault();
        window.location.href = "mailto:sr1k3sh@gmail.com";
    }

    return (
        <section ref={refs.testimonial.testimonialRef} className={colorState === 'dark' ? 'rs-testimonial__section rs-testimonial__section--dark' : 'rs-testimonial__section rs-testimonial__section--light'}>
            <div className='container-xl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className={colorState === "dark" ? 'rs-testimonial__map-wrapper rs-testimonial__map-wrapper--dark' : "rs-testimonial__map-wrapper rs-testimonial__map-wrapper--light"}>
                            <h2><span>What</span> <strong>Client Said</strong></h2>
                            <div className='rs-testimonial__map-content'>
                                <div className='rs-testimonial__map'>
                                    {/* <div id="map" ref={mapContainer} className="map-container" /> */}
                                    <Map
                                        mapContainer="map-container"
                                        id="map"
                                        style={{position:"absolute"}}
                                        mapboxAccessToken = {REACT_MAPBOX_TOKEN}
                                        initialViewState={{
                                            longitude: 85.3239595 ,
                                            latitude: 27.7406487,
                                            zoom: 1.2
                                        }}
                                        onIdle={onResizeCanvas}
                                        mapStyle= {colorState === "dark" ? "mapbox://styles/mapbox/dark-v10" : "mapbox://styles/mapbox/light-v10"}
                                    >
                                        {
                                            geojson.features.map((g,i)=>{
                                                return <Marker key={i+'test'} longitude={g.geometry.coordinates[0]}
                                                latitude={g.geometry.coordinates[1]}
                                                anchor="center"
                                                onClick={e => {
                                                    // If we let the click event propagates to the map, it will immediately close the popup
                                                    // with `closeOnClick: true`
                                                    e.originalEvent.stopPropagation();
                                                   setPopupInfo(g);
                                                  }}
                                                >
                                                <img src={g.properties.img} alt=""></img>
                                            </Marker>
                                            })
                                        }
                                        {
                                            popupInfo && <Popup longitude={popupInfo.geometry.coordinates[0]} latitude={popupInfo.geometry.coordinates[1]}
                                                anchor="bottom"
                                                closeButton={false}
                                                onClose={() => setPopupInfo(null)}
                                                offset= {30}
                                            >
                                                <div className='rs-testimonial__popup-wrapper'>
                                                    <h3>{ popupInfo.properties.name }</h3>
                                                    <p>{ popupInfo.properties.message }</p>
                                                </div>
                                            </Popup>
                                        }
                                        <Source id="my-data" type="geojson" data={geojson}>
                                            <Layer {...layerStyle} />
                                        </Source>
                                    </Map>
                                </div>
                                <div className='rs-testimonial__desc-wrapper'>
                                    <h3>Let???s work together</h3>
                                    <p>Do you like my portfolio design? let's make something great out of the box together !! </p>
                                    <button className='btn btn-primary' onClick={onHireClick}>Hire Me</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
