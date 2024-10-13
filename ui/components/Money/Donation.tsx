"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Donation = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
    paymentMethod: "",
    reason: "",
  });

  return (
    <>
      {/* <!-- ===== Donation Form Start ===== --> */}
      <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-17.5 left-0 -z-1 h-1/3 w-full">
            <Image
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15"
          >
            <h2 className="mb-15 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
              Make a Donation
            </h2>

            <p className="mb-10 text-center text-base text-body-color dark:text-body-color-dark">
              Your support helps us to continue our mission. Please fill out the form below to donate.
            </p>

            <form>
              <div className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  name="name"
                  type="text"
                  placeholder="Full name"
                  value={data.name}
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={data.email}
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />
              </div>

              <div className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  name="amount"
                  type="text"
                  placeholder="Donation Amount (USD)"
                  value={data.amount}
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />
                <input
                  name="wallet"
                  type="text"
                  placeholder="wallet address"
                  value={data.amount}
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />
              </div>

              {/* Payment Method Section */}
              <div className="mb-7.5">
                <h3 className="mb-2.5 text-sm font-semibold text-black dark:text-white">Choose Payment Method</h3>
                <div className="flex flex-col gap-4 lg:flex-row">
                  <label className="flex items-center gap-2.5">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Credit Card"
                      checked={data.paymentMethod === "Credit Card"}
                      onChange={(e) =>
                        setData({ ...data, paymentMethod: e.target.value })
                      }
                      className="form-radio"
                    />
                    <span>Credit Card</span>
                  </label>

                  <label className="flex items-center gap-2.5">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="PayPal"
                      checked={data.paymentMethod === "PayPal"}
                      onChange={(e) =>
                        setData({ ...data, paymentMethod: e.target.value })
                      }
                      className="form-radio"
                    />
                    <span>PayPal</span>
                  </label>

                  <label className="flex items-center gap-2.5">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Mobile Money"
                      checked={data.paymentMethod === "Mobile Money"}
                      onChange={(e) =>
                        setData({ ...data, paymentMethod: e.target.value })
                      }
                      className="form-radio"
                    />
                    <span>Mobile Money</span>
                  </label>
                </div>
              </div>

              {/* Reason for Donation Section */}
              <div className="mb-7.5">
                <h3 className="mb-2.5 text-sm font-semibold text-black dark:text-white">Reason for Donation</h3>
                <select
                  name="reason"
                  value={data.reason}
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                >
                  <option value="">Select a reason</option>
                  <option value="Support our mission">Support our mission</option>
                  <option value="Sponsor a project">Sponsor a project</option>
                  <option value="In memory of someone">In memory of someone</option>
                  <option value="General donation">General donation</option>
                </select>
              </div>

              <div className="mb-7.5">
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Leave a message (optional)"
                  value={data.message}
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-sm border border-transparent bg-primary px-7.5 py-3.5 text-base font-medium text-white transition-all duration-300 hover:bg-opacity-90 dark:hover:bg-opacity-90"
                >
                  Donate Now
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Donation;
