import { useForm } from 'react-hook-form'
import { LoginForm } from './types'
import useLogin from '../../customHooks/useLogin'

export const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>()

    const { onSubmit } = useLogin()

    return (
        <div className="justify-center items-centem">
            <div className="flex w-96 p-4 m-auto">
                <span className="text-xl text-fuchsia-600">LOGO</span>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col bg-white w-96 rounded-md shadow-md border p-4 m-auto"
            >
                <div className="flex flex-col mb-3">
                    <input
                        {...register('email', {
                            required: 'Campo obligatorio',
                            pattern: {
                                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                message: 'Email no es correcto!',
                            },
                        })}
                        type="text"
                        className="border w-full h-12 text-xl rounded-md p-2 focus:outline-none focus-visible:border focus-visible:border-gray-400"
                        placeholder="Email"
                    />
                    <span className="text-red-300">
                        {errors.email?.message}
                    </span>
                </div>
                <div className="flex flex-col mb-3">
                    <input
                        {...register('password', {
                            required: 'Campo obligatorio',
                            min: {
                                value: 8,
                                message:
                                    'Contraseña tiene qué contener al menos 8 caracteres',
                            },
                        })}
                        type="password"
                        className="border w-full h-12 text-xl rounded-md p-2 focus:outline-none focus-visible:border focus-visible:border-gray-400"
                        placeholder="Password"
                    />
                    <span className="text-red-300">
                        {errors.password?.message}
                    </span>
                </div>
                <button className="bg-indigo-600 rounded-md text-white font-semibold p-2 w-full text-2xl">
                    Entrar
                </button>
            </form>
        </div>
    )
}
