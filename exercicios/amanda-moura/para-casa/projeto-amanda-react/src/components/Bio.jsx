import Image from "./Image"
import Text from "./Text"
import Title from "./Title"

import falida from '../assets/falida.jpeg'

function Bio (props) {
    return(
        <div>
        <Title text="As vezes meio leiga"/>
        <Text text="As vezes meio lenta"/>
        <Text text="Falinda"/>
        <Image img={falida} description="falida"/>
        </div>
    )
}

export default Bio