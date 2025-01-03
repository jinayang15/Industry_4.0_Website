import { useState, useEffect } from "react";

const Story = ({ name, job, quote, headshot, isVisible, preloadedImages }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        if (isVisible) {
            const img = new Image();
            img.src = preloadedImages?.[headshot] || headshot;
            img.onload = () => setImageLoaded(true);
        } else {
            setImageLoaded(false); // Reset state when transitioning out
        }
    }, [isVisible, headshot, preloadedImages]);

    const getImageSrc = (src) => preloadedImages?.[src] || src;

    return (
        <div className="flex mt-[-3rem] items-center">
            <div
                className="flex flex-col items-center custom-lg:flex-row mt-12"
                style={{
                    transform: isVisible && imageLoaded ? "translateX(0)" : "translateX(-100px)",
                    opacity: isVisible && imageLoaded ? 1 : 0,
                    transition: 'opacity 500ms ease-in-out, transform 500ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            >
                {/* Gear and Headshot Section (Slide and Fade In/Out) */}
                <div
                    className="relative flex justify-center items-center mx-auto"
                    style={{
                        transform: isVisible && imageLoaded ? "translateX(0)" : "translateX(-100px)",
                        opacity: isVisible && imageLoaded ? 1 : 0,
                        transition: 'opacity 500ms ease-in-out, transform 500ms cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                >
                    <img
                        src={getImageSrc('/Gears/StoriesGear.svg')}
                        className="w-[260px] custom-lg:w-[820px] h-auto"
                        draggable="false"
                        alt="Gear Background"
                    />
                    <img
                        src={getImageSrc(headshot)}
                        className="absolute w-[90px] custom-lg:w-[180px] h-auto rounded-full"
                        draggable="false"
                        alt="Story Headshot"
                    />
                </div>

                {/* Text Section (Fade In/Out Only) */}
                <div
                    className="flex flex-col text-center custom-lg:text-right mt-4 custom-lg:ml-6 max-w-[520px]"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 500ms ease-in-out',
                    }}
                >
                    <div className="body text-xl">{name}</div>
                    <div className="body-job-position text-xl mt-4">{job}</div>
                    <div className="body text-xl mt-4">{quote}</div>
                </div>
            </div>
        </div>
    );
};

export default Story;
