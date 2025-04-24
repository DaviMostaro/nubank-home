import { ButtonAction } from "components/button-action";
import { ButtonCard } from "components/button-card";
import { ButtonGeneral } from "components/button-general";
import { Header } from "components/header";
import { useColorScheme, vars } from "nativewind";
import { Button, ScrollView, Text, View } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome6';

export default function Screen() {


    return (
        <ScrollView className="h-screen bg-white">
            <Header />

            <ButtonCard title="Conta" onPress={() => {}}>
                <Text className="text-3xl font-semibold">R$ 1.000,00</Text>
            </ButtonCard>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <ButtonAction icon="pix" label="Pix" onPress={() => {}} />
                <ButtonAction icon="barcode" label="Pagar" onPress={() => {}} />
                <ButtonAction icon="hand-holding-dollar" label="Pegar emprestado" badge="R$ 12.300" onPress={() => {}} />
                <ButtonAction icon="money-bill-transfer" label="Transferir" onPress={() => {}} />
                <ButtonAction icon="receipt" label="Depositar por boleto" onPress={() => {}} />
                <ButtonAction icon="money-bill-trend-up" label="Investir" onPress={() => {}} />
                <ButtonAction icon="money-bill" label="Sacar" onPress={() => {}} />
                <ButtonAction icon="credit-card" label="Cartão" onPress={() => {}} />
            </ScrollView>

            <View className="px-4 py-6">
                <ButtonGeneral onPress={() => {}}>
                    <View className="flex-row items-center">
                        <Icon name="credit-card" size={32} color="black" />
                        <Text style={{marginLeft: 16}} className=" text-xl font-semibold">Meus Cartões</Text>
                    </View>
                </ButtonGeneral>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4" style={{marginRight: 14}}>
                <View style={{width: 288, marginRight: 14}} className="w-72">
                    <ButtonGeneral onPress={() => {}}>
                        <View className="flex-row flex-wrap gap-x-1">
                            <Text className="text-lg">Você tem</Text>
                            <Text className="font-semibold text-lg">R$ 12.300,00</Text>
                            <Text className="text-lg">disponiveis para empréstimo</Text>
                        </View>           
                    </ButtonGeneral>
                </View>
                
                <View style={{width: 288}} className="w-72">
                    <ButtonGeneral onPress={() => {}}>
                        <Text className="font-semibold text-nubank text-lg">Guarde seu dinheiro aqui</Text>
                        <Text className="text-lg">Toque para saber mais.</Text>  
                    </ButtonGeneral>
                </View>    
            </ScrollView>

            <View className="h-1 bg-gray-200 mt-8"></View>

            <ButtonCard title="Cartão de Crédito" onPress={() => {}}>
                <Text className="text-xl text-gray-600">Fatura atual</Text>
                <Text className="text-2xl font-semibold">R$ 1.094,00</Text>
                <Text className="text-xl text-gray-600">Limite diponível: R$ 5.000,00</Text>
            </ButtonCard>
            
        </ScrollView>
    )
}