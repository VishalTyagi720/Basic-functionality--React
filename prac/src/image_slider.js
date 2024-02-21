import React, { useEffect, useState } from "react";


function ImageSlider () {

    const Images = ['https://img.freepik.com/premium-photo/green-jungle-with-sunbeams-butterflies_124715-2949.jpg?size=626&ext=jpg&ga=GA1.1.1738870575.1705144971&semt=sph',
                    'https://img.freepik.com/free-photo/beautiful-countryside-road-greenery-forests_181624-5399.jpg?size=626&ext=jpg&ga=GA1.1.1738870575.1705144971&semt=sph',
                    'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1738870575.1705144971&semt=sph',
                    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1060&t=st=1705145090~exp=1705145690~hmac=1ed6d05db648b012824b543bf27ce9ab29ea799696da1f6af8e62037ef621fef',
                    'https://img.freepik.com/premium-photo/tall-trunks-pine-trees-stretch-up-sky_320071-1363.jpg?size=626&ext=jpg&ga=GA1.1.1738870575.1705144971&semt=sph'
    ]   
    const [currentImage, setCurrentImage] = useState(0);

    const handleClick = (e) => {
        
        if (e.target.innerHTML === 'Previous') {
            if (currentImage === 0) {setCurrentImage(Images.length - 1)}
            else {
                setCurrentImage((currentImage - 1) % Images.length);
            }
        }
        else {
            setCurrentImage((currentImage + 1) % Images.length);
        }

    }

    useEffect(() => {

        const Image_timer = setTimeout(() => {
            setCurrentImage((currentImage + 1) % Images.length);
        }, 2000)

        return () => {clearTimeout(Image_timer)};

    }, [currentImage, Images.length])


    return (
        <div>
            <button onClick={handleClick}>Previous</button>
            <img src={Images[currentImage]} alt="background" style={{width:'300px', height:'300px'}}/>
            {/* {Images.map((image, i) => {
                return <img key={i} src={image} alt="background" style={{width:'300px', height:'300px', display:currentImage === i ? 'inline' : 'none'}} />
            })}   */}
            <button onClick={handleClick}>Next</button>
            {currentImage + 1}
        </div>
    )
}

export default ImageSlider;
