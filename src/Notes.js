import { Button, Card } from "semantic-ui-react"

const Notes = (props) => {
    const {noteName,videoUrl,timestampName,hour,minute,seconds} = props
    console.log('URL: ',videoUrl.substring(32))
    return (
        <Card>
            <iframe
                width="290"
                height="150"
                src={`https://www.youtube.com/embed/${videoUrl.substring(32)}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
    <Card.Content>
      <Card.Header>{noteName}</Card.Header>
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