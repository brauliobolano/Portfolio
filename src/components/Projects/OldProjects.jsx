const OldProjects = () => {
    const classLI = "mx-5";
    return (
        <div className="">
        <h1 className="mt-10 mb-5 flex justify-center text-4xl">Old Projects</h1>
        <div>
        <ul className="sm:flex justify-center">
            <li className={classLI}>
                <a href="https://brauliobolano.github.io/the-biggest-startup-event-of-the-year/">
                    TheBiggestStartupEvent
                </a>
            </li>
            <li className={classLI}>
                <a href="https://brauliobolano.github.io/CatPhotoAppfreeCodeCamp/">
                    CatPhotoApp
                </a>
            </li>
            <li className={classLI}>
                <a href="https://brauliobolano.github.io/CafeMenufreeCodeCamp/">
                    CafeMenu
                </a>
            </li>

        </ul>
        <ul className="sm:flex justify-center">
        <li className={classLI}>
                <a href="https://brauliobolano.github.io/ColorMarkersfreeCodeCamp/">
                    ColorMarkers
                </a>
            </li>
            <li className={classLI}>
                <a href="https://github.com/brauliobolano/RegistrationFormfreeCodeCamp">
                    RegistrationForm
                </a>
            </li>
            <li className={classLI}>
                <a href="https://brauliobolano.github.io/NutritionLabelFreeCodeCamp/">
                    NutritionLabel
                </a>
            </li>
        </ul>
        </div>
        
        </div>
    );
    }

export default OldProjects;