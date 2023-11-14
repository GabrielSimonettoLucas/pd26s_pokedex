import * as React from "react";
import { StyleSheet, View, Text, ScrollView, Button } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize, } from "../GlobalStyles";
import { TextInput } from "react-native-gesture-handler";
import { useEffect, useState} from 'react';
import { initializeApp, apps, lenght } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, ref, onValue, set, update, remove, push, orderByValue, limitToLast, once} from "firebase/database";
import {firebase_db, auth} from '../src/firebaseconfig';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'

async function cadastrarUsuarioFunc(nome, email, senha){
  if (nome !== '' & email !== '' & senha !== ''){
    createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      set(ref(firebase_db, 'usuarios/' + userCredential.user.uid), {
          username: nome,
        });
        console.log('true')
        alert("Usuário:"+nome+" Registrado com sucesso!")
        return true;
    }).catch(() =>{
      alert('invalido')
      return
    })
  }else{
    alert("PREENCHA TODOS OS DADOS CORRETAMENTE!")
    return false;
  }
}

async function logarUsuarioFunc(email, senha){
  signInWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    const user = userCredential.user
    console.log(user)
  }).catch(() =>{
    alert('invalido')
    return
  })
}

async function teste(){
  console.log("teste do balacobaco")
}

async function alternarFavoritoFunc(secao, pokemon_id, pokemon_name){
  if (pokemon_name !== '' && pokemon_id !== ''){
    const verificar = await ref(firebase_db, 'usuarios/'+secao+'/pokemons_fav/'+pokemon_id+'/');
    onValue(verificar, (snapshot) => {
      var datajaexiste = snapshot.val();
        set(ref(firebase_db, 'usuarios/'+secao+'/pokemons_fav/'+pokemon_id), {
        pokemon: pokemon_name,
        });
        alert("Pokemon: "+pokemon_name+" adicionado aos favoritos com sucesso!")
        return      
    });   
  }else{
    alert("Tente Novamente")
    return
  }
}

async function exibirFavoritoFunc(secao){
  const verificar = await ref(firebase_db, 'usuarios/'+secao+'/pokemons_fav/');
  onValue(verificar, (snapshot) => {
    var datajaexiste = snapshot.val();
    console.log(datajaexiste);
    });
}

export {cadastrarUsuarioFunc, logarUsuarioFunc, alternarFavoritoFunc, teste, exibirFavoritoFunc};

    /*

        const verificar = ref(firebase_db, 'usuarios/'+secao+'/pokemons_fav/'+pokemon_id);
      onValue(verificar, (snapshot) => {
        const datajaexiste = snapshot.val();
        if(datajaexiste == null){
          set(ref(firebase_db, 'usuarios/'+secao+'/pokemons_fav/'+pokemon_id), {
            pokemon: pokemon_name,
          });
          //alert("Pokemon: "+pokemon_name+" adicionado aos favoritos com sucesso!")
          return;
        }else{
          console.log("passou aqui")
          remove(ref(firebase_db, 'usuarios/'+secao+'/pokemons_fav/'+pokemon_id));
          //alert ("Pokemon: "+pokemon_name+" foi removido dos favoritos com sucesso");
          return;
        }
      });



    var datajaexiste = 0;
    var y = 0;
    const verificar = ref(firebase_db, 'usuarios/'+secao+'/pokemons_fav');
      onValue(verificar, (snapshot) => {
      datajaexiste = snapshot.val();
      console.log(datajaexiste)
      console.log(snapshot)
    });
    while(true){
      if (datajaexiste == null){
        console.log("aqui, null")
        break;
      }
      if (data[y] == undefined){
        console.log("aqui, undefined")
        break;
      }else{
        const jaexiste = ref(firebase_db, 'usuarios/'+secao+'/pokemons_fav/'+y+pokemon);
        if (data != null){
          const remover = remove(firebase_db, 'usuarios/'+secao+'/pokemons_fav/'+y+pokemon);
          alert (pokemon+" foi removido dos favoritos com sucesso")
          return;
        }
        y++;
      }
    }
  }





    if (pokemon !== ''){
      var data = 0;
      var x = 0;
      const starCountRef = ref(firebase_db, 'usuarios/'+secao+'/pokemons_fav');
        onValue(starCountRef, (snapshot) => {
        data = snapshot.val();
        });
        while(true){
          if (data == null){
            break;
          }
          if (data[x] == undefined){
            break;
          }else{
            x++;
          }
        }
        set(ref(firebase_db, 'usuarios/'+secao+'/pokemons_fav/'+x), {
          pokemon: pokemon,
        });
        console.log('true')
        return true;
    }

    
    const verificar = ref(firebase_db, 'usuarios/'+secao+'/pokemons_fav/'+pokemon);
    onValue(starCountRef, (snapshot) => {
    const info = snapshot.val();
    if(info == null){
      set(ref(firebase_db, 'usuarios/'+secao+'/pokemons_fav'), {
        pokemon: pokemon,
      });
      alert(pokemon+"adicionado aos favoritos com sucesso")
      return;
    }else{
      alert(pokemon+"removido dos favoritos com sucesso")
      return;
    }
  });
  */





/*
//=================================================
const starCountRef = ref(firebase_db, 'email/' );
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data[1])
  console.log(snapshot[1])
});
//=================================================
set(ref(firebase_db, 'users/' + 1), {
  username: 'teste',
  email: 'email',
  profile_picture : 'imageUrl'
});
//=================================================
signInWithEmailAndPassword(auth, 'gasl2801@gmail.com', '28012003')
  .then((userCredential) => {
    const user = userCredential.user
    console.log(user)
  }).catch(() =>{
    alert('invalido')
    return
  })
//=================================================
*/





  /*
  signInWithEmailAndPassword(auth, 'gasl2801@gmail.com', '28012003')
  .then((userCredential) => {
    const user = userCredential.user
    console.log(user)
  }).catch(() =>{
    alert('invalido')
    return
  })





  async function cadastrarUsuarioFunc(nome, email, senha){
    if (nome !== '' & email !== '' & senha !== ''){
      var data = 0;
      var x = 0;
      const starCountRef = ref(firebase_db, 'usuarios/' );
        onValue(starCountRef, (snapshot) => {
        data = snapshot.val();
        });
        //console.log(data)
        while(true){
          if (data == null){
            break;
          }
          if (data[x] == undefined){
            break;
          }else{
            x++;
          }
        }
        set(ref(firebase_db, 'usuarios/' + x), {
          username: nome,
          email: email,
          senha : senha
        });
        console.log('true')
        return true;
    }
    alert("PREENCHA TODOS OS DADOS CORRETAMENTE!")
    return false;
  }
  */
