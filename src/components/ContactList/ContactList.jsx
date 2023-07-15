export const ContactList = ({ filter }) => {
  return (
    <div>
      {filter.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.id}
        </li>
      ))}
    </div>
  );
};
