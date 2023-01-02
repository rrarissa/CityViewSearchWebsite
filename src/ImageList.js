import "./ImageList.scss"

const ImageList = ({images, updateBG}) => {


    return <div className='carousel'>
        { images &&
            images.map((img, index) => {
                return <div key={index}
                            onClick={()=>updateBG(img)
                            }
                style={{
                   background: `url('${img.thumb}') no-repeat center center/cover fixed`}}
                >
                </div>
            })
        }
    </div>
}

export default ImageList