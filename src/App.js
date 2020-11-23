import React from "react";
import { connect } from "react-redux";

import "./App.css";

//Components
import Title from "./Component/Title/Phonebook";
import ContactForm from "./Component/ContactForm/ContactForm";
import ContactList from "./Component/ContactList/ContactList";
import Filter from "./Component/Filter/Filter";
import Section from "./Component/Section/Section";

function App({ value, filter }) {
  return (
    <Section>
      <Title />
      <ContactForm />
      <ContactList />
      {(value.length > 1 || filter) && <Filter />}
    </Section>
  );
}

const mapStateToProps = (state) => ({
  value: state.contacts.items,
  filter: state.contacts.filter,
});

export default connect(mapStateToProps)(App);
