import { createContext, useState} from "react";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    // state
    const [url, setUrl] = useState(null);

    const fetchMonsters = async() => {
        const response = await axios.get(`https://mhw-db.com/monsters`);
        let info = await response.data.results;
        console.log('monster list', info)
        setUrl(info)
    }

    const fetchWeapons = async() => {
        const response = await axios.get(`https://mhw-db.com/weapons`);
        let info = await response.data.results;
        console.log('monster list', info)
        setUrl(info)
    }




    return (
        <AppContext.Provider
        value={{
            url, setUrl,
            fetchMonsters,
            fetchWeapons,

        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider