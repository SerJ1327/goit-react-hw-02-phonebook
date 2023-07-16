export const ContactList = ({ filter, deleteContact }) => {
  return (
    <div>
      {filter.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={e => deleteContact(contact.id)} type="button">
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};
