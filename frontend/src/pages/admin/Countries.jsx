import ListCountry from "../../components/Country/ListCountry";

const Countries = () => {
  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h1 className="text-center mb-4">Gestión de Países</h1>
        <ListCountry />
      </div>
    </div>
  );
};

export default Countries;
