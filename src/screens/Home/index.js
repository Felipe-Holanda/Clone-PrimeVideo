import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import PrimeVideoLogo from '../../assets/prime_video.png';
import AmazonLogo from '../../assets/amazon_logo.png';
import MovieTheWheel from '../../assets/movies/the_wheel_of_time.png';
import { MOVIESWATCH } from '../../utils/moviesWatch';
import { MOVIESCRIME } from '../../utils/moviesCrimes';
import { MOVIESWATCHING } from '../../utils/moviesWatching';
import MoviesCards from '../../components/MoviesCards';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.primeLogoImg} source={PrimeVideoLogo} />
                <Image style={styles.amazonLogoImg} source={AmazonLogo} />
            </View>
            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText} >Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText} >TV Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText} >Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText} >Kids</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                showVerticalScrollIndicator={false}
            >
                <TouchableOpacity style={styles.movieImageThumbnail} >
                    <Image source={MovieTheWheel} style={styles.movieImage} />
                </TouchableOpacity>
                <Text style={{ marginLeft: 10, fontSize: 18, color: '#fff', fontWeight: '700' }} >Keep Watching</Text>
                <FlatList style={{ marginTop: 10, marginLeft: 10 }}
                    data={MOVIESWATCHING}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MoviesCards name={item.name} moviesURL={item.moviesURL} />}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showHorizontalScrollIndicator={false}
                />

                <Text style={{ marginLeft: 10, fontSize: 18, color: '#fff', fontWeight: '700' }} >Movies to Watch</Text>
                <FlatList style={{ marginTop: 10, marginLeft: 10 }}
                    data={MOVIESCRIME}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MoviesCards name={item.name} moviesURL={item.moviesURL} />}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showHorizontalScrollIndicator={false}
                />

                <Text style={{ marginLeft: 10, fontSize: 18, color: '#fff', fontWeight: '700' }} >Movies to Watch</Text>
                <FlatList style={{ marginTop: 10, marginLeft: 10 }}
                    data={MOVIESWATCH}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MoviesCards name={item.name} moviesURL={item.moviesURL} />}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showHorizontalScrollIndicator={false}
                />
            </ScrollView >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232f3e',
        alignItems: 'flex-start',
    },
    header: {
        width: '100%',
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    amazonLogoImg: {
        marginTop: -40,
        marginLeft: 30,
    },
    category: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30,
        marginBottom: 15,
    },
    categoryText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '700',
    },
    movieImageThumbnail: {
        width: '100%',
        alignItems: 'center',
    }
})