import {Button, Htag} from "../components";

export default function Home(): JSX.Element {
    return (
        <div>
            <Htag tag='h1'>Текст</Htag>
            <Button appearance='primary'>Узнать подробнее</Button>
            <Button appearance='ghost'>Читать отзывы</Button>
        </div>
    );
}
