import CTA from "../cta/CTA"
import hand from "../../assets/hand.png"

const GetMore = () => {
    return (
        <div className="get-more">
            <div className="content">
            <div className="left-side">
                <div className="cta">
                    <h3 className="cta-title">Get the most out of your headphones.</h3>
                    <div className="cta-body">
                        <p>
                            Take charge of your music and stride along to the beat. High-fidelity audio and legendary noise cancellation work their magic by sealing you in, eliminating distractions, and letting you dive deep into your own rhythm.
                        </p>
                    </div>
                    <CTA theme="light" text="view details" />
                </div>
            </div>
            <div className="right-side">
                <img src={hand} alt="hand holding mobile phone" ></img>
            </div>
            </div>

        </div>
    )
}

export default GetMore