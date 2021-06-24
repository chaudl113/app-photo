import React from 'react'
import Banner from 'components/Banner'

import './AddEdit.scss'
import PhotoForm from '../components/PhotoForm'
const AddEdit = () => {
    return (
        <div className="photo-edit">
                <Banner title="Pick your amazing photo 🤑"/>
        <div className="photo-edit__form ">
        <PhotoForm/>
        </div>
        </div>
    )
}

export default AddEdit
