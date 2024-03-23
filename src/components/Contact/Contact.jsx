const Contact = () => {
    return (
        <div>
            <div className="mx-10 sm:mx-24 md:pl-20 ">
                <h1 className="md:text-9xl lg:text-10xl xl:text-11xl sm:text-8xl text-6xl md:mb-2 mb-4 font-serif">Hello.</h1>
                <p className="font-mono text-sm sm:text-base sm:mr-20 md:mr-24 lg:mr-96 lg:pr-24 xl:mr-96 xl:pr-96  "> Need a professionally designed, well structured  website that you can easily manage and maintain? Get in touch
                    <br/>
                    <br/>
                    Email: 
                    <a href="mailto:workportfoliopersonal@gmail.com?subject=Hello&amp;body=Just%20saying%20hello!" className="underline underline-offset-4 px-1 hover:line-through cursor-pointer">work-email.com</a>
                    <br/>
                    Social medias: 
                    <a href="https://www.linkedin.com/in/braulio-bolano-trujillo/" className="underline px-1 hover:line-through cursor-pointer">Linkedin</a>
                    /
                    <a href="https://github.com/brauliobolano" className="underline px-1 hover:line-through cursor-pointer">GitHub</a>
                    /
                    <a href="https://www.buymeacoffee.com/braulio" className="underline px-1 hover:line-through cursor-pointer">Buy-me-a-Coffe</a>
                </p>

            </div>
        </div>
    );
    }

export default Contact;