'use-client'
import React from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  nome: string
  email: string
}

const MeuFormulario: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome:</label>
        <input {...register('nome', { required: true })} />
        {errors.nome && <span>O campo nome é obrigatório</span>}
      </div>
      <div>
        <label>Email:</label>
        <input {...register('email', { required: true })} />
        {errors.email && <span>O campo email é obrigatório</span>}
      </div>
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  )
}

export default MeuFormulario
