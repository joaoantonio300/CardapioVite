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

export const useFetchDocuments = (
  docCollection,
  productSearch = null,
  categorySearch = null,
  uid = null
) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    function loadData() {
      if (cancelled) return;

      setLoading(true);

      const collectionRef = collection(db, docCollection);

      try {
        let q;

        if (productSearch && categorySearch) {
          q = query(
            collectionRef,
            where("name", "==", productSearch),
            where("category", "==", categorySearch)
          );
        } else if (productSearch) {
          q = query(
            collectionRef,
            where("name", "==", productSearch),
            orderBy("createdAt")
          );
        } else if (categorySearch) {
          q = query(
            collectionRef,
            where("category", "==", categorySearch),
            orderBy("createdAt")
          );
        } else {
          q = query(collectionRef, orderBy("createdAt", "desc"));
        }

        onSnapshot(q, (querySnapshot) => {
          setDocuments(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
          setLoading(false);
        });
      } catch (error) {
        console.log(error);
        setError(error.message);

        setLoading(false);
      }
    }

    loadData();
  }, [docCollection, productSearch, categorySearch, uid, cancelled]);

  return { documents, loading, error };
};
