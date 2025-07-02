import styles from './contact.module.css'
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';

function Contact() {
    return (<>
        <div className={styles.contact}>
            <div id={styles.hero}>
                <NavBar/>
                <h1>Contact</h1>
            </div>
            <p>Have a question, compliment or complaint to share? Would you like to plan an event with us? Just fill out this form!</p>
            <h4>You may also reach us through our phone number or WhatsApp: <a href="https://web.whatsapp.com">+1 999-999-999</a></h4>
            <form>
                <section>
                    <label>Name:</label>
                    <input type='text' required/>
                    <label>Email:</label>
                    <input type='email' required/>
                </section>
                <label>Subject:</label>
                <input type='text' required/>
                <label>Message:</label>
                <textarea required/>
                <button type='submit'>Submit</button>
            </form>
            <Footer/>
        </div>
    </>)
}

export default Contact;