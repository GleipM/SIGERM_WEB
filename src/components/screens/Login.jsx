import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom'

export default function Form(){
    const navigate = useNavigate();

    function onSubmit(data){
        console.log("wasaaa");
        console.log(data);
        if (data.email === "admin@gmail.com" && data.password === "1234") {
            return navigate(`/Home`);
        }
        return alert ("Contraseña incorrecta");
    }
    const schema=yup.object().shape({
        email: yup.string().required("Ingresa un email").email("Ingresa un email valido"),
        password: yup.string().required("Ingresa una contraseña").min(4,"minimo 4 caracteres"),
    })
    

    const {register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(schema)});
    
    return(
        <div style={{backgroundColor:'9B1C31'}}>
            <form style={{backgroundColor:'#fff'}} onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Escribe tu email" {...register("email")} />
                {errors.email && <div className="alert">{errors.email.message}</div>}
                <input type="password" placeholder="Escribe tu contraseña" {...register("password")} />
                {errors.password && <div className="alert">{errors.password.message}</div>}
                <input type="submit" />
            </form>
        </div>
    )
    
}