import { Pressable } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6'

export const ProfileIcon = () => {
    return (
        <Pressable onPress={() => {}} className="size-16 bg-white/40 justify-center items-center rounded-full">
            <Icon name="user" size={24} color="white" />
        </Pressable>
    )
}