import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 2em;
    margin-bottom: 2em;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid #fff;
    background-color: #006e98;
    padding: 4px 10px 8px 10px;
    border-radius: 20px;
    width: 90%;
    color: #fff;
`;

const SpanOne = styled.span`
    margin: 0 inherit;
    font-size: 1.5em;
    display: block;
`;
const SpanTwo = styled.span`
    color:  rgb(212 195 195);;
    fontsize: 0.7em;
`;
const SpanThree = styled.span`
    fontsize: 0.8em;
    margin-top: -30px;
    font-weight: bold;
`;

const OuterFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const InnerFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const H1 = styled.h1`
    font-size: 2.9rem;
    margin: unset;
`;
const Image = styled.img`
    width: 100px;
    margin-top: 6px;
`;
const DisplayWeather = ({ weather }) => {
    const iconurl =
        "http://openweathermap.org/img/wn/" +
        `${weather.cod !== 404 ? weather.weather[0].icon : null}` +
        ".png";

    return (
        <Container>
            <SpanOne>
                {weather.name} , {weather?.sys?.country}. Weather
            </SpanOne>
            <SpanTwo>As of {new Date().toLocaleTimeString()}</SpanTwo>
            <OuterFlex>
                <H1>
                    {Math.floor(weather?.main?.temp - 273.15)}
                    <sup>o</sup>
                </H1>
                <InnerFlex>
                    <Image src={iconurl} alt="" />
                    <SpanThree>{weather?.weather[0]?.main}</SpanThree>
                </InnerFlex>
            </OuterFlex>
            <span> {weather?.weather[0]?.description}</span>
        </Container>
    );
};

export default DisplayWeather;
