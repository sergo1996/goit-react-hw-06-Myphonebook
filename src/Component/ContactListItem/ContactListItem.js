import React from "react";
import styles from "./ContactListItem.module.scss";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import contactsActions from "c:/Users/serhiy/Desktop/toggle+6.zip/src/redux/contacts/contactsActions";

const ContactListItem = ({ name, number, delCont, theme }) => (
  <li className={theme ? styles.listItem : styles.darck}>
    <p className={styles.contact}>
      <span>{name}:</span> {number}
    </p>

    <button type="button" className={styles.button} onClick={delCont}>
      &#10006;
    </button>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  delCont: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find((item) => item.id === ownProps.id);

  return { ...item, theme: state.contacts.changethem };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  delCont: () => dispatch(contactsActions.deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
