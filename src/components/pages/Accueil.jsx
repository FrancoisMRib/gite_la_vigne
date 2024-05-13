
// import image1 from "gite-vite/src/img/IMG_20190803_162235.jpg";
import './Accueil.css';

export function Accueil() {
    return (
        <div style={{
            display:'flex',
            flex:'row'
        }}>
            <p>Accueil</p>
            <div>
                <img src="gite-vite/src/img/IMG_20190803_162235.jpg" alt="imageee1"/>
                <p>Légende 1</p>
            </div>
            <div>
                <img src="gite-vite/src/img/IMG_20190803_162256.jpg" alt="image2"/>
                <p>Légende 2</p>
            </div>
            <div>
                <img src="gite-vite/src/img/IMG_20190803_162400.jpg" alt="image3"/>
                <p>Légende 3</p>
            </div>
            <div>
                <p>Bienvenue au Gîte la Vigne !</p><br></br>
                <p>Nous sommes heureux de vous accueillir au sein de</p>
                <p>notre établissement confortable et authentique. En</p>
                <p>espérons que vous passerez un séjour des plus</p>
                <p>agréables et que vous vous sentirez comme chez vous !</p>
            </div>
            <button className="buttonValid">Organiser une réservation</button>
        </div>
    );
}