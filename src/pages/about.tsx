export default function About() {
    return (
        <div className="contents">
            <section className="title">
                About us
            </section>
            <section className="list">
                <p>
                    Welcome to the official explorer for The New York Times Best Seller list explorer.
                </p>
                <p>
                    We hope you enjoy your stay!
                </p>
            </section>
            <style jsx>{`
                .list {
                    border: 2px solid whitesmoke;
                }
                p {
                    margin: 30px;
                }
            `}</style>
        </div>
    );
}