import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

export default function MoviesCards(props) {
    return (
        <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 20 }}>
            <Image style={styles.img} alt={"Imagem do título " + props.name} source={props.moviesURL} />
            <Text style={{ color: 'white', textAlign: 'center', margin: 5 }}>{props.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

});