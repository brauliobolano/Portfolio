import { useNavigate } from 'react-router-dom';

const Wellcome = () => {
    const navigate = useNavigate();
  return (
    <div className="flex justify-center  grid grid-cols-6 grid-rows-2">
        <div className="col-start-1 col-end-7 lg:col-start-2 md:col-end-5 ml-4 lg:ml-0 mt-20 md:mt-4 lg:mt-8 xl:mt-16 2xl:mt-28">
            <div>
                <h1 className="font-serif italic text-2xl sm:text-4xl md:text-5xl lg:text-6xl ">I'm <span className="font-bold dark:font-outline-2">Braulio Bolano</span></h1>
                {/* <h1>DSDSNDKSDNKSNDKB</h1> */}
            </div>
            <div className="">
                <h1 className="font-serif italic text-2xl md:text-3xl lg:text-4xl ">"Full Stack <span className="font-bold ">Web Developer</span>"</h1>
            </div>
        </div>
        <div className="mr-2 mt-10 md:mt-0 row-start-2 col-start-6 text-4xl md:text-5xl font-serif italic">
            <ul>
                <li className="flex justify-end">
                    <button onClick={() => navigate("/projects")}>Experience</button>
                </li>
                <li className="flex justify-end">
                    <button onClick={() => navigate("/timeline")}>Story</button> 
                </li>
                <li className="flex justify-end">
                    <button onClick={() => navigate("/contact")}>Contact</button>
                </li>
            </ul>
        </div>
    </div>

  );
};

export default Wellcome;