import { SafeAreaView, Text, View } from "react-native"
import { ProfileIcon } from "./profile-icon"
import { ButtonIcon } from "./button-icon"

export const Header = () => {
    return (
        <SafeAreaView className="bg-nubank text-white">
            <View className="flex-row justify-between px-4 pt-5">
                <ProfileIcon />
                <View className="flex-row">
                    <ButtonIcon icon="eye-slash" onPress={() => {}} />
                    <ButtonIcon icon="circle-question" onPress={() => {}} />
                    <ButtonIcon icon="message" onPress={() => {}} />
                </View>
            </View>
            <View className="px-4 py-7">
                <Text className="text-white font-bold text-2xl">Olá Cauan</Text>
            </View>
        </SafeAreaView>
    )
}