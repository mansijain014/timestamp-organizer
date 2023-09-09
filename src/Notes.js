import { Button, Card, Popup } from "semantic-ui-react"

const Notes = (props) => {
    const {noteName,videoUrl,description,hour,minute,seconds} = props
    // console.log('URL: ',videoUrl.substring(32))
    const timeInSeconds = parseInt(hour)*3600+parseInt(minute)*60+parseInt(seconds)
    // console.log('Time: ',hour,minute,seconds,timeInSeconds)
    return (
        <Card>
            <iframe
                width="290"
                height="150"
                src={`https://www.youtube.com/embed/${videoUrl.substring(32)}?start=${timeInSeconds}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
    <Card.Content>
      <Card.Header>{noteName}</Card.Header>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <div className='ui two buttons'>
          <Popup content='View functionality will be added in future.' trigger={<Button basic color='blue'>
            View
          </Button>} />
          <Popup content='Edit functionality will be added in future.' trigger={<Button basic color='green'>
            Edit
          </Button>} />
        </div>
      </Card.Content>
        </Card>
    )
}

export default Notes