import { Grid, GridColumn, GridRow } from "semantic-ui-react"
import Notes from "./Notes"

const NotesList = ({notes}) =>{ 
    return (
        <Grid container stackable columns={3}>
            <GridRow>
            {notes.map((note)=> 
            <GridColumn className="grid-column">
                <Notes 
                    noteName={note.noteName}
                    videoUrl={note.videoUrl} 
                    description={note.description}
                    hour={note.hour}
                    minute={note.minute}
                    seconds={note.seconds} 
                />
            </GridColumn>)
            }
            </GridRow>
        </Grid>

    )
}

export default NotesList