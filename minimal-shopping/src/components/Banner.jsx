import personImg from '../assets/images/person.png';

function Banner() {
    return (
        <section className="banner">
            <div className="banner-content">
                <h1>Minimal shopping experience</h1>
                <p>Get 50% Off on<br />Selected categories</p>
                <img src={personImg} alt="Person image" className='banner-right-person'/>
                <img src={personImg} alt="Person image" className='banner-left-person'/>
            </div>
        </section>
    )
}

export default Banner;