import Container from "react-bootstrap/Container";
import { useForm } from "react-hook-form";


export default function App() {
  


  const { register, handleSubmit } = useForm();
  const onFormSubmit  = data => console.log(data);
  const onErrors = errors => console.error(errors);




  return (
    <div>
      <Container className="mt-5 pt-5">
        <h1 className="text-center mb-5">Form</h1>


<form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
    <label htmlFor="">Name</label>
      <input type="text" name="name" {...register('name',{ required: "Name is required" })} id="" />
  <label htmlFor="">email</label>
  <input type="text" name="email" {...register('email',{ required: "Email is required" })} id="" />
  <label htmlFor="">College</label>
  <input type="college" name="college" {...register('college',{ required: "College is required" })} id="" />
  <button type="submit">Submit</button>
</form>

      </Container>
<hr />

    </div>

  );
}

