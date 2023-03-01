import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './Form';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { AiFillPhone } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    this.setState({ contacts: parseContacts });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const filterNormalize = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize)
    );
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler = data => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <div>
        <h1>
          Phonebook <AiFillPhone />
        </h1>
        <ContactForm onSubmit={this.formSubmitHandler} contacts={contacts} />
        <h2>
          Contacts <IoMdContacts />
        </h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.getVisibleContacts()}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}
