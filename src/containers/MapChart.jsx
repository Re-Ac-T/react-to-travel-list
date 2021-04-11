import React, { memo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const markers = [
    { markerOffset: -30, name: "Asia", coordinates: [140, 20] },
    { markerOffset: -30, name: "North America", coordinates: [-140, 5] },
    { markerOffset: -30, name: "South America", coordinates: [-120, -30] },
    { markerOffset: -30, name: "Africa", coordinates: [0, -15] },
    { markerOffset: -30, name: "Europe", coordinates: [15, 70] },
  ];

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const MapChart = ({ setTooltipContent }) => {
  const [selectedKey, setSelectedKey] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState({
    'Asia' : [
      
    ],
    'North America' : [
      
    ],
    'South America' : [
      
    ],
    'Africa' : [
      
    ],
    'Europe' : [
      
    ]
  });
  
  const makerOnClick = (name)=>{
    console.log(name)
  }

                  console.log(selectedCountries);

  return (
    <>
      <h1>To-Travel List</h1>

      <ComposableMap data-tip="" projectionConfig={{ scale: 150 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) => 
            geographies.map(geo => ( selectedKey.find(a => a === geo.rsmKey) === geo.rsmKey ?   // [IF문] 선택된 Geography 컴포넌트의 키값을 selectedKey 배열에 있는지 확인하여, 지도에 색상을 달리하여줌
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  const { NAME, POP_EST } = geo.properties;
                  setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                onClick={(e) => {
                  setSelectedKey(selectedKey.filter(a => a !== `${geo.rsmKey}`));     // 선택된 Geography 컴포넌트의 키값을 selectedKey 배열에서 제거
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
              />:
              <Geography
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={() => {
                const { NAME, POP_EST } = geo.properties;
                setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
              }}
              onMouseLeave={() => {
                setTooltipContent("");
              }}
              onClick={(e) => {
                setSelectedKey(selectedKey.concat(geo.rsmKey));     // 선택된 Geography 컴포넌트의 키값을 selectedKey 배열에 추가
                var CountryNum = (geo.rsmKey.match(/\d/g)).join('');
                var CountryList = [];
                CountryList.push(geographies[CountryNum].properties.NAME);
                // setSelectedCountries(selectedCountries.concat(geographies[CountryNum].properties.NAME));     // 선택된 Geography 국가 번호를 selectedCountries 배열에 추가 (To travel list 연동)
                setSelectedCountries({
                  ...selectedCountries,
                  [geographies[CountryNum].properties.CONTINENT] : CountryList
                });
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
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates} onClick={()=>{makerOnClick(name)}}>
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

export default memo(MapChart);
