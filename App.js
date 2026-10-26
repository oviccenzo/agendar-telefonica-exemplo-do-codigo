import {statusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Picker} from "@react-native-picker/picker";
import React,{ useEffect, useState } from 'react';

export default function App(){
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [contatos, setContatos] = useState([]);
}