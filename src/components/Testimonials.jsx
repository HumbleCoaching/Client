import React from 'react'
import ReactCardCarousel from 'react-card-carousel';


function Testimonials() {

    return (
        <section id="testimonials" className="m-auto p-8 text-center">
            <header>
                <h2 className="text-5xl font-bold">Testimonials</h2>
                <h3 className="m-1 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quia?</h3>
            </header>

            <div className="card-container" style={CONTAINER_STYLE}>
                <ReactCardCarousel autoplay={true} autoplay_speed={5000} spread="wide">
                    {cardContents.map((item, index) => {
                        return <Card
                            key={index}
                            icon={item.icon}
                            name={item.name}
                            title={item.title}
                            message={item.message}
                        />
                    })}

                </ReactCardCarousel>
            </div>

        </section>
    )
}

const Card = ({ icon, name, title, company, relation, message }) => {
    return (
        <div style={CARD_STYLE} className="card relative flex flex-col justify-between p-5 border-2 rounded-lg border-blue-700">
            <div className="icon-holder m-auto rounded-full w-28 h-28 bg-blue-950">
                <img src={icon} alt="" className="rounded-full bg-slate-800" />
            </div>
            <p className="message my-4 text-gray-800"><span className="quotes text-2xl text-blue-700">"</span>{message}<span className="quotes text-2xl text-blue-700">"</span></p>
            <p className="name my-4 text-2xl font-extrabold">{name}</p>
            <p className="title my-2 text-lg text-gray-600">{title}</p>
        </div>
    )
}

const cardContents = [
    {
        icon: "",
        name: "ABCD EFGH",
        title: "Aiusgdfi Sugdfi",
        company: "Sun Garden Pvt Ltd",
        relation: "Business Associate",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quia recusandae aut maiores rerum vel aspernatur nesciunt! Enim, blanditiis itaque hic reiciendis accusamus, tenetur natus sequi repudiandae vitae molestias tempora."
    },
    {
        icon: "",
        name: "PQRS TUVW",
        title: "Aiusgdfi Sugdfi",
        company: "Sun Garden Pvt Ltd",
        relation: "Business Associate",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quia recusandae aut maiores rerum vel aspernatur nesciunt! Enim, blanditiis itaque hic reiciendis accusamus, tenetur natus sequi repudiandae vitae molestias tempora."
    },
    {
        icon: "",
        name: "MNOP QRST",
        title: "Aiusgdfi Sugdfi",
        company: "Sun Garden Pvt Ltd",
        relation: "Business Associate",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quia recusandae aut maiores rerum vel aspernatur nesciunt! Enim, blanditiis itaque hic reiciendis accusamus, tenetur natus sequi repudiandae vitae molestias tempora."
    },
]

const CONTAINER_STYLE = {
    zIndex: -1,
    position: 'relative',
    height: "80vh",
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "middle"
}

const CARD_STYLE = {
    textAlign: 'center',
    background: '#52C0F5',
    color: '#FFF',
    borderRadius: '10px',
    opacity: '100%'
}

export default Testimonials