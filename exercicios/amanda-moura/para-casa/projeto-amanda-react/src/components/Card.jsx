import Image from "./Image"
import Text from "./Text"
import Title from "./Title"

function Card (props) {
    return(
        <div>
        <Title text={props.title}/>
        <Text text={props.description}/>
        <Image img={props.image} description={props.imageAlt}/>
        </div>
    )
}

export default Card