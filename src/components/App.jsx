import { Component } from 'react';
import { Section } from './Section/Section';

import { FormPhonebook } from './FormPhonebook/FormPhonebook';

import { ContactList } from './ContactList/ContactList';
import { FilterContacs } from './FilterContacs/FilterContacs';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  createPhoneNumber = data => {
    !this.state.contacts
      ? this.setState({ contacts: [data] })
      : this.setState(prevState => ({
          contacts: [data, ...prevState.contacts],
        }));
  };

  filterContacts = () => {
    return !this.state.filter
      ? this.state.contacts
      : this.state.contacts.filter(contact =>
          contact.name
            .toLocaleLowerCase()
            .includes(this.state.filter.toLocaleLowerCase())
        );
  };

  handleFilter = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  newState = state => {};

  deleteContact = id => {
    const arr = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: arr, filter: '' });
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <FormPhonebook
            createPhoneNumber={this.createPhoneNumber}
            currentContacts={this.state.contacts}
          />
        </Section>

        <Section title="Contacts">
          <FilterContacs state={this.state} handleFilter={this.handleFilter} />
          <ContactList
            deleteContact={this.deleteContact}
            filter={this.filterContacts()}
          />
        </Section>
      </>
    );
  }
}
