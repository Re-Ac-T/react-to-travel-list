import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import { useTotravelDispatch, useTotravelNextId, useTotravelState } from "../TotravelContext";

const markers = [
    { markerOffset: -30, code:'as', name: "Asia", coordinates: [140, 20] },
    { markerOffset: -30, code:'na', name: "North America", coordinates: [-140, 5] },
    { markerOffset: -30, code:'sa', name: "South America", coordinates: [-120, -30] },
    { markerOffset: -30, code:'af', name: "Africa", coordinates: [0, -15] },
    { markerOffset: -30, code:'eu', name: "Europe", coordinates: [15, 70] },
  ];

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const WorldMap = ({ setTooltipContent, setplanListPage}) => {
  const totravels = useTotravelState();
  const dispatch = useTotravelDispatch();
  const nextId = useTotravelNextId();
  const selectedCountryList = [];
  for (const key in totravels) {
    for (const element of totravels[key]){
      selectedCountryList.push(element.country);
    }
  }

const makerOnClick = (code, name)=>{
    console.log(name)
    setplanListPage({
        state: true, 
        locationCode: code, 
        locationName: name
    });
  }
  console.log(selectedCountryList);

  return (
    <>
      <ComposableMap data-tip="Click where to visit" projectionConfig={{ scale: 200 }} width={1200} height={900}>
        <Geographies geography={geoUrl} >
          {({ geographies }) => 
            geographies.map(geo => (
              selectedCountryList.find(a => a === geo.properties.NAME) === geo.properties.NAME ?   // [IF문] 선택된 Geography 컴포넌트의 키값을 selectedKey 배열에 있는지 확인하여, 지도에 색상을 달리하여줌
                <Geography
                  key={geo.properties.NAME}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    setTooltipContent(`${NAME}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onClick={(e) => {
                    // setSelectedCountry(selectedCountry.filter(name => name !== `${geo.properties.NAME}`));     // 선택된 Geography 컴포넌트의 키값을 selectedKey 배열에서 제거
                    e.preventDefault();
                    dispatch({
                      type: 'REMOVE',
                      totravel: {
                        id: nextId.current[geo.properties.CONTINENT],
                        continent: geo.properties.CONTINENT,
                        country: geo.properties.NAME,
                        visited: false
                      }
                    });
                    nextId.current[geo.properties.CONTINENT] += 1;
                  }}
                  style={{
                    default: {
                      fill: "#F53",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                /> :
                <Geography
                  key={geo.properties.NAME}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    setTooltipContent(`${NAME}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onClick={(e) => {
                    // setSelectedCountry(selectedCountry.concat(geo.properties.NAME));     // 선택된 Geography 컴포넌트의 키값을 selectedKey 배열에 추가
                    e.preventDefault();
                    dispatch({
                      type: 'ADD',
                      totravel: {
                        id: nextId.current[geo.properties.CONTINENT],
                        continent: geo.properties.CONTINENT,
                        country: geo.properties.NAME,
                        visited: false
                      }
                    });
                    nextId.current[geo.properties.CONTINENT] += 1;
                  }}
                  style={{
                    default: {
                      fill: "#818285",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />)
            )
          }
        </Geographies>          
        {markers.map(({ name, code, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates} onClick={()=>{makerOnClick(code, name)}}>
            <g
              fill="none"
              stroke="#FF5533"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </>
  );
};

export default memo(WorldMap);
