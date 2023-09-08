import { Button, Checkbox, Form, Grid, Header, Modal } from "semantic-ui-react"
import { useState } from "react"
import './NewNoteForm.css'

const NewNoteForm = () => {

    const [open, setOpen] = useState(false)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Start a new Note</Button>}
        > 
        <Modal.Header>Start a new Note</Modal.Header>

<Form className="add-note-form">
    <Form.Field>
      <label>Would you like to give a name to this note?</label>
      <input placeholder='Enter Name' />
    </Form.Field>
    <Form.Field>
      <label>Enter the video link</label>
      <input placeholder='Video Link' />
    </Form.Field>
    <Form.Field>
    <label>Time Stamp(s)</label>
    <Grid>
    <Grid.Column width={9}>      
    <input placeholder='Time Stamp' />
    </Grid.Column>
    <Grid.Column width={3}>
    {/* <input type="time" class="without_ampm" /> */}
    <input type="text" name="duration" id="durationForm" maxlength='8' pattern="^((\d+:)?\d+:)?\d*$"
    title="The amount of seconds, optionally preceded by 
           &quot;minutes:&quot; or by &quot;hours:minutes:&quot; 
           (empty or zero leads to an infinite duration)."
    placeholder="hh:mm:ss (empty for infinite duration)" size='30' />
    </Grid.Column>
    <Grid.Column width={4}>
    <Button>+</Button>
    </Grid.Column>
  </Grid>
      
    </Form.Field>

  </Form>


      <Modal.Actions>
        <Button
          content="Add Note"
          labelPosition='right'
          icon='plus'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
      </Modal>
    )
}

export default NewNoteForm