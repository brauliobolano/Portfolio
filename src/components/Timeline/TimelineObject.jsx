const TimelineObject = ({ cardDate, cardTitle, cardTitle2, cardText1, cardText2, cardText3, cardText4, cardText5, cardText6, cardText7, titleSVG, centerSVG, titleLink}) => {
    

    return (
        <>
            <div className="relative">
                <div className="md:flex items-center md:space-x-4 mb-3">
                    <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                        {/* <!-- Icon --> */}
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-950 shadow dark:shadow-none dark:ring-1 dark:ring-gray-900 md:order-1">
                        
                        {/* centerSVG HERE */}
                            {centerSVG}
                            {/* centerSVG HERE */}

                        </div>
                        {/* <!-- Date --> */}
                        <time className="font-caveat font-medium text-l text-slate-900 dark:text-gray-200 md:w-28">{cardDate}</time>
                    </div>
                    {/* <!-- Title --> */}
                    <div className="text-slate-500 ml-14"><button className="text-slate-900  dark:text-gray-200 font-bold"><a href={titleLink}>{cardTitle}</a></button>
                        <div className="flex items-center">
                            <h1>{cardTitle2}</h1>
                            {titleSVG} {/* Icon for company */}
                        </div>
                    </div>
                    
                </div>
                {/* <!-- Card --> */}
                <div className=" dark:bg-gradient-to-r dark:from-gray-100 dark:to-cycan-100 bg-gradient-to-r from-gray-200 to-cycan-100 dark:bg-gray-700 dark:bg-gray-950 p-4 rounded border border-slate-200 dark:text-slate-900 shadow ml-14 md:ml-44">
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