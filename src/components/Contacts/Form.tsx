import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence, motion } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";
import useAlert from "@/hooks/useAlert";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";

interface IFormInput {
  user_name: string;
  user_email: string;
  message: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const [isLoading, setIsLoading] = useState(false);
  const { alert, showAlert, hideAlert } = useAlert();

  const sendEmail = async ({ message, user_email, user_name }: any) => {
    // e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          { message, from_email: user_email, from_name: user_name },
          { publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY }
        )
        .then(() => {
          setIsLoading(false);
          setTimeout(() => {
            hideAlert();
            reset();
          }, 3000);
          showAlert({
            show: true,
            text: "Thank you 😃",
            type: "success",
          });
        });

      // console.log("SUCCESS!");
    } catch (error) {
      setIsLoading(false);

      showAlert({
        show: true,
        text: "I didn't receive your message 😢",
        type: "danger",
      });
      // console.error("FAILED...", error);
    }
  };

  return (
    <motion.div
      variants={slideInFromRight(0.3)}
      className="md:w-1/3 lg:-mt-16 md:py-24 pt-16 relative"
    >
      {/* Alert popUp */}
      <div className=" w-full absolute md:top-20 top-6 h-10">
        <AnimatePresence>
          {alert?.show && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
              exit={{ opacity: 0, y: -10 }}
              className={`px-4 lg:font-semibold lg:px-6 py-2 text-base text-white text-center md:w-2/3 lg:w-1/2 ${
                alert?.type === "danger" ? "bg-red-400" : "bg-green-500"
              } rounded-md shadow-md capitalize`}
            >
              <div className="flex items-center justify-start gap-7 text-lg font-semibold">
                {alert?.type === "danger" ? (
                  <FaRegTimesCircle className="h-6 w-6 text-red-600" />
                ) : (
                  <FaRegCheckCircle className="h-5 w-5 text-green-500" />
                )}
                {alert?.text}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <form
        // ref={form}
        onSubmit={handleSubmit((data) => {
          sendEmail(data);
        })}
        className="flex flex-col gap-5 mt-4 text-black"
      >
        <div className="flex flex-col h-1/5">
          <input
            type="text"
            placeholder="Name"
            {...register("user_name", { required: true, maxLength: 20 })}
            className="bg-slate-100 outline-transparent focus:outline-green-500 rounded-md py-2 px-6 "
          />
          {errors.user_name && (
            <span className="text-sm text-red-600">**Name is required</span>
          )}
        </div>

        <div className="flex flex-col h-1/5">
          <input
            type="email"
            {...register("user_email", { required: true })}
            placeholder="Email"
            className="bg-slate-100 outline-transparent focus:outline-green-500 rounded-md py-2 px-6"
          />
          {errors.user_email && (
            <span className="text-sm text-red-600">**Email is required</span>
          )}
        </div>

        <div className="flex flex-col h-3/5">
          <textarea
            rows={5}
            {...register("message", { required: true })}
            placeholder="Your Message"
            className="bg-slate-100 outline-transparent focus:outline-green-500 rounded-md py-2 px-6"
          ></textarea>
          {errors.message && (
            <span className="text-sm text-red-600">**Message is required</span>
          )}
        </div>

        <motion.input
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          defaultValue={isLoading ? "Sending..." : "Send Message"}
          disabled={isLoading}
          className="px-4 lg:font-semibold lg:px-6 py-2 text-base text-white text-center md:w-2/3 lg:w-1/2 bg-purple-500 rounded-md shadow-md cursor-pointer capitalize disabled:bg-purple-400"
        />
      </form>
    </motion.div>
  );
};

export default Form;
