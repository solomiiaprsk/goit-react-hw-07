import css from "./App.module.css";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/Searchbox";

function App() {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
