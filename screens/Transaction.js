import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

export default class TransactionScreen extends React.Component {
  // definindo estados
  constructor(props){
    super(props)
    this.state = {
      domState:"normal",
      hasCameraPermissions:null,
      scanned:false,
      scannedData:""
    }
  }

  getCameraPermission = async domState => {
    //extraindo a chave status com seu valor de permissions
    const {status} = await Permissions.askAsync(Permissions.CAMERA)

    // passando o status para o state
    //se status for "granted" usuário deu permissão
    this.setState({
      hasCameraPermissions:status==="granted",
      domState:domState,
      scanned:false
    })

  }

  handleBarCodeScanned = async ({type,data}) =>{
    this.setState({
      scannedData:data,
      domState:"normal",
      scanned:true
    })
  }

  render() {
    const {domState,hasCameraPermissions,scannedData,scanned} = this.state
    if (domState === "scanner") {
      return(
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{hasCameraPermissions ? scannedData : "Solicitar Permissão para a Câmera"}</Text>
        <TouchableOpacity style={[styles.button,{marginTop:25}]} onPress={()=>this.getCameraPermission("scanner")}>
          <Text style={styles.buttonText}>Digitalizador QRCode</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653d4"
  },
  button:{
    width:"43%",
    height:55,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#f48d20",
    borderRadius:15
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 24,
  },
  text:{
    color: "#ffffff",
    fontSize: 15,
  },
  absoluteFillObject:{

  }
})