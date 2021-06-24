import { Button } from 'reactstrap'
import PropTypes from 'prop-types'

const RandomPhoto = props => {
    const {name,imageUrl, onImageUrlChange, onRandomButtonBlur} = props;
    const handleRandomPhotoClick = async () =>{
        if(onImageUrlChange){
            const randomImageUrl = getRandomImageUrl();
            onImageUrlChange(randomImageUrl)
        }
    }

    return (
        <div className="random-photo">
            <div className="random-photo__button">
            <Button type="button" outline color="primary" name={name} onBlur={onRandomButtonBlur} onClick={handleRandomPhotoClick}> Random Photo</Button>
            <div className="random-photo__photo">
                {imageUrl && <img width="200px" height="200px" src={imageUrl}   alt="Ooops... not found" />}
            </div>                  
        </div>    
        </div>
    )
}

RandomPhoto.propTypes = {
name:PropTypes.string,
imageUrl:PropTypes.string,
onImageUrlChange:PropTypes.func,
onRandomButtonBlur:PropTypes.func
}
RandomPhoto.defaultProps = {
    name:'',
    imageUrl:'',
    onImageUrlChange:null,
    onRandomButtonBlur:null
}

export default RandomPhoto
