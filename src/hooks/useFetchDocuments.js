import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
    collection,
    query,
    orderBy,
    onSnapshot,
    where,
    QuerySnapshot,
} from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, categorySearch = null, uid = null) => {

    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {
        
        async function loadData() {
            if(cancelled) return;

            setLoading(true)

            const collectionRef = await collection(db, docCollection);

            try {
                let q

                 if(search && categorySearch) {
                    q = await query(collectionRef, where("name", "==", search),  where("category", "==", categorySearch),  categorySearch);
                }else if(search) {
                    q = await query(collectionRef, where("name", "==", search), orderBy("createdAt"));
                } else if(categorySearch) {
                    q = await query(collectionRef, where("category", "==", categorySearch), orderBy("createdAt"));

                } else{
                    q = await query(collectionRef, orderBy("createdAt", "desc"));
                }

                if (q)
                await onSnapshot(q, (querySnapshot) => {

                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    );
                    setLoading(false);
                });
            } catch (error) {
                console.log(error)
                setError(error.message);

                setLoading(false);
            }
        }

        loadData();
    },[docCollection, search, categorySearch, uid, cancelled]);

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {documents, loading, error};

};