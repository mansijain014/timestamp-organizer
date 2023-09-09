import { Button, Card, Icon, Image } from "semantic-ui-react"

const Notes = (props) => {
    const {noteName,videoUrl,timestampName,hour,minute,seconds} = props
    return (
        <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{noteName}</Card.Header>
      <Card.Meta>
        <span className='date'>{videoUrl}</span>
      </Card.Meta>
      <Card.Description>
        {timestampName}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='blue'>
            View
          </Button>
          <Button basic color='green'>
            Edit
          </Button>
        </div>
      </Card.Content>
        </Card>
    )
}

export default Notes