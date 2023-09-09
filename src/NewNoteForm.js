import { Button, Form, Grid, GridRow, Icon, Menu, Modal } from "semantic-ui-react";
import { useState } from "react";
import "./NewNoteForm.css";

const NewNoteForm = ({handleAddNote}) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    noteName: '',
    videoUrl: '',
    description: '',
    hour: '00',
    minute: '00',
    seconds: '00',
  })

  const handleChange = (event) => {
    // console.log('handle change called',event)
    const {name, value} = event.target
    setFormData((prevState) => 
      { return { 
          ...prevState, 
          [name] : value
        }
    })
  }

  const handleSubmitNote = (event) => {
    event.preventDefault()
    handleAddNote(formData)
    setOpen(false)
    setFormData({
      noteName: '',
      videoUrl: '',
      description: '',
      hour: '00',
      minute: '00',
      seconds: '00',
    })
  }

  const {noteName, videoUrl, description, hour, minute, seconds} = formData
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Menu.Item><Icon name='plus'/>Add a new Timestamp</Menu.Item>}
    >
      <Modal.Header>Add a new Timestamp</Modal.Header>
      {/* {console.log('FORM DATA: ',formData)} */}
      <Form className="add-note-form">
        <Form.Field>
          <label>Would you like to give a name to this timestamp?</label>
          <input placeholder="Enter Name" value={noteName} name='noteName' onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Enter the video link</label>
          <input placeholder="Video Link" value={videoUrl} name='videoUrl' onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Additional notes</label>
          <textarea placeholder="Additional notes..." value={description} name='description' onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Time Stamp</label>
          <Grid>
            <GridRow>
              <Grid.Column width={2}>
                <input
                  type="number"
                  min="0"
                  max="23"
                  placeholder="hh"
                  value={hour}
                  width="5px"
                  name='hour'
                  onChange={handleChange}
                />
              </Grid.Column>
              <div class='colon'>:</div>
              <Grid.Column width={2}>
                <input
                  type="number"
                  min="0"
                  max="59"
                  placeholder="mm"
                  value={minute}
                  name='minute'
                  onChange={handleChange}
                />
              </Grid.Column>
              <div class='colon'>:</div>
              <Grid.Column width={2}>
                <input
                  type="number"
                  min="0"
                  max="59"
                  placeholder="ss"
                  value={seconds}
                  name='seconds'
                  onChange={handleChange}
                ></input>
              </Grid.Column>
            </GridRow>
          </Grid>
        </Form.Field>
      </Form>

      <Modal.Actions>
        <Button
          content="Add Note"
          labelPosition="right"
          icon="plus"
          onClick={handleSubmitNote}
          positive
          type="submit"
        />
      </Modal.Actions>
    </Modal>
  );
};

export default NewNoteForm;
