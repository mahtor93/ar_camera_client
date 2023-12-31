import React,{useState} from "react";
import CamaraScreen from "./cameraScreen";

function ElBoton(){
    const [isCamaraActive, setCamaraActive] = useState(false);

    const toggleCamera = () => {
        setCamaraActive(prevState => !prevState);
    };

    return(
        <div>
            <CamaraScreen isCamaraActive={isCamaraActive}/>
            <button onClick={toggleCamera}>
                {isCamaraActive?'Apagar cámara':'Encender cámara'}
            </button>
            
        </div>
    );

}

export default ElBoton;