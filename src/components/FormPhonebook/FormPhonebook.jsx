export const FormPhonebook = ({ state, handleSubmit, handleChange }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="handleName">Name</label>
        <input
          type="text"
          name="name"
          id="handleName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          value={state.name}
          required
        />
        <label htmlFor="handleNumber">Number</label>
        <input
          type="tel"
          name="number"
          id="handleNumber"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          value={state.number}
          required
        />
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
