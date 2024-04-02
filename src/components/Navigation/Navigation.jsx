import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Navigation = ({isDark, setIsDark, setColorMode }) => {

    // Create a state variable for the theme


    const handleDarkMode = () => {
        // Toggle dark mode
    document.documentElement.classList.toggle('dark');

    // Save theme preference in localStorage
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        setIsDark(true);
        setColorMode("#E9D2F5");        
    } else {
        localStorage.setItem('theme', 'light');
        setIsDark(false);
        setColorMode("#C0C4C4");  //C0C4C4

    }
    }

    useEffect(() => {
        // On component mount, check for theme preference in localStorage
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDark(true); // Set state to dark mode if theme preference is dark
            setColorMode("#E9D2F5"); 
        } else if (theme === 'light') {
            document.documentElement.classList.remove('dark');
            setIsDark(false); // Set state to light mode if theme preference is light
            setColorMode("#C0C4C4");
        }
    }, []);

    const navigate = useNavigate();
    return (
        <nav className="relative z-20 mx-10 md:mx-40 mt-4 md:mt-20 flex justify-between">
            <div id="left-side">
                <button className='' onClick={() => navigate("/")}>
                    <svg  width={50} className='stroke-current text-black dark:text-white' viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M56 186.13C61.2919 176.598 66.0088 166.819 71.0626 157.108C76.5971 146.479 82.5988 106.951 94.0541 102.292C110.02 95.8017 289.45 103.092 293.843 106.07C309.795 116.882 338.556 186.13 342.998 195.805C343.425 196.735 233.481 195.805 226.455 195.805C173.585 195.805 120.567 190.968 67.891 190.968" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M86.8382 197.651C89.1513 236.179 80.1087 275.385 84.5722 313.307" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M318.349 203.363C320.063 237.142 315.272 302.782 318.349 319.019" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M298.735 130.542C225.71 132.825 150.01 131.686 75.99 131.686" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M328.719 159.1C243.06 159.811 155.493 167.15 70.2781 160.844" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M238.766 125.257C238.766 114.467 241.052 83.4912 243.501 81.369C245.513 79.6256 273.37 81.1531 275.734 81.9423C277.549 82.5519 277.27 97.2754 274.898 126.113" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M118.828 311.728C118.828 291.833 121.623 234.722 124.616 230.809C127.074 227.595 161.122 230.411 164.011 231.867C166.23 232.99 165.889 260.137 162.989 313.306" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M258.215 221.924C263.103 222.552 268.046 222.674 273.043 222.29C280.539 221.714 288.59 221.714 288.59 223.054C288.59 224.394 288.59 228.003 288.59 230.158C288.59 232.314 289.257 255.566 289.257 257.159C289.257 258.751 257.834 258.392 256.429 257.159C255.024 255.925 255.517 240.853 255.517 239.059C255.517 237.264 255.517 234.851 255.517 233.498" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M196.431 224.1C201.626 224.255 206.713 224.133 211.694 223.733C219.165 223.134 227.188 223.134 227.188 224.53C227.188 225.926 227.188 229.684 227.188 231.93C227.188 234.175 227.188 255.161 227.188 256.819C227.188 258.478 226.356 258.478 224.24 258.478C222.124 258.478 197.002 259.763 195.602 258.478C194.203 257.193 194.539 236.586 194.539 234.716C194.539 232.847 194.539 230.333 194.539 228.924" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
            </div>
            <div id="right-side" className="flex">
                <button onClick={() => handleDarkMode()}>
                {isDark ? (
                    // Moon SVG for dark theme
                    /*SVG BUTTON focus:ring-4 focus:outline-none hover:bg-gray-700 border-gray-700 focus:ring-gray-600 border */
                    <button type="button" className="active:animate-ping z-20 rounded-lg me-2 mb-2 py-2 px-2">
                        {/* <svg width={30} className='stroke-current fill-current text-white'  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" fill="#9ca3af"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z" fill="#9ca3af"></path> <g opacity="0.5"> <path d="M3.66919 3.7156C3.94869 3.4099 4.42309 3.38867 4.72879 3.66817L6.95081 5.69975C7.25651 5.97925 7.27774 6.45365 6.99824 6.75935C6.71874 7.06505 6.24434 7.08629 5.93865 6.80679L3.71663 4.7752C3.41093 4.4957 3.38969 4.0213 3.66919 3.7156Z" fill="#9ca3af"></path> <path d="M20.3319 3.7156C20.6114 4.0213 20.5902 4.4957 20.2845 4.7752L18.0624 6.80679C17.7567 7.08629 17.2823 7.06505 17.0028 6.75935C16.7233 6.45365 16.7446 5.97925 17.0503 5.69975L19.2723 3.66817C19.578 3.38867 20.0524 3.4099 20.3319 3.7156Z" fill="#9ca3af"></path> <path d="M17.0261 17.0247C17.319 16.7318 17.7938 16.7319 18.0867 17.0248L20.3087 19.2471C20.6016 19.54 20.6016 20.0148 20.3087 20.3077C20.0158 20.6006 19.5409 20.6006 19.248 20.3076L17.026 18.0854C16.7331 17.7924 16.7332 17.3176 17.0261 17.0247Z" fill="#9ca3af"></path> <path d="M6.97521 17.0249C7.2681 17.3177 7.2681 17.7926 6.97521 18.0855L4.75299 20.3077C4.46009 20.6006 3.98522 20.6006 3.69233 20.3077C3.39943 20.0148 3.39943 19.54 3.69233 19.2471L5.91455 17.0248C6.20744 16.732 6.68232 16.732 6.97521 17.0249Z" fill="#9ca3af"></path> </g> </g></svg> */}           
                        <svg width={35} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="miter"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="12" cy="12" r="4"></circle><line x1="12" y1="2" x2="12" y2="4"></line><line x1="12" y1="20" x2="12" y2="22"></line><line x1="22" y1="12" x2="20" y2="12"></line><line x1="4" y1="12" x2="2" y2="12"></line><line x1="19.07" y1="19.07" x2="17.66" y2="17.66"></line><line x1="6.34" y1="6.34" x2="4.93" y2="4.93"></line><line x1="4.93" y1="19.07" x2="6.34" y2="17.66"></line><line x1="17.66" y1="6.34" x2="19.07" y2="4.93"></line></g></svg>
                    </button>
                    
                ) : (
                    // Sun SVG for light theme
                    <button type="button" className="active:animate-ping z-20 rounded-lg me-2 mb-2 py-2 px-2">
                        <svg width={30} className='' viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g><g id="SVGRepo_iconCarrier"> <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#000000" stroke-width="1.248" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </button>
                    
                    
                )}
                    
                </button>
            </div>
        </nav>
    );
    };
    export default Navigation;