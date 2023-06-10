import BookCard from '../components/bookCard';
import './books.css'


const Books = () => {
    return (
        <div className="ramen-list-body fade-page">
            <div className="">
                <div className="page-title">
                    <h1 style={{
                                color: "#ED3D1E"
                                }}>いただきます</h1>
                    <hr style={{
                            background: "#272624",
                            border: "1px solid",
                            height:"1px"
                        }}/>
                    <h1>All Books</h1>
                </div>
                <BookCard />
            </div>
        </div>
    );
}

export default Books;