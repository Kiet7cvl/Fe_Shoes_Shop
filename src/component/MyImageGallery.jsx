import ImageGallery from "react-image-gallery";

const MyImageGallery =() => {
    const images = [
        {
            original: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f1805020-96e2-4911-8208-24455341f6ca/air-jordan-1-low-se-shoes-WSkjPL.png",
            thumbnail: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f1805020-96e2-4911-8208-24455341f6ca/air-jordan-1-low-se-shoes-WSkjPL.png",
        },
        {
            original: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f1805020-96e2-4911-8208-24455341f6ca/air-jordan-1-low-se-shoes-WSkjPL.png",
            thumbnail: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f1805020-96e2-4911-8208-24455341f6ca/air-jordan-1-low-se-shoes-WSkjPL.png",
        },
        {
            original: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b6ca85ab-8fdf-4498-ba7d-1c60af0cb8c4/air-jordan-1-low-se-shoes-WSkjPL.png",
            thumbnail: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b6ca85ab-8fdf-4498-ba7d-1c60af0cb8c4/air-jordan-1-low-se-shoes-WSkjPL.png",
        },
        {
            original: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/54238773-adce-4d5d-bb42-4e80ff81242f/air-jordan-1-low-se-shoes-WSkjPL.png",
            thumbnail: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/54238773-adce-4d5d-bb42-4e80ff81242f/air-jordan-1-low-se-shoes-WSkjPL.png",
        },
    ];
    return(
        <ImageGallery items={images}
        thumbnailPosition={'left'}
        renderItem={(item) => {
            return (
                <div className="image-container">
                    <img className="rounded  img-fluid" src={item.original} alt="" />
                    <div className="caption">{item.description}</div>
                </div>
            );
        }}
    />
    );
}

export default MyImageGallery;