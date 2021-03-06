import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar } from 'react-native';
import Button from '../../components/button/Button';


const Inicial = ({ navigation }) => {
    return (
        <SafeAreaView>
            <StatusBar
                barStyle='dark-content'
            />
            <View style={styles.container}>
                <Button text='Cadastrar Ponto' onPress={() => navigation.navigate('Formulario')} />
            </View>
        </SafeAreaView>
    )

}
export default Inicial;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 250
    }
})