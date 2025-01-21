import Slider from "@madzadev/image-slider";
export default function NextSlider({images}) {
    return (
        <Slider
            imageList={images} 
            width={'100%'} 
            height={350} 
            loop={true}
            autoPlay={true}
            showArrowControls={true} 
            showDotControls={true}
            autoPlayInterval={4000}
        />
    )
}