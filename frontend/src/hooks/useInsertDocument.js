import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

//estado inicial do reduces

const initialState = {
    loading:null,
    error: null
}

// funcao que vai ser utilizada para mudar um estado do use reduces
const insertReducer = (state, action) => {

    switch(action.type) {
        case "LOADING":
            return { loading:true, error:null}
        case "INSERTED_DOC":
            return { loading: false, error:false}
        case "ERROR":
            return { loading: false, error: action.payload}
        default:
            return state;
    }
}

export const useInsertDocument = (docCollection) => {

    // nosso useReducer
    const [response, dispatch] = useReducer(insertReducer, initialState);

    // lidar com memory leak
      const [cancelled, setCancelled] = useState(false);
    
        const checkCancelBeforeDispatch = (action) => {
            if(!cancelled) {
                dispatch(action);
            }
        };

        const insertDocument = async(document) => {

            checkCancelBeforeDispatch({
                type: "LOADING",
            });

            try {

                const newDocument = {...document, createdAt: Timestamp.now()}

                const insertedDocument = await addDoc(collection(db, docCollection),
                newDocument
            )

            checkCancelBeforeDispatch({
                type: "INSERTED_DOC",
                payload: insertDocument,
            });
        } catch (error) {

            checkCancelBeforeDispatch({
                type: "ERROR",
                payload: error.message,
            });
        }
    }

  return {insertDocument, response}
}

// procurar entender melhor 