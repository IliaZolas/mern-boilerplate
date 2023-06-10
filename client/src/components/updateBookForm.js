import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import {Image} from 'cloudinary-react';
import { config } from '../config/config';
import "./book-form.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Dropdown from "./dropdown";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const URL = config.url;

const UpdateBookForm = () => {
    const [title, setTitle ] = useState('');
    const [ingredients, setIngredients ] = useState('');
    const [description, setDescription ] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [publicId, setPublicId] = useState('');

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const id = params.id;
        fetch(`${URL}/book/show/${id}`, {
            method: 'GET',
            }).then((response) => response.json())
            .then((data) => {
                setTitle(data.title);
                setIngredients(data.ingredients);
                setDescription(data.description);
                setImageUrl(data.imageUrl);
                setPublicId(data.public_id);
            })
            .catch((err) => {
                console.log(err.message);
            });
        },
        []);


    const uploadUrl = `https://api.cloudinary.com/v1_1/cloud9/image/upload`

    const uploadImage = async (files) => {

        const formData = new FormData()
        formData.append("file", files.target.files[0])
        formData.append("upload_preset", "yxlthn8k")

        await fetch(uploadUrl, {
            method: 'POST',
            body: formData
            })
            .then(async (response) => {
            const data = await response.json();
            setImageUrl(data.secure_url)
            setPublicId(data.public_id)
            })            
        };

    const updateBook = async (id, title, ingredients, description, imageUrl, publicId) => {
        const token = cookies.get("TOKEN");

        await fetch(`${URL}/book/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: title,
                ingredients: ingredients,
                description: description,
                imageUrl: imageUrl,
                publicId: publicId
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `${token}`,
            },
            })
            .then((response) => { 
                response.json();
            })
            .then(() => {
            setTitle();
            setIngredients();
            setDescription();
            setImageUrl();
            setPublicId();
            })
            .catch((err) => {
            console.log(err.message , ":error message");
        });
    }

    const handleSubmit = () => {
        const id = params.id
        updateBook(id, title, ingredients, description, imageUrl, publicId );
        navigate(`/book/show/${id}`);
        
    };
    

    return (
        <div className="form-container">
            <div className="form-image-container">
                <Image className="new-book-image" cloudName="iliacloud9" publicId={imageUrl} />
            </div>
            <form method="post" onSubmit={handleSubmit} enctype="multipart/form-data">
                <label className="labels">
                    Title
                    <input 
                        type="text" 
                        name="title" 
                        placeholder={title}
                        onChange={e => setTitle(e.target.value)} />
                </label>
                <label className="labels">
                    Description
                    <ReactQuill
                        theme="snow"
                        type="textarea" 
                        name="description" 
                        placeholder={description}
                        value={description}
                        onChange={setDescription} />
                </label>
                <label className="labels">
                    Image
                    <input type="file" name="book" onChange={uploadImage}/>
                </label>
                <label className="labels hidden">
                    imageUrl
                    <textarea 
                        type="textarea" 
                        name="imageUrl" 
                        value={imageUrl}
                        placeholder={imageUrl}
                        onChange={e => setImageUrl(e.target.value)} />
                </label>
                <label className="labels hidden">
                    publicId
                    <textarea 
                        type="textarea" 
                        name="publicId" 
                        value={publicId}
                        placeholder={publicId}
                        onChange={e => setPublicId(e.target.value)} />
                </label>
                <input type="submit" value="Submit" className="primary-submit-button" />
            </form>
        </div>
    )
};

export default UpdateBookForm;
