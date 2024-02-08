import { Navbar } from '../components/NavBar'

export function AboutPage(props){
    return(
        <>
        <Navbar />
        <div>
            <h2>About</h2>
        </div>
        <section>
            <article>
                <p>Imogen Behan-Willett is an aspiring web developer currently based in Brisbane, Australia. 
                    She loves to combine her love of graphical design and coding to create visually engaging websites that combine functionality with a sense of playfulness. 
                    <br/>
                    <br/>
                    Imogen likes to bring a thread of humor to all her works. She is also a comedian, performing and teaching regularly at <a href="https://www.bigforktheatre.com/">Big Fork Theatre</a> when not on tour as one half of improvised comedy duo <a href="https://www.facebook.com/queenandfriend/">Queen and Friend.</a>. 
                </p>
            </article>
        </section>
        </>
    )
}