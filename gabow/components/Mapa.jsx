import React, { useState, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import styles from '../styles/Mapas.module.scss'
import Select from 'react-select'
import { useEffect } from 'react'
import axios from 'axios'

const icon = new Icon({
    iconUrl: '/marker.svg',
    iconSize: [50, 50]
})

const Mapa = () => {
    
    const mapRef = useRef();
    const [cord, setCord] = useState([19.472819274952897, -99.14333273147834])
    const [data,setData]=useState([]);
    useEffect(()=>{
        async function getData(){
            const response=await axios.post("/api/services/getPlaces");
            setData(response.data.info);
        }
        getData();
    },[]);  
    const cambiar = selectedOption => {
        const mapC = mapRef.current;
        mapC.flyTo(selectedOption.value, 18, {
            duration: 2
        });
    }
    const onClick=(item)=>{
        const mapa=mapRef.current;
        mapa.flyTo(item.latlng,18,{
            duration:2
        });
    }
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin="" />
            </Head>
            <Select className={styles.buscador}  options={data} onChange={cambiar} placeholder='Buscar'/>
            <div className={styles.container}>
                <MapContainer ref={mapRef} center={cord} zoom={11}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {data.map((item) => (
                        <Marker key={item.id} position={item.value} icon={icon} eventHandlers={{ click: onClick }}>
                            <Popup>
                                {item.label} <br />
                                {item.desc} <br/>
                                {item.direccion}<br/>
                                <Link href={"/Edificio/"+item.label}><button type='button' className={styles.button}>Ir a</button></Link>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </>
    )
}

export default Mapa