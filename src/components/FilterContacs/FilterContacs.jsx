export const FilterContacs = ({ handleFilter, state }) => {
  return (
    <form>
      <label htmlFor="handleFilter">Find contact by name</label>
      <input
        type="text"
        name="filter"
        id="handleFilter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleFilter}
        value={state.filter}
        required
      />
    </form>
  );
};
