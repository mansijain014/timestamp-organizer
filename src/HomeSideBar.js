import { Icon, Menu, Sidebar } from "semantic-ui-react";
import NewNoteForm from "./NewNoteForm";
import './HomeSideBar.css'

const HomeSideBar = ({handleAddNote}) => {
  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible
      className="side-bar"
    >
      <Menu.Item as="a">
        <Icon name="home" />
        Timestamp Organizer
      </Menu.Item>
      <NewNoteForm handleAddNote={handleAddNote} />
    </Sidebar>
  );
};

export default HomeSideBar;
