const ProjectObject = ({ proDate, proTitle, proTitle2, proText, proSVG, proCenterSVG, proLink, SVG1, SVG2, SVG3, SVG4, SVG5, SVG6, SVG7}) => {
    

    return (
        <>
            <div className="relative">
                <div className="md:flex items-center md:space-x-4 mb-3">
                    <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                        {/* <!-- Icon --> */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                        
                        {/* centerSVG HERE */}
                            {proCenterSVG}
                            {/* centerSVG HERE */}

                        </div>
                        {/* <!-- Date --> */}
                        <time className="font-caveat font-medium text-l text-indigo-800 md:w-28">{proDate}</time>
                    </div>
                    {/* <!-- Title --> */}
                    <div className="text-slate-500 ml-14"><button className="text-slate-900 font-bold"><a href={proLink}>{proTitle}</a></button>
                        <div className="flex items-center">
                            <h1>{proTitle2}</h1>
                            {proSVG} {/* Icon for company */}
                        </div>
                    </div>
                    
                </div>
                {/* <!-- Card --> */}
                <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow">
                    <p>{proText}</p>
                    <div className="flex bg-white p-4 rounded border border-slate-200 text-slate-500 shadow">
                    {SVG1}
                    {SVG2}
                    {SVG3}
                    {SVG4}
                    {SVG5}
                    {SVG6}
                    {SVG7}

                    </div>
                </div>
            </div>
        </>
    );
    }
    

export default ProjectObject;