const TimelineObject = ({ cardDate, cardTitle, cardTitle2, cardText1, cardText2, cardText3, cardText4, cardText5, cardText6, cardText7, titleSVG, centerSVG, titleLink}) => {
    

    return (
        <>
            <div className="relative">
                <div className="md:flex items-center md:space-x-4 mb-3">
                    <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                        {/* <!-- Icon --> */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                        
                        {/* centerSVG HERE */}
                            {centerSVG}
                            {/* centerSVG HERE */}

                        </div>
                        {/* <!-- Date --> */}
                        <time className="font-caveat font-medium text-l text-indigo-800 md:w-28">{cardDate}</time>
                    </div>
                    {/* <!-- Title --> */}
                    <div className="text-slate-500 ml-14"><button className="text-slate-900 font-bold"><a href={titleLink}>{cardTitle}</a></button>
                        <div className="flex items-center">
                            <h1>{cardTitle2}</h1>
                            {titleSVG} {/* Icon for company */}
                        </div>
                    </div>
                    
                </div>
                {/* <!-- Card --> */}
                <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
                    <ul>
                        <li>{cardText1}</li>
                        <li>{cardText2}</li>
                        <li>{cardText3}</li>
                        <li>{cardText4}</li> {/* ● */}
                        <li>{cardText5}</li>
                        <li>{cardText6}</li>
                        <li>{cardText7}</li>
                    </ul>
                </div>
            </div>
        </>
    );
    }
    

export default TimelineObject;