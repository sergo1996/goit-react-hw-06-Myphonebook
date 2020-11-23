//Core
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";

//Styles
import styles from "./Section.module.css";

class Section extends React.Component {
  render() {
    return (
      <section
        className={this.props.theme === true ? styles.light : styles.dark}
      >
        <div className={styles.themeSelector}>
          <span className={styles.label}>Theme: </span>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={this.props.theme}
              onChange={() => this.props.toggleTheme(!this.props.theme)}
            />
            <span className={styles.slider}></span>
          </label>
        </div>

        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  children: PropTypes.node.isRequired
};

const mapStateToProps = (state) => ({
  theme: state.contacts.changethem
});
const mapDispatchToProps = {
  toggleTheme: contactsActions.handleChangetheme
};

export default connect(mapStateToProps, mapDispatchToProps)(Section);

// //Core
// import React from "react";
// import PropTypes from "prop-types";

// //Styles
// import styles from "./Section.module.css";

// class Section extends React.Component {
//   state = {
//     theme: true
//   };

//   toggleTheme = () => this.setState((prev) => ({ theme: !prev.theme }));

//   render() {
//     return (
//       <section
//         className={this.state.theme === true ? styles.light : styles.dark}
//       >
//         <div className={styles.themeSelector}>
//           <span className={styles.label}>Theme: </span>
//           <label className={styles.switch}>
//             <input
//               type="checkbox"
//               checked={this.state.theme}
//               onChange={this.toggleTheme}
//             />
//             <span className={styles.slider}></span>
//           </label>
//         </div>
//         {this.props.children}
//       </section>
//     );
//   }
// }

// Section.propTypes = {
//   children: PropTypes.node.isRequired
// };
// export default Section;
