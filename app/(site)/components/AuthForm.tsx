"use client";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { BsGithub, BsGoogle } from 'react-icons/bs';

import Input from "./inputs/Input";
import Button from "./Button";
import AuthSocialButton from './AuthSocialButton';

type Variant = "LOGIN" | "REGISTER"

const AuthForm = () => {
  const [ variant, setVariant ] = useState<Variant>('LOGIN');
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  const toggleVariant =  useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const { 
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email:'',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === "REGISTER") {
      // axios register
    }

    if (variant === "LOGIN") {
      // NextAuth SignIn
    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true);

    // NextAuth Social Sign In
  }
  return (
    <div
      className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
    >
      <div
        className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10"
      >
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          { variant === 'REGISTER' && (
          <Input 
            id="name"
            label="Name"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          )}
          <Input
            id="email"
            label="Email"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <div>
            <Button>{
              variant === "LOGIN" ? "SIGN IN" : "REGISTER"
            }</Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-3" />
            </div>
            <div className="relative flex justify-center text-center">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className='mt-6 flex gap-3'>
            <AuthSocialButton 
              icon={BsGithub}
              onClick={() => socialAction('github')}
            />
            <AuthSocialButton 
              icon={BsGoogle}
              onClick={() => socialAction('google')}
            />
          </div>
        </div>
        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          {variant === "LOGIN" ? "New to Messenger?" : "Already have an account?"}
        </div>
        <div onClick={toggleVariant}
          className="underline cursor-pointer"
        >
          {variant === "LOGIN" ? "Create an account" : "Log In"}
        </div>
      </div>
    </div>
  )
}

export default AuthForm