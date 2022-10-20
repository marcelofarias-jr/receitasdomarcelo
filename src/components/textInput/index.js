

export default function InputText({ searchValue, handleChange }) {

  return(
    <input
    className="text-input"
    onChange={handleChange}
    value={searchValue}
    type="search"
    placeholder="Pesquise sua receita"
  />
  );
}
