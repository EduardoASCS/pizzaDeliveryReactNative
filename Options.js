import React from 'react'
import { View, Button } from 'react-native'
import menu from './menu'
import style from './style'

export const Sabores = (props) => {
    return (
        menu.sabores.map((sabor, i) => <View style={style.box}>
            <Button onPress={() => props.onClick(sabor)} value={sabor} title={sabor} key={`${i}`} color='#FFB761' />
        </View>)
    )
}

export const Massas = (props) => {
    return (
        menu.massas.map((massa, i) => <View style={style.box} >
            <Button onPress={() => props.onClick(massa)} value={massa} title={massa} key={`${i}`} color='#FFB761' />
        </View>)
    )
}

export const Tamanho = (props) => {
    return (
        menu.tamanho.map((tamanho, i) => <View style={style.box}>
            <Button onPress={() => props.onClick(tamanho)} value={tamanho} title={tamanho} key={`${i}`} color='#FFB761' />
        </View>)
    )
}