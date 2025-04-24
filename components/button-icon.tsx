import { Pressable, View } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome6'

type Props = {
    icon: string;
    onPress: () => void;
}
export const ButtonIcon = ({icon, onPress}: Props) => {
    return (
        <Pressable onPress={onPress} className="size-16 justify-center items-center rounded-full">
            <Icon name={icon} size={24} color="white" />
        </Pressable>
    );
}