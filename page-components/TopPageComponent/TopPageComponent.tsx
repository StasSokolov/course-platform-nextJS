import style from './TopPageComponent.module.css';
import {TopPageProps} from "./TopPageComponent.props";
import {Advantages, HhData, Htag, Product, Sort, Tag} from "../../components";
import {TopLevelCategory} from "../../interfaces/page.interface";
import {SortEnum} from "../../components/Sort/Sort.props";
import {useReducer} from "react";
import {sortReducer} from "./sort.reducer";

export const TopPageComponent = ({page, products, firstCategory}: TopPageProps): JSX.Element => {
    const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

    const setSort = (sort: SortEnum) => {
        dispatchSort({ type: sort });
    };

    return (
        <div className={style.wrapper}>
            <div className={style.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products && <Tag color='grey' size='m'>{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort} />
            </div>
            <div>
                {sortedProducts && sortedProducts.map(p => (
                    <Product key={p._id} product={p}/>
                ))}
            </div>
            <div className={style.hhTitle}>
                <Htag tag='h2'>Вакансии - {page.category}</Htag>
                <Tag color='red' size='m'>hh.ru</Tag>
            </div>
            {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
            <div>

            </div>

            {page.advantages && page.advantages.length > 0 &&
            <>
                <Htag tag='h2'>Преимущества</Htag>
                <Advantages advantages={page.advantages}/>
            </>
            }

            {page.seoText && <div className={style.seo} dangerouslySetInnerHTML={{ __html: page.seoText}} />}

            <Htag tag='h2'>Получаемые навыки</Htag>
            {page.tags.map(p => (
                    <Tag key={p} color='primary'>{p}</Tag>
                )
            )}
        </div>
    );
};
