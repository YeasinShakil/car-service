import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/service`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result=> {
            // console.log(result)
        })
        // console.log(data)
    };
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center  mt-5'>this is add service</h1>
            <form className='d-flex mx-auto flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='enter your name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-2' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default AddService;