import React, { Component } from "react";
import QrReader from 'react-qr-scanner'


class QrContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            result:'Manten el QR en la pantalla'
        }
        this.handleScan = this.handleScan.bind(this)
    }

    handleScan(result){
        this.setState({
            result: result
        });
    }

    handleError(err){
        console.error(err)
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <QrReader
                        delay={100}
                        onError={this.handleError}
                        onScan={this.handleScan}
                    />
                </div>
                <p>
                    {this.state.result}
                </p>

            </React.Fragment>
        )
    }
}

export default QrContainer;