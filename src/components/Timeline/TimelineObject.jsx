const TimelineObject = ({ cardDate, cardTitle, cardTitle2, cardText1, cardText2, cardText3, cardText4, cardText5, cardText6, cardText7, titleSVG, centerSVG}) => {
    

    return (
        <>
            <div className="relative">
                <div className="md:flex items-center md:space-x-4 mb-3">
                    <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                        {/* <!-- Icon --> */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                        
                        {/* centerSVG HERE */}
                            <svg className="fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                            </svg>
                            {/* centerSVG HERE */}

                        </div>
                        {/* <!-- Date --> */}
                        <time className="font-caveat font-medium text-xl text-indigo-500 md:w-28">{cardDate}</time>
                    </div>
                    {/* <!-- Title --> */}
                    <div className="text-slate-500 ml-14"><span className="text-slate-900 font-bold">{cardTitle}</span>
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