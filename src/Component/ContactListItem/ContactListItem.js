import React from "react";
import styles from "./ContactListItem.module.scss";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";

const ContactListItem = ({ name, number, delCont }) => (
  <li className={styles.listItem}>
    <p className={styles.listItemInfo}>{name}:</p>
    <p className={styles.listItemInfo}>{number}</p>
    <button className={styles.btn} onClick={delCont}>
      Delete
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

  return { ...item };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  delCont: () => dispatch(contactsActions.deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
