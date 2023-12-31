import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';



function CamaraScreen({isCamaraActive}){
    const[qrCode, setQRCode] = useState('');
    
    const handleScan = (data) =>{
        if(data){
            setQRCode(data);
            console.log(data);
        }
    };
    
    const handleError = (err)=>{
        console.error(err);
    };

    return(
        <div>
            {isCamaraActive?
                (
                    <QrReader
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    facingMode="environment"
                    style={{width:'100%'}}
                    />
                ):(
                    <p>Cámara Desactivada</p>
                )};
                <p>Tu código:</p>
                <p>{qrCode}</p>
        </div>
    );
};

export default CamaraScreen;