export default function MinFooter() {
    return (
        <div className="bg-base-200">
            <footer className="footer items-center p-4 max-w-6xl mx-auto px-4 sm:px-6">

                <div className="items-center grid-flow-col">
                    <svg width="36" height="36" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <rect id="Rectangle" fill="#6366F1" x="0" y="0" width="64" height="64" rx="8"></rect>
                            <text id="S" fontFamily='ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, " Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' fontSize="60" fontWeight="800" letterSpacing="-1" fill="#FFFFFF">
                                <tspan x="13" y="54">S</tspan>
                            </text>
                        </g>
                    </svg>
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
            </footer>
        </div>
    );
}