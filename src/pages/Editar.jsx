import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../context/AuthContext";
import { useFetchDocument } from "../hooks/useFetchDocument";
import { useUpdateDocument } from "../hooks/useUpdateDocument";
import Layout from "../Layout/Layout";

const title="Editar";
const subtitle="Está precisando mudar o seu pedido?"

const Editar = () => {
    const {id} = useParams();
    const {document:items} = useFetchDocument("posts", id);

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [formError, setFormError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
  if (items) {
    setName(items.name || "");
    setImage(items.imageUrl || "");
    setCategory(items.category || "");
    setDescription(items.description || "");
    setPrice(items.price || "");
  }
}, [items]);

    const {user} = useAuthValue();

    const {updateDocument, response} = useUpdateDocument("posts");

    const navigate = useNavigate();

   const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setFormError("");

  let imageUrlToSave = items.imageUrl;

  try {
    if (image instanceof File) {
      const imgData = new FormData();
      imgData.append("file", image);
      imgData.append("oldImage", items.imageUrl);

      const res = await fetch("https://backendcardapio-8c1f.onrender.com/upload", {
        method: "PUT",
        body: imgData,
      });

      const file = await res.json();
      if (file.imageUrl) {
        imageUrlToSave = file.imageUrl;
      }
    }

    const data = {
      name,
      category,
      description,
      price,
      image: imageUrlToSave,
    };

    await updateDocument(id, data);
    navigate("/consulta");

  } catch (error) {
    console.error("Erro ao atualizar:", error);
    setFormError("Erro ao salvar o produto.");
  }

  setLoading(false);
};

  return (
    <>
        <Layout
        title={title}
        subtitle={subtitle}
      >
        {formError && <p className="error">{formError}</p>}
        <div className="flex justify-center min-h-[85vh] border-0">
              <form className="flex flex-col mt-20 items-start w-[95%] gap-6" action="post" onSubmit={handleSubmit}>
                <label>
                  <h1>Nome</h1>
                  <input
                    required
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>

                <label>
                  <h1>Categoria</h1>
                  <select
                    required
                    name="categoria"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="" disabled>
                      Escolha a categoria desejada
                    </option>
                    <option value="1">Bebida</option>
                    <option value="2">Lanches</option>
                    <option value="3">Combo</option>
                  </select>
                </label>

                <label>
                  <h1>Descrição</h1>
                  <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </label>

                <label>
                  <h1>Preço</h1>
                  <input
                    required
                    type="number"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                  />
                </label>

                <label>
                  <h1>Imagem do produto</h1>
                  <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </label>

                <div className="w-full flex flex-col justify-center">
                      {!loading && <button className="bg-black text-white rounded-[20px] p-2">Atualizar</button>}
                {loading && (<button disabled className="btn">Aguarde...</button>)}
                </div>
              </form>
            </div>
      </Layout>
    </>
  )
}

export default Editar