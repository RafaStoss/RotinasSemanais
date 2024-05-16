import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({
    cardTarefa: {
        marginTop: 20,
        backgroundColor: '#FFC0CB',
        width: '100vh',
        height: 125,
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius: 10,
        borderColor: '#800000',
        borderWidth: 2,
        flexDirection: 'row',
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
      },  
      textoCard: {
        fontSize: 10,
        marginTop: 5,
        color: '#DC143C' ,
        fontWeight: 'bold',

      },
      imagemCard: {
        width: 60,
        height: 60,
        marginRight: 15,
      },
      tituloCard: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#1d3557',
        color: '#DC143C' ,
      },
      porcentagemCard: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#DC143C',
      },

})

export default estilo;