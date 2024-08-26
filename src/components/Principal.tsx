import React, {useState} from "react";
import musculos from "../assets/images/musculos.png";
import maquinas from "../assets/images/maquinas.png";
import ejercicios from "../assets/images/ejercicios.png";
import rutinas from "../assets/images/rutinas.png";
import estrellas from "../assets/images/estrellas.png";
import comentarios from "../assets/images/comentarios.png";
import "../styles/principal.css";

const Card = ({ title, description, image }: { title: string, description: string, image: string }) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <img src={image} alt="imagen fit" />
            <p>{description.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ))}</p>
        </div>
    );
};

export const Principal = () => {
    const [cards] = useState([
        { title: 'Músculos', image: musculos , description: 'GymHouse cuenta con un grafico del cuerpo\n humano en el cual puedes seleccionar\n cualquier musculo y filtrar los ejercicios que \ntrabajan dicho músculo.' },
        { title: 'Equipo', image: maquinas , description: 'GymHouse cuenta con un grafico \n de nuestro equipamiento en el cual\n puedes filtrar los ejercicios por maquina\n o maquina-musculo ' },
        { title: 'Ejercicios', image: ejercicios , description: 'Cuando filtres por maquina o musculo puedes ver una lista de ejercicios con su respectivo\n nombre, video y descripcion' },
        { title: 'Rutinas', image: rutinas , description: 'GymHouse brinda varios tipos de rutinas para que puedas alcanzar tu meta en el gimnacio,\n desde rutinas profecionales hasta rutinas creadas por los mismos usuarios.' },
        { title: 'Estrellas', image: estrellas , description: 'GymHouse fomenta la actividad social brindando calificaciones a las rutinas \n que los mismos usuarios puede hacer.' },
        { title: 'Comentarios', image: comentarios , description: 'GymHouse permite interacturar con los\n demas usuarios, dejando comentarios\n constructivos a las rutinas de los demas\n usuarios.' },
    ]);
    return (
        <main className="main">
            <aside className="aside">
                <h1>GymHouse</h1>
                <p>Transforma tu rutina de ejercicio con nuestra plataforma de gestión para gimnasios, Gymhouse cuenta con: 
                    acceso a rutinas personalizadas, herramientas de seguimiento para alcanzar tus metas fitness y un entorno
                    social en el que puedes interactura con los demas usuarios.
                </p>
            </aside>
            <section className="principal">
                <div className="sectioncards">
                    <h1>Nuestro GymHouse</h1>
                    <div className="card-list">
                        {cards.map((card, index) => (
                            <Card key={index} title={card.title} image={card.image} description={card.description}  />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}