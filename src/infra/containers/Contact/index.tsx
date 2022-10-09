import style from "./index.module.css"

const ContactContainer = () => {

    return (
        <div className={style.contact}>
            <h1>Contact</h1>
            <div>
                <h3>How can I contact you?</h3>
                <p>
                    Do you have any questions or suggestions? You can contact us by sending an email to 
                    <a href="mailto:contato@savedownhere.com">
                        contato@savedownhere.com
                    </a>
                </p>

                <p>
                    You can inform us about any problems you have encountered while using our system.
                    We are always looking for ways to improve our system and we will be happy to receive your feedback.
                </p>
            </div>
        </div>
    );

}

export { ContactContainer };