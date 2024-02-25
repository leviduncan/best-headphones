import headphones from '../../assets/hp04.png'
import CTA from '../cta/CTA'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Our Best Headphones Yet.</h1>
                <p>QuietComfort 35 Wireless Headphones</p>
                <CTA theme="light" text="view details"/>
            </div>
            <div className="bg-image">
                <img src={headphones} alt="nice heaphones" />
            </div>
        </div>
    )
}

export default Hero