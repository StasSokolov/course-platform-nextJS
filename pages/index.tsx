import {Button, Htag, Ptag, Rating, Tag} from "../components";
import {useState} from "react";
import {withLayout} from "../layout/Layout";

function Home(): JSX.Element {
        const [rating, setRating] = useState<number>(4);

    return (
        <div>
            <Htag tag='h1'>Текст</Htag>
            <Button appearance='primary'>Узнать подробнее</Button>
            <Button appearance='ghost' arrow='right'>Читать отзывы</Button>
            <Button appearance='ghost' arrow='down'>Читать отзывы</Button>
            <Ptag size='s'>Параграф текста</Ptag>
            <Ptag>Параграф текста</Ptag>
            <Ptag size='xl'>Параграф текста</Ptag>
            <Tag color='grey' size='s'>Photoshop</Tag>
            <Tag color='red' size='m'>Photoshop</Tag>
            <Tag color='grey' size='m'>Photoshop</Tag>
            <Tag color='green' size='s'>Photoshop</Tag>
            <Tag color='primary' size='s'>Photoshop</Tag>
            <Rating rating={rating} setRating={setRating} isEditable/>
        </div>
    );
}

export default withLayout(Home);