import React, { useState } from 'react'
import Map, { Marker, Popup } from 'react-map-gl'
import { FeatureCollection, Point, GeoJsonProperties } from 'geojson/index'
import { useSelector } from 'react-redux'

import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Refs } from '../../../pages'
import { MdEmojiPeople } from 'react-icons/md'
import { colors } from 'src/utils/utils'
import { getThemeMode } from 'src/redux/ThemeSlice'
import { proza, sansFont } from 'src/utils/fonts'

// mapboxgl.workerClass = MapboxWorker
// import mapboxgl from "mapbox-gl"
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default

const REACT_MAPBOX_TOKEN = 'pk.eyJ1IjoicjFrM3NoIiwiYSI6ImNrdGp5Nmx5cDFnczAzMnJ0OHMwaDEwbWkifQ.E2jcYVFQPA6IJ9xLQ4A7sw'
// mapboxgl.accessToken = REACT_MAPBOX_TOKEN

interface Props {
    refs: Refs
}

export default function Testimonial(props: Props) {

    const { refs } = props

    const [popupInfo, setPopupInfo] = useState<any>(null)

    const colorState = useSelector(getThemeMode)

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
                    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
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
                    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
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
                    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
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
                    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                    img: '/vercel.svg'
                }
            },

        ]
    }

    const onHireClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        window.location.href = "mailto:sr1k3sh@gmail.com"
    }

    return (
        <section ref={refs.testimonial.testimonialRef} className={'py-10 pb-0'}>
            <div className='container-none m-auto'>
                <div className={'flex flex-col md:h-[80vh]'}>
                    <h2 className={`text-center text-2xl md:text-3xl uppercase font-bold mb-10 ${proza.className}`}>What Client Says</h2>
                    <div className='relative h-full flex flex-col'>
                        <div className='h-96 md:h-full'>
                            <Map
                                id="map"
                                mapboxAccessToken={REACT_MAPBOX_TOKEN}
                                scrollZoom={false}
                                initialViewState={{
                                    longitude: 70.3239595,
                                    latitude: 27.8406487,
                                    zoom: 0.7,
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
                                            <MdEmojiPeople size={32} color={colorState === 'dark' ? '#fff' : colors.primary}></MdEmojiPeople>
                                        </Marker>
                                    })
                                }
                                {
                                    popupInfo?.geometry && <Popup
                                        longitude={popupInfo.geometry.coordinates[0]}
                                        latitude={popupInfo.geometry.coordinates[1]}
                                        // anchor="bottom"
                                        closeButton={false}
                                        onClose={() => setPopupInfo(null)}
                                        offset={30}
                                        className='p-0'
                                    >
                                        <div className='bg-white-300 dark:bg-black-300 px-4 py-3'>
                                            <h3 className='uppercase mb-2 font-bold text-base'>{popupInfo.properties.name}</h3>
                                            <p className='text-sm'>{popupInfo.properties.message}</p>
                                        </div>
                                    </Popup>
                                }
                            </Map>
                        </div>
                        <div className='md:absolute md:bottom-10 p-10 bg-white-300 bg-opacity-40 backdrop-blur-md rounded-2xl overflow-hidden md:-translate-y-1/2 md:right-10 dark:bg-black-300 max-w-lg'>
                            <h3 className={`text-xl font-bold uppercase mb-2 ${proza.className}`}>{`Let’s work together`}</h3>
                            <p className={`text-base font-normal mb-6 ${sansFont.className}`}>{`Do you like my portfolio design? let's make something great out of the box together !! `}</p>
                            <button className={`${proza.className} rounded-full bg-white-600 px-6 py-2 font-base text-primary font-[400] hover:bg-primary hover:text-white-600 transition-all duration-300`} onClick={onHireClick}>Hire Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
