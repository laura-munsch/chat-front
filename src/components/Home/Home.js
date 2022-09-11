import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="home__container">
        <h1 className="home__title">Bienvenue</h1>

        <p className="home__content">
          Vous serez connecté·e par défaut avec la première personne trouvée
          dans notre base de données, mais vous pourrez vous créer un compte.
        </p>

        <Link to="/chat" className="home__link">
          Accéder au chat
        </Link>
      </div>
    </section>
  );
};

export default Home;
