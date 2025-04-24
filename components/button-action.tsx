import { Pressable, Text, View } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome6';

type Props = {
    icon: string;
    label: string;
    onPress: () => void;
    badge?: string;
}
export const ButtonAction = ({icon, label, onPress, badge}: Props) => {
    return (
        <Pressable onPress={onPress} className="w-24">
            <View className="bg-gray-200 size-20 rounded-full justify-center items-center ml-2">
                <Icon name={icon} size={24} color="black" />
            </View>
            {badge && 
                <View className="h-7 -mt-5 bg-nubank rounded items-center justify-center">
                    <Text className="text-white text-center font-semibold">{badge}</Text>
                </View>
            }
            <Text className="mt-3 text-base text-center font-semibold">{label}</Text>
        </Pressable>
    );
}