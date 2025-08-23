import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { updateDoc, doc } from "firebase/firestore";

// aqui uma breve explicacao do uso do usereducer
// O useReducer do React é um hook que serve para gerenciar o estado dos componentes de forma mais estruturada, especialmente quando a lógica de atualização do estado é complexa ou envolve múltiplos sobvalores. Ele é uma alternativa ao usestate

// O estado tem múltiplas propriedades interdependentes
//A ataulização do estado depende das ações específicas( como em um redux simplificado)
// A lógica de atualização do estado é condicional ou complexa

const initialState = {
  loading: null,
  error: null,
};

const updateReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "UPDATED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, erro: action.payload };
    default:
      return state;
  }
};

export const useUpdateDocument = (docCollection) => {
  const [response, dispatch] = useReducer(updateReducer, initialState);

  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispatch = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  const updateDocument = async (id, data) => {
    checkCancelBeforeDispatch({ type: "LOADING" });

    try {
      const docRef = await doc(db, docCollection, id);

      console.log(docRef);

      const updatedDocument = await updateDoc(docRef, data);

      console.log(updateDocument);

      checkCancelBeforeDispatch({
        type: "UPDATE_DOC",
        payload: updateDocument,
      });
    } catch (error) {
      checkCancelBeforeDispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };

  useEffect(() => {
    // return () => setCancelled(true)ç;
  });
  return { updateDocument, response };
};
