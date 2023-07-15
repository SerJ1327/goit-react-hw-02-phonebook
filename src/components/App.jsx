import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';

import { FormPhonebook } from './FormPhonebook/FormPhonebook';

import { ContactList } from './ContactList/ContactList';
import { FilterContacs } from './FilterContacs/FilterContacs';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  createPhoneNumber = data => {
    !this.state.contacts
      ? this.setState({ contacts: [data] })
      : this.setState(prevState => ({
          contacts: [data, ...prevState.contacts],
        }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.createPhoneNumber({
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    });

    this.setState({
      name: '',
      number: '',
    });
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

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleFilter = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <FormPhonebook
            state={this.state}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            createPhoneNumber={this.createPhoneNumber}
          />
        </Section>

        <Section title="Contacts">
          <FilterContacs state={this.state} handleFilter={this.handleFilter} />

          <ContactList state={this.state} filter={this.filterContacts()} />
        </Section>
      </>
    );
  }
}
