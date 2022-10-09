
import style from "./index.module.css"

const AdvertiseContainer = () => {

    return (
        <div className={style.advetise}>
            <h1>Advertise</h1>
            <div>
                <h3>How can I advertise on your website?</h3>

                <p>
                    Would you like to advertise on our website?
                    You can contact us by sending an email to                    
                         <a href="mailto:contato@savedownhere.com">
                        contato@savedownhere.com
                    </a>
                </p>
                <p>
                    We are looking foward to work with you.
                </p>
            </div>
        </div>
    )
}

export { AdvertiseContainer }