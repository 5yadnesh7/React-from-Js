import React from 'react';
import "./index.css";
import { recurssiveComp } from '../../molecules/recurssiveComp';
import config from "../../../helpers/config"

const Home = () => {

    return (
        <div>
            {recurssiveComp(config)}
        </div>
    )
}

export default Home