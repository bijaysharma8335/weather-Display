import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DisplayWeather from "./Components/DisplayWeather";
import DisplayWeatherAttribute from "./Components/DisplayWeatherAttribute";

const Button = styled.button`
    background: rgb(20 119 218);
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid #fff;
    color: white;
    font-size: 18px;
    padding: 6px;
`;

const Input = styled.input`
    padding: 10px;
    background-color: #ebeffb;
    border: none;
    outline: none;
    border: 2px solid #fff;
    color: #000;
    margin-bottom: 20px;
`;
const Container = styled.div`
    margin: 2em auto;
    display: block;
    width: 43%;
    border: 3px solid #fff;
    padding: 0 2em 2em 2em;
    border-radius: 20px;
    @media (max-width: 1000px) {
        margin: 1em auto;
        width: 70%;
    }
`;

const Title = styled.h1`
    text-align: center;
    color: #fff ;
    font-weight: 600;
    font-size: 48px;
    margin-top: 10px;
`;

const Form = styled.form`
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;
const APIKEY = "1ba9e71eaed06fee3c7ca6863af4e9d7";

const App = () => {
    const [weather, setWeather] = useState([]);
    const [formData, setFormData] = useState({ city: "Bangalore", country: "India" });

    const onChangeHandler = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${formData.city},${formData.country}&APPID=${APIKEY}`
            )
            .then((res) => {
                console.log(res.data);
                setWeather(res.data);
            });
    };

    useEffect(() => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${formData.city},${formData.country}&APPID=${APIKEY}`
            )
            .then((res) => {
                console.log(res.data);
                setWeather(res.data);
            });
    }, []);

    console.log(weather);
    return (
        <Container>
            <Title>Weather APP</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={onChangeHandler}
                    required
                />
                <Input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={onChangeHandler}
                    required
                />
                <div>
                    <Button type="submit">Submit</Button>
                </div>
            </Form>

            {weather.length !== 0 && (
                <>
                    <DisplayWeather weather={weather} />
                    <DisplayWeatherAttribute weather={weather} />
                </>
            )}
        </Container>
    );
};

export default App;
