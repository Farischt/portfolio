import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { PageInfo } from "../types"

type FormValues = {
  name: string
  email: string
  subject: string
  message: string
}

type Props = {
  pageInfo: PageInfo
}

const Contact = ({ pageInfo }: Props) => {
  const { handleSubmit, register } = useForm()
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    window.location.href = `mailto:faris.manage@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`
  }

  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left">
      <h3 className="absolute top-20 text-2xl uppercase tracking-[20px] text-gray-500">
        Contact
      </h3>

      <div className="flex flex-col space-y-6">
        <h4 className="text-center text-base font-semibold sm:text-2xl md:text-3xl">
          I have got just what you need.
          <span className="underline decoration-[#F7AB0A]/50"> Lets Talk!</span>
        </h4>

        <div className="space-y-5 text-sm">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p>{pageInfo?.phoneNumber}</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p>{pageInfo?.email}</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p>{pageInfo?.address}</p>
          </div>
        </div>

        <form
          className="mx-auto flex w-fit flex-col space-y-2"
          //@ts-ignore
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col space-y-2 space-x-0 md:flex-row md:space-x-2 md:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              type="text"
              className="contactInput"
            />
            <input
              {...register("email")}
              placeholder="E-mail"
              type="email"
              className="contactInput"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            type="text"
            className="contactInput"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="rounded-md bg-[#F7AB0A] py-4 px-10 text-lg font-bold text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
