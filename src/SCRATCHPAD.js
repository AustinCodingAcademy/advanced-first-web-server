import React, { Component } from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';
import ContactForm from './ContactForm';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      contacts: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/contacts')
      .then(resp => {
        this.setState({
          searchText: this.state.searchText,
          contacts: resp.data
        });
      })
      .catch(err => console.log(`Error! ${err}`));
  }

  handleChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  getFilteredContacts() {
    // Remove any white space, and convert the searchText to lowercase
    const term = this.state.searchText.trim().toLowerCase();
    const contacts = this.state.contacts;

    // If our term is an empty string, we want to return all of the contacts
    if (!term) {
      return contacts;
    }

    // Filter will return a new array of contacts, the contacts will
    // be included in the array if the function returns true,
    // and excluded if the function returns false
    return contacts.filter(contact => {
      return contact.name.toLowerCase().search(term) >= 0;
    });
  }

  handleAddContact(attributes) {
    axios.post('http://localhost:4000/contacts', attributes)
      .then(resp => {
        this.setState({
          contacts: [...this.state.contacts, resp.data]
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <ContactForm onSubmit={this.handleAddContact.bind(this)} />
        <SearchBar value={this.state.searchText} onChange={this.handleChange.bind(this)} />
        <ContactList contacts={this.getFilteredContacts()} />
      </div>
    );
  }
}
