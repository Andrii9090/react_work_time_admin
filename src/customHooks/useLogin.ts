import { SubmitHandler } from "react-hook-form"
import { LoginForm } from "../components/users/types"
import { useCallback } from "react"
import UserRepository from "../repositories/user"
import toast from "react-hot-toast"
import config from "../config"

const useLogin = () => {
    const onSubmit: SubmitHandler<LoginForm> = useCallback(
        (form: LoginForm) => {
            const repository = new UserRepository()
            repository.login(form).then((data) => {
                if (data.data.error) {
                    toast(data.data.msg!)
                } else {
                    localStorage.setItem(
                        config.TOKEN_KEY,
                        data.data.data!.token
                    )
                    window.location.href = '/'
                }
            })
        },
        []
    )

    return {
        onSubmit,
    }
}

export default useLogin