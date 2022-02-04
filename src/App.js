import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  //console.log(watch("titulo"));
  return (
    <>
      <h1>formulario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="titulo"
          className="from-control y-2"
          defaultValue="Ejemplo Título"
          {...register("titulo")}
        />

        <button className="btn btn-primary">enviar</button>
      </form>
    </>
  );
}

export default App;
