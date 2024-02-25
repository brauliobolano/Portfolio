const Wellcome = () => {
  return (
    <div className="flex justify-center text-[40px] grid grid-cols-6">
        <div className="col-start-2 col-end-5 mt-24">
            <div>
                <h1 className="font-serif italic ">I'm <span className="font-bold font-outline-2">Braulio Bolano</span></h1>
                {/* <h1>DSDSNDKSDNKSNDKB</h1> */}
            </div>
            <div className="">
                <h1 className="font-serif italic ">"Full Stack <span className="font-bold">Web Developer</span>"</h1>
            </div>
{/*             <div className="flex">
                <button className="">See my projects</button>
                <button>Contact Me</button>
            </div> */}
        </div>
        <div className="mr-2 col-start-6 text-[50px] font-serif italic">
            <ul>
                <li className="flex justify-end">
                    Projects
                </li>
                <li className="flex justify-end">
                    About
                </li>
                <li className="flex justify-end">
                    Contact
                </li>
            </ul>
        </div>
    </div>

  );
};

export default Wellcome;