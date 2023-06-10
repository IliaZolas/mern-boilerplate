import {PrimaryButton} from "../components/buttons";
import "./home.css"

const Home = () => {
    return (
        <div className="container fade-page">
            <div className="hero-banner">
                    <div className="hero-txt-area">
                        <h1>Books</h1>
                        <p>Create, showm, update and delete books.</p>
                    </div>
                    <PrimaryButton />
                </div>
            </div>
    );
}

export default Home;