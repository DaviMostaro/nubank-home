import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Screen() {
    return (
        <View style={styles.container}>
            <Text>Opa, tudo bem?</Text>

            <Link href="/" asChild>
                <Pressable style={styles.button}>
                    <Text>Ir para home</Text>
                </Pressable>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 200,
        height: 40,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
});