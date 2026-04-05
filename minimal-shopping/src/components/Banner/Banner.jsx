import personImg from '../../assets/images/person.png';
import iconsPattern from '../../assets/images/icons.svg'; 
import './Banner.css';

function Banner() {
    return (
        <section className="banner">
            <div 
                className="banner-pattern" 
                style={{ backgroundImage: `url(${iconsPattern})` }}
            ></div>

            <div className="banner-images">
                <img 
                    src={personImg} 
                    alt="Person Left" 
                    className="img-person banner-left-person" 
                />
            </div>

            <div className="banner-content">
                <p className="banner-title">
                    Get 50% Off on<br />
                    Selected categories
                </p>
            </div>
        </section>
    );
}

export default Banner;