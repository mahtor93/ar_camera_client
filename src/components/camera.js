import '../App.css'
import React, { Component } from "react";
import QrReader from 'react-qr-scanner'
let textResult = 'Nada escaneado';

class QrContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            result:'Manten el QR en la pantalla',
            isCamaraActive: this.props.isCameraActive // Usar directamente this.props.isCameraActive en el estado
        }
        this.handleScan = this.handleScan.bind(this);
    }

    handleScan(result){
        this.setState({
            result: result
        });
        
        if(result){
            textResult = result.text;
            console.log(textResult);
        }

        return result;
    }

    handleError(err){
        console.error(err)
    }

    toggleCamera = () =>{
        this.setState(prevState =>({
            isCamaraActive: !prevState.isCamaraActive
        }))
    }

    render(){
        return(
            <React.Fragment>
                <button className="btn-cam" onClick={this.toggleCamera}>
                        {this.state.isCamaraActive ? 'Apagar Cámara' : 'Encender Cámara'}
                </button>
                <div className="cam-space">
                    {this.state.isCamaraActive && (
                        <QrReader
                            delay={100}
                            onError={this.handleError}
                            onScan={this.handleScan}
                        />
                    )}
                </div>

                <p className="codigo-escaneado">
                    {textResult}
                </p>
            </React.Fragment>
        )
    }
}

export default QrContainer;

/*                    <button onClick={this.toggleCamera}>
                        {this.state.isCamaraActive ? 'Apagar Cámara' : 'Encender Cámara'}
                    </button>
 */