import './wework.css'
import Card from '../../components/Card/Card'
import data from './data'

const Wework = () => {
  return (
    <section id="wework">
        <h2>Why Work With Us</h2>

        <div className="container wework_container">
            {
                data.map((item) => (
                    <Card key={item.id} className={`${item.cardish}`}>
                        <div className="wework_image_container">
                            <div className="wework_image">
                                <img src={item.image} alt="" />
                            </div>
                        </div>
                        <div className="wework_details">
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    </Card>
                ))
            }
        </div>
    </section>
  )
}

export default Wework