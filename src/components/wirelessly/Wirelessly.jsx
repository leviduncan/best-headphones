import bigphones from '../../assets/hp03.webp'
import CTA from '../cta/CTA'

const Wirelessly = () => {
    return (
        <div className="wirelessly">
            <div className="title">
                <h3>World-class noise cancellation</h3>
                <h2>Wirelessly.</h2>
                <p>
                Toggle between Quiet and Aware Modes, or create a Custom Mode and adjust outside sound to the moment. The design is iconic and the comfort lasting, while an optional audio cable with an in-line microphone plugs you into sound as bold as you, even without a Bluetooth® connection.
                </p>
            </div>
            <div className="content">
                <div className="h-image">
                    <img src={bigphones} alt="Large Heaphones"></img>
                </div>
                <div className="cta">
                    <h3 className="cta-title">Built for your life.</h3>
                    <div className="cta-body">
                        <p>
                        Take charge of your music and stride along to the beat. High-fidelity audio and legendary noise cancellation work their magic by sealing you in, eliminating distractions, and letting you dive deep into your own rhythm.
                        </p>
                    </div>
                    <CTA theme="dark" text="view details"/>
                </div>
            </div>

        </div>
    )
}

export default Wirelessly