import { createContext, useState} from "react";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    // state
    const [url, setUrl] = useState(null);

    // old url
    // https://amiiboapi.com/api/amiibo
    

    const fetchMonsters = async() => {
        const response = await axios.get('https://mhw-db.com/monsters');
        let info = await response.data;
        console.log('monster list', [info])
        setUrl(info)
    }

    // experiment
    const getMonsterInfo = async(monsterID) => {
        // return fetch(`https://mhw-db.com/monsters/${monsterID}`)
        // .then(response => response.json)
        const response = await axios.get(`https://mhw-db.com/monsters/${monsterID}`)
        let info = await response.data
        setUrl(info)
    }


    // const fetchWeapons = async() => {
    //     const response = await axios.get(`https://mhw-db.com/weapons`);
    //     let info = await response.data;
    //     console.log('monster list', info)
    //     setUrl(info)
    // }

    return (
        <AppContext.Provider
        value={{
            url, setUrl,
            fetchMonsters,
            getMonsterInfo
            // fetchWeapons,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider