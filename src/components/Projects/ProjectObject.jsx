const ProjectObject = ({ proDate, proTitle, proTitle2, proText, proSVG, proCenterSVG, proLink, SVG1, SVG2, SVG3, SVG4, SVG5, SVG6, SVG7}) => {
    

    return (
        <>
            <div className="relative">
                <div className="md:flex items-center md:space-x-4 mb-3">
                    <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                        {/* <!-- Icon --> */}
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-950 shadow dark:shadow-none dark:ring-1 dark:ring-gray-900 md:order-1">
                        
                        {/* centerSVG HERE */}
                            {proCenterSVG}
                            {/* centerSVG HERE */}

                        </div>
                        {/* <!-- Date --> */}
                        <time className="font-caveat font-medium text-l text-slate-900 dark:text-gray-200 md:w-28">{proDate}</time>
                    </div>
                    {/* <!-- Title --> */}
                    <div className="text-slate-500 ml-14"><button className="text-slate-900  dark:text-gray-200 font-bold"><a href={proLink}>{proTitle}</a></button>
                        <div className="flex items-center">
                            <h1>{proTitle2}</h1>
                            {proSVG} {/* Icon for company */}
                        </div>
                    </div>
                    
                </div>
                {/* <!-- Card --> */}
                <div className="dark:bg-gradient-to-r dark:from-gray-100 dark:to-gray-400 bg-gradient-to-r from-gray-200 to-cycan-100 dark:bg-gray-700 dark:bg-gray-950 px-4 pt-4 pb-1 rounded border border-slate-200 dark:text-slate-900 shadow ml-14 md:ml-44">
                    <p>{proText}</p>
                    <div className="dark:bg-gradient-to-r dark:from-gray-100 dark:to-gray-400 flex p-4 rounded text-slate-500">
                    {SVG1}
                    {SVG2}
                    {SVG3}
                    {SVG4}
                    {SVG5}
                    {SVG6}
                    {SVG7}

                    </div>
                    <div className="flex justify-end font-bold cursor-pointer pt-2 ">
                        <h1 className="font-mono">GitHub Repository</h1>
                        <svg width={20}  viewBox="0 -0.5 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Github-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g className="fill-blue-500 dark:fill-gray-950" id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-700.000000, -560.000000)"> <path d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560" id="Github"> </path> </g> </g> </g></svg>
                    </div>
                    
                </div>
            </div>
        </>
    );
    }
    

export default ProjectObject;