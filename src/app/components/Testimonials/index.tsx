import React, { useState } from 'react'
import Map, { Source, Layer, Marker, Popup, SymbolLayer } from 'react-map-gl'
import { FeatureCollection, Point, GeoJsonProperties } from 'geojson/index'
import { getcolorState } from '../../../redux/AppSlice'
import { useSelector } from 'react-redux'

import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Refs } from '../../../pages'
import Image from 'next/image'
import { Righteous } from 'next/font/google'

// mapboxgl.workerClass = MapboxWorker
// import mapboxgl from "mapbox-gl"
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default

const REACT_MAPBOX_TOKEN = 'pk.eyJ1IjoicjFrM3NoIiwiYSI6ImNrdGp5Nmx5cDFnczAzMnJ0OHMwaDEwbWkifQ.E2jcYVFQPA6IJ9xLQ4A7sw'
// mapboxgl.accessToken = REACT_MAPBOX_TOKEN

interface Props {
    refs: Refs
}

const righteous = Righteous({
    weight: '400',
    subsets: ['latin']
})

export default function Testimonial(props: Props) {

    const { refs } = props

    const [popupInfo, setPopupInfo] = useState<any>(null)

    const colorState = useSelector(getcolorState)

    const geojson: FeatureCollection<Point, GeoJsonProperties>  = {
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
                    img: '/vercel.svg'
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
                    img: '/vercel.svg'
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [85.3239595, 27.7406487]
                },
                properties: {
                    name: 'Rajesh Hamal',
                    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
                    img: '/vercel.svg'
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [77.490855, 12.9542946]
                },
                properties: {
                    name: 'Rajni kanth',
                    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
                    img: '/vercel.svg'
                }
            },

        ]
    }

    const layerStyle:SymbolLayer = {
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
        },
    }

    const onHireClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        window.location.href = "mailto:sr1k3sh@gmail.com"
    }

    return (
        <section ref={refs.testimonial.testimonialRef} className={colorState === 'dark' ? 'rs-testimonial__section rs-testimonial__section--dark' : 'rs-testimonial__section rs-testimonial__section--light'}>
            <div className='container-xl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className={colorState === "dark" ? 'rs-testimonial__map-wrapper rs-testimonial__map-wrapper--dark' : "rs-testimonial__map-wrapper rs-testimonial__map-wrapper--light"}>
                            <h2><span className={righteous.className}>What</span> <strong className={righteous.className}>Client Said</strong></h2>
                            <div className='rs-testimonial__map-content'>
                                <div className='rs-testimonial__map'>
                                    <Map
                                        id="map"
                                        style={{ position: "absolute" }}
                                        mapboxAccessToken={REACT_MAPBOX_TOKEN}
                                        initialViewState={{
                                            longitude: 85.3239595,
                                            latitude: 27.7406487,
                                            zoom: 1.2
                                        }}
                                        mapStyle={colorState === "dark" ? "mapbox://styles/mapbox/dark-v10" : "mapbox://styles/mapbox/light-v10"}
                                    >
                                        {
                                            geojson.features.map((g, i) => {
                                                return <Marker key={i + 'test'} longitude={g.geometry.coordinates[0]}
                                                    latitude={g.geometry.coordinates[1]}
                                                    anchor="center"
                                                    onClick={e => {
                                                        // If we let the click event propagates to the map, it will immediately close the popup
                                                        // with `closeOnClick: true`
                                                        e.originalEvent.stopPropagation()
                                                        setPopupInfo(g)
                                                    }}
                                                >
                                                    <Image src={g.properties?.img} alt="Front-end developer, Rikesh" width={40} height={40}></Image>
                                                </Marker>
                                            })
                                        }
                                        {
                                            popupInfo?.geometry && <Popup longitude={popupInfo.geometry.coordinates[0]} latitude={popupInfo.geometry.coordinates[1]}
                                                anchor="bottom"
                                                closeButton={false}
                                                onClose={() => setPopupInfo(null)}
                                                offset={30}
                                            >
                                                <div className='rs-testimonial__popup-wrapper'>
                                                    <h3>{popupInfo.properties.name}</h3>
                                                    <p>{popupInfo.properties.message}</p>
                                                </div>
                                            </Popup>
                                        }
                                        {
                                            geojson &&
                                            <Source id="my-data" type="geojson" data={geojson}>
                                                <Layer {...layerStyle} />
                                            </Source>
                                        }
                                    </Map>
                                </div>
                                <div className='rs-testimonial__desc-wrapper'>
                                    <h3 className={righteous.className}>{`Let’s work together`}</h3>
                                    <p>{`Do you like my portfolio design? let's make something great out of the box together !! `}</p>
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
