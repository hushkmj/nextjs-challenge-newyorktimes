import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

interface IListParams {
    results: {
        bestsellers_date: string,
        books: [{
            rank: string,
            amazon_product_url: string,
            book_image: string,
            title: string,
            author: string,
        }],
        corrections: [],
        display_name: string,
        list_name: string,
        list_name_encoded: string,
        next_published_date: string,
        normal_list_ends_at: number,
        previous_published_date: string,
        published_date: string,
        published_date_description: string,
        updated: string,
    }

}

export default function List({ results }: IListParams) {
    console.log(results);
    const route = useRouter();
    const onClick = (url: string) => {
        window.open(url, '_blank');
    }
    return (
        <div className="contents">
            <section className="title">
                {results.list_name}
            </section>
            <section className="list">
                {results.books.map((book) => (
                    <div key={book.rank} className="list__item">
                        <div className="list__item__img">
                            <img src={book.book_image} />
                        </div>
                        <div className="list__item__info">
                            <div>
                                <span>Title: </span>
                                <span>{book.title}</span>
                            </div>
                            <div>
                                <span>Author: </span>
                                <span>{book.author}</span>
                            </div>
                        </div>
                        <div className="list__item__buy" onClick={() => onClick(book.amazon_product_url)}>Buy</div>
                    </div>
                ))}
            </section>
            <style jsx>{`
                .list{
                    display: grid;
                    grid-template-columns: repeat(4,1fr);
                    gap: 20px;
                }
                .list__item{
                    border: 2px solid whitesmoke;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .list__item__img{
                    width: 100%;
                    height: auto;
                }
                .list__item__img img{
                    width: 100%;
                    height: 600px;
                }
                .list__item__info {
                    width: 100%;
                    height: 50px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin: 10px;
                }
                .list__item__info div{
                    padding: 0 10px;
                    font-size: 18px;
                    display: flex;
                    justify-content: space-between;
                }
                .list__item__info div span:nth-child(2) {
                   color: whitesmoke;
                   text-align: right;
                }
                .list__item__buy {
                    width: 100%;
                    background-color: yellow;
                    color: black;
                    font-weight: 600;
                    display: flex;
                    justify-content: center;
                    cursor: pointer;
                }
                .list__item__buy:hover {
                    background-color: orange;
                    color: white;
                }
            `}</style>
        </div>
    );
}


interface IGetServerSidePropsParams {
    params: {
        params: string
    }
}
export async function getServerSideProps({ params: { params } }: IGetServerSidePropsParams) {
    const { results } = await (await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${params}`)).json();
    return {
        props: { results },
    }
}