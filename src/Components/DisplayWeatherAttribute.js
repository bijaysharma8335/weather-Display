import React from "react";
import styled from "styled-components";

const Main = styled.div`
    margin-top: 2em;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 4px 10px 8px 10px;
    border-radius: 20px;
    width: 90%;
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px dashed #fff;
`;

const WeatherDetail = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

const DisplayWeatherAttribute = ({ weather }) => {
    return (
        <Main>
            <WeatherDetail>
                <div>
                    <Flex>
                        <h4>High/Low</h4>
                        <span>
                            {Math.floor(weather.main.temp_max - 273.15)}/
                            {Math.floor(weather.main.temp_min - 273.15)}
                        </span>
                    </Flex>

                    <Flex>
                        <h4>Humidity</h4> &nbsp;
                        <span>{weather.main.humidity} %</span>
                    </Flex>

                    <Flex>
                        <h4>Pressure</h4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>{weather.main.pressure} hPa</span>
                    </Flex>

                    <Flex>
                        <h4>Visibility</h4> <span>{weather.visibility / 1000} Km</span>
                    </Flex>
                </div>

                <div>
                    <Flex>
                        <h4>Wind</h4> <span>{Math.floor((weather.wind.speed * 18) / 5)} km/hr</span>
                    </Flex>

                    <Flex>
                        <h4>Wind Direction</h4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>
                            {weather.wind.deg}
                            <sup>o</sup> deg
                        </span>
                    </Flex>

                    <Flex>
                        <h4>Sunrise</h4>
                        <span>{new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</span>
                    </Flex>

                    <Flex>
                        <h4>Sunset</h4>
                        <span>{new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</span>
                    </Flex>
                </div>
            </WeatherDetail>
        </Main>
    );
};

export default DisplayWeatherAttribute;
