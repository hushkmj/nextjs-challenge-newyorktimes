import Link from "next/link";

interface IHomeParams {
  results: [
    {
      display_name: string,
      list_name: string,
      list_name_encoded: string,
      newest_published_date: string,
      oldest_published_date: string,
      updated: string
    }
  ]
}

export default function Home({ results }: IHomeParams) {
  return (
    <div className="contents">
      <section className="title">
        The New York Times Best Seller Exploror
      </section>
      <section className="list">
        {results?.map((book) => (
          <div key={book.list_name_encoded} className="list__item">
            <Link href={`/list/${book.list_name_encoded}`}>
              <span>{book.list_name}</span>
            </Link>
          </div>
        ))}
      </section>
      <style jsx>{`
        .list{
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
        }
        .list__item{
          padding: 10px;
          border: 2px solid white;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ffff00f7;
          transition: transform 0.2s ease-in-out;
          cursor: pointer;
        }
        .list__item:hover {
            transform: scale(1.05) translateY(-5px);
        }
        `}</style>
    </div>
  )
}

export async function getServerSideProps() {
  const { results } = await (await fetch(`https://books-api.nomadcoders.workers.dev/lists`)).json();
  return {
    props: {
      results,
    }
  }
}