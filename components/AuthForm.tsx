"use client"

import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import {toast} from "sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import FormField from "@/components/FormField"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/navigation"
const authFormSchema=(type:FormType)=>{
    return z.object({
        name: type==='sign-up' ?z.string().min(3): z.string().optional(),
        email: z.string().email(),
        password: z.string().min(6, "Password must be at least 6 characters long")
    })
}
const AuthForm = ({type}:{type:FormType}) => {
  const router = useRouter();
  const formSchema = authFormSchema(type);
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email:"",
      password: ""
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
   try {
      if(type==='sign-up')
      {
         toast.success("Account created successfully!");
         router.push('/sign-in');
      }
      else
      {
            toast.success("Signed in successfully!");
            router.push('/');
      }
   } catch (error) {
     console.error(error); 
     toast.error(`There was an error: ${error}`);
   }
  }
  const isSignIn=type === "sign-in";
  return (
    <div className="card-border lg:min-w-[566px]">
        <div className="flex flex-col gap-6 card py-14 px-10">
          <div className="flex flex-row gap-2 justify-center">
             <Image src="/logo.svg" alt="Logo" width={38} height={32} />
             <h2 className="text-primary-100">Prepwise</h2>
          </div>
          <h3>Practice job interview with AI</h3>
        
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
        {!isSignIn && (
            <FormField
              control={form.control}
              name="name"
              label="Name"
              placeholder="Your name"
              type="text" />
        )}
        <FormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Your email"
              type="email" />
        <FormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password" />
        <Button className="btn" type="submit">{isSignIn?'Sign in':'Create an account'}</Button>
      </form>
    </Form>
    <p className="text-center">
        {isSignIn?'Don\'t have an account?':'Already have an account?'}
        <Link href={!isSignIn?'/sign-in':'/sign-up'} className="text-primary-100 font-semibold" >
          {!isSignIn?'Sign in':'Click here'}
        </Link>
    </p>
    </div>
    </div>
  )
}

export default AuthForm
