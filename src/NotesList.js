import { Button, Grid, GridColumn, GridRow, Header, Icon, Segment } from "semantic-ui-react";
import Notes from "./Notes";

const NotesList = ({ notes }) => {
  return notes.length !== 0 ? (
    <Grid container stackable columns={3}>
      <GridRow>
        {notes.map((note) => (
          <GridColumn className="grid-column">
            <Notes
              noteName={note.noteName}
              videoUrl={note.videoUrl}
              description={note.description}
              hour={note.hour}
              minute={note.minute}
              seconds={note.seconds}
            />
          </GridColumn>
        ))}
      </GridRow>
    </Grid>
  ) : (
    <Segment placeholder className="initial-card">
    <Header icon>
      <Icon name='sticky note' />
      A place for all your timestamp notes.
    </Header>
    <a href="https://www.youtube.com/watch?v=BQdZNg-sy8A/" target="_blank" rel="noreferrer">
        <Button primary>Learn More</Button>
    </a>
  </Segment>
  );
};

export default NotesList;
