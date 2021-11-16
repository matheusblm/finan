import Slider from "react-slick";

export const Carrossel = ({data})=> {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10,
        speed: 5000,
        cssEase: "linear",
        pauseOnHover: true,
      };

      
    return (
        <div style={{height:"100%",width:"100%"}}>
            <Slider {...settings} className="principal" style={{height:"100%",with:"100%",display:"flex",
            justifyContant:"center",alignItems:"center",paddingTop:"8px"}}>
                {data.map((item,index)=>
                <div>
                    <img src={item} key={index} style={{height:"400px",width:"100%",
                    objectFit:"fill"}} alt="imagem"/>
                </div>
                )}
            </Slider>
      </div>
    )
}