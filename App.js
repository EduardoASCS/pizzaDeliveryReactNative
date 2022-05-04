import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, Button, Alert } from 'react-native';
import style from './src/style';
import menu from './src/menu';
import { Massas, Sabores, Tamanho } from './src/Options';

const App = () => {
  const [sabor, setSabor] = useState([]);
  const [massa, setMassa] = useState('');
  const [tamanho, setTamanho] = useState('');

  const pizzaSabor = ( target ) => {
    if (sabor.includes(target)) {
      setSabor(sabor.filter(item => item !== target))
    } else {
      setSabor(prev => [target, ...prev]);
    }
  }

  const pizzaMassa = (target) => {
    if (massa === target) {
      setMassa('');
    } else {
      setMassa(target);
    }
  }

  const pizzaTamanho = (target) => {
    if (tamanho === target) {
      setTamanho('');
    } else {
      setTamanho(target);
    }
  }

  const Limpar = () => {
    setSabor([]);
    setMassa('');
    setTamanho('');
  }

  const realizarPedido = () => {
    Alert.alert('Pedido realizado com sucesso', `Pizza de ${sabor} com massa ${massa} no tamanho ${tamanho}!`)
  }

  return (
    <SafeAreaView style={style.page} >
      <Text style={style.title}>Pizzaria do Estágiário</Text>

    <View style={style.subTitle2}>
      <Text style={style.subTitle2}>Seu pedido</Text>
      <Text style={style.subTitle2} >Sabor:  {sabor.join(', ')}</Text>
      <Text style={style.subTitle2} >Tipo de massa:  {massa}</Text>
      <Text style={style.subTitle2} >Tamanho:  {tamanho}</Text>
    </View>

      <Text style={style.subTitle1}>Sabores:</Text>
      <View style={style.content}>
        <Sabores onClick={pizzaSabor} value='calabresa' />
      </View>

      <Text style={style.subTitle}>Massas:</Text>
      <View style={style.content}>
        <Massas onClick={pizzaMassa} />
      </View>

      <Text style={style.subTitle}>Tamanho:</Text>
      <View style={style.content}>
        <Tamanho onClick={pizzaTamanho} />
      </View>

      <View style={{ paddingBottom: 8}}>
      <Button title='Limpar' onPress={Limpar} />
      </View>

      <Button title='finalizar pedido' onPress={realizarPedido} />
    </SafeAreaView>
  )
};

export default App;