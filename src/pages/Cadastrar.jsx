import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../context/AuthContext";
import { useInsertDocument } from "../hooks/useInsertDocument";
import Layout from "../Layout/Layout";

const title = "Cadastrar";
const subtitle = "Cadastre aqui seu produto!";

const Cadastrar = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument("posts");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setFormError("");
    if (!image) {
      setFormError("Por favor, selecione uma imagem!");
      return;
    }

    try {
      const data = new FormData();
      data.append("file", image);

      const res = await fetch(
        "https://backendcardapio-8c1f.onrender.com/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const file = await res.json();

      console.log(res);

      await insertDocument({
        name,
        category,
        description,
        price,
        imageUrl: file.imageUrl, // caminho da imagem no backend
        uid: user.uid,
      });

      setLoading(false);

      navigate("/");
    } catch (error) {
      console.log("Erro ao cadastrar:", error);
      setFormError("Erro ao salvar o produto.");
    }
  };

  return (
    <>
      <Layout title={title} subtitle={subtitle}>
        {formError && <p className="error">{formError}</p>}
        <div className="flex justify-center min-h-[85vh] border-0">
          <form
            className="flex flex-col mt-20 items-start w-[95%] gap-6"
            action="post"
            onSubmit={handleSubmit}
          >
            <label>
              <h1>Nome</h1>
              <input
                required
                type="text"
                name="name"
                id=""
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              <h1>Categoria</h1>
              <select
                required
                name="categoria"
                id=""
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
                id=""
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <label>
              <h1>Preço</h1>
              <input
                required
                type="number"
                name="price"
                id=""
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </label>
            <label>
              <h1>Imagem do produto</h1>
              <input
                type="file"
                required
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
            <div className="w-full flex flex-col justify-center">
              {!loading && (
                <button className="bg-black text-white rounded-[20px] p-2">
                  Cadastrar
                </button>
              )}
              {loading && (
                <button disabled className="btn">
                  Aguarde...
                </button>
              )}
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Cadastrar;
