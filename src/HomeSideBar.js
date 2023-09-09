import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import NewNoteForm from "./NewNoteForm";
import './HomeSideBar.css'

const HomeSideBar = () => {
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
      <NewNoteForm />
    </Sidebar>
    // <Sidebar.Pusher>
    //   <Segment basic>
    //     <Header as='h3' textAlign="center">Application Content</Header>
    //     <Image src='https://images.unsplash.com/photo-1693845886349-54208259fe49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80' size="massive" />
    //   </Segment>
    // </Sidebar.Pusher>
    // </Sidebar.Pushable>
  );
};

export default HomeSideBar;
