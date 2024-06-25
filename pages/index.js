import { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { Addrefund_important } from "../state/reducers/refund.reducer";
import localFont from "next/font/local";
import { isEmpty } from "lodash";
import { useGetCartInfoMutation } from "../state/services/profile.service";
import { useSearchParams } from "next/navigation";
import getSymbolFromCurrency from "currency-symbol-map";
import Loader from "@/components/More/Loader";
import { useRouter } from "next/navigation";
import { setSuccessData } from "@/state/reducers/pos.reducer";
import Head from "next/head";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StepItem from "@/components/StepItem";
import { DataTable } from "@/components/DataTable/Table";
import { columns } from "@/components/DataTable/Columns";
import Summary from "@/components/Summary";
import { Button } from "@/components/ui/button";
import Refund from "@/components/More/Refund";
import Sidebar from "@/components/Sidebar";
// import { cartData } from "@/lib/data";
import Contact from "@/components/Contact";
const aeonik = localFont({
  src: [
    {
      path: "../../public/fonts/AeonikTRIAL-Bold.otf",
      weight: "600",
      style: "bold",
    },
    {
      path: "../../public/fonts/AeonikTRIAL-Light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/AeonikTRIAL-Regular.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-aeonik",
});

const stepContent = [
  {
    step: 0,
    title: "Review cart",
  },
  {
    step: 1,
    title: "Review policy",
  },
  {
    step: 2,
    title: "Payment method",
  },
];

export default function Home() {
  const [carts, setCarts] = useState({});
  const [cartInfo, setCartInfo] = useState();
  const [paymentTypes, setPaymentTypes] = useState({});
  const [paymentCodes, setPaymentCodes] = useState([]);
  const [api, setApi] = useState([]);
  const [refundPolicy, setRefundPolicy] = useState("");
  const [importantNotice, setImportantNotice] = useState("");
  const [converted_cart, setConvertedCart] = useState([]);
  const [expiredtime, setExpiredtime] = useState("");
  const [getPaymentInfo, { data, error, isLoading }] = useGetCartInfoMutation();
  const searchParams = useSearchParams();
  const [type, setType] = useState(0);
  const [isAccept, setIsAccept] = useState(false);
  const [acceptNotice, setAcceptNotice] = useState(false);
  const [checkingError, setCheckingError] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [step, setStep] = useState(0);
  const router = useRouter();
  const inputRef = useRef(null);

  useEffect(() => {
    // inputRef.current.focus();
  }, []);
  let dispatch = useDispatch();

  useEffect(() => {
    if (!isEmpty(cartInfo)) {
      const {
        cart,
        payment_gateway_code_available,
        payment_gateways,
        refund_policy,
        payment_gateway_api,
        important_notice,
      } = cartInfo;
      setExpiredtime(cart.remaining_time);

      setCarts(cart);
      setRefundPolicy(refund_policy);
      setPaymentCodes(payment_gateway_code_available);
      setPaymentTypes(payment_gateways);
      setApi(payment_gateway_api);
      setImportantNotice(important_notice);
      let obj = { refund: refund_policy, important: important_notice };
      dispatch(Addrefund_important(obj));
      setTimeout(() => {}, cart.remaining_time);
    } else {
    }
  }, [cartInfo, dispatch]);
  useEffect(() => {
    if (!isEmpty(carts?.items)) {
      const { items } = carts;
      const errors = items.filter((cartItem) => cartItem.hasError == true);
      let today = new Date().toISOString();
      let errorlog = { date: today, error: errors };
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        post: errorlog,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        `${window.location.origin}/api/payment/callback/check`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

      if (!isEmpty(errors)) {
        setCheckingError(false);
        setHasError(true);
      } else {
        setCheckingError(false);
        setHasError(false);
      }
    }
  }, [carts, paymentCodes, paymentTypes]);

  useEffect(() => {
    if (!isEmpty(data) && data.statusCode === 200) {
      const { data: paymentInfo } = data;

      setCartInfo(paymentInfo);
    } else {
    }
  }, [data]);

  useEffect(() => {
    if (!isEmpty(error)) {
      const { data, message } = error;
      console.log(message);
      if (data?.message === "Invalid Order") {
        router.replace("401");
        return;
      }
      if (data?.data?.description === "Unauthorized") {
        const { metaData } = data.data;
        router.replace(metaData?.redirectData);
        return;
      }
      let today = new Date().toISOString();
      let errorlog = { date: today, error: data };
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        post: errorlog,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        `${window.location.origin}/api/payment/callback/check`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

      // const {data:resData} = data;
      if (data.message == "Invalid Transaction") {
        router.replace("/401");
      } else {
        dispatch(
          setSuccessData({
            data: {
              ...data?.data?.metaData,
              title: data?.data?.description,
              type: "",
            },
          })
        );
        router.replace("/info");
      }
      if (expiredtime != "") {
        let totalexpiredtime = expiredtime * 60 * 1000;
        setTimeout(() => {
          router.replace("/info");
        }, totalexpiredtime);
      }
    }
  }, [error, router, dispatch, expiredtime]);
  useEffect(() => {
    const e = searchParams.get("e");
    const s = searchParams.get("s");
    const t = searchParams.get("t");
    if (!isEmpty(e) && !isEmpty(s) && !isEmpty(t)) {
      getPaymentInfo({ e, s, t }).unwrap();
    }
  }, [getPaymentInfo, searchParams]);

  useEffect(() => {
    if (carts?.items) {
      const cartasync = async () => {
        let changedata = await Promise.all(
          carts?.items.map(async (item) => {
            return {
              applicationId: item.applicationId,
              applicant_name: item.applicant_name,
              applicationType: item.applicationType,
              currency: item.currency,
              price: ` ${item.currency} ${item.price}`,
              cal_price: item.price,
              reference_number: item.reference_number,
              transaction_fee: item.transaction_fee,
              hasError: item.hasError,
            };
          })
        );

        setConvertedCart(changedata);
      };

      cartasync();
    }
  }, [carts?.items]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//cdn.cookie-script.com/s/26d6befb85328706dbf0307ed94ed89d.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [isOutline, SetisOutline] = useState(true);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter" && step == 0) {
        setStep(1);
        SetisOutline(false);
      } else if (event.key === "Enter" && step == 1) {
        setStep(2);
        SetisOutline(false);
      }
    };
    // Add event listener
    document.addEventListener("keydown", handleKeyPress);
    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [step]);

  // useEffect(() => {
  //   function handleEnterKey(event) {
  //     if (event.key == 'Enter' && step == 1 ) {
  //       setStep(2)
  //       SetisOutline(false)
  //     }
  //   }

  //   window.addEventListener('keydown', handleEnterKey);

  //   return () => {
  //     window.removeEventListener('keydown', handleEnterKey);
  //   };
  // }, [step]);

  const handleStepView = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            {!isEmpty(converted_cart) && (
              <DataTable columns={columns} data={converted_cart} />
            )}
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col w-full h-full flex-1 bg-red-700">
            <Refund
              setIsAccept={setIsAccept}
              isAccept={isAccept}
              policy={refundPolicy}
              notice={importantNotice}
              acceptNotice={acceptNotice}
              setAcceptNotice={setAcceptNotice}
              step={step}
            />
          </div>
        );

      default:
        return (
          <>
            {!isEmpty(paymentCodes) &&
              !isEmpty(paymentTypes) &&
              !isEmpty(carts) && (
                <Sidebar
                  paymentCodes={paymentCodes}
                  paymentType={paymentTypes}
                  carts={carts}
                  back={() => setStep(1)}
                  isAccept={acceptNotice}
                />
              )}
          </>
        );
    }
  };

  const renderButtons = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="w-full py-4">
            <Button
              ref={inputRef}
              id="stepOne"
              name="stepOne"
              className={`text-xs w-full  bg-primary hover:bg-primary hover:opacity-75 hover:text-white text-white outline-none border-0 mt-4 capitalize font-bold focus:outline-none focus:ring-2 focus:ring-black`}
              variant="outline"
              onClick={() => setStep(1)}
            >
              Continue
            </Button>
          </div>
        );

      case 1:
        return (
          <div className="w-full py-4">
            <Button
              id="stepTwo"
              name="stepTwo"
              className="text-xs w-full  bg-primary hover:bg-primary hover:opacity-75 hover:text-white text-white  border-0 mt-3 capitalize font-bold focus:outline-none focus:ring-2 focus:ring-black "
              variant="outline"
              disabled={!acceptNotice}
              // isLoading={apiLoading}
              // onClick={handleSubmit(handleValidation, (error) =>
              //   console.log(error)
              // )}
              onClick={() => setStep(2)}
            >
              Continue
            </Button>
          </div>
        );

      default:
        return;
    }
  };

  return (
    <div className=" w-fulll  sm:w-full md:w-full lg:w-full">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Payment Gateway</title>
        <meta name="title" content="Payment Gateway" />
        <meta
          name="keywords"
          content="payment gateway, seamless payment, online, passport, visa, visa on arrival"
        />
        <meta property="og:titlee" content="Payment gateway" />
        <meta property="og:description" content=" Payment gateway" />
      </Head>

      {isLoading && <Loader isLoading={isLoading} />}
      <>
        {!isEmpty(cartInfo) && (
          <main
            className={`flex min-h-screen bg-background  relative  text-foreground flex-col items-center ${aeonik.variable}`}
          >
            <Header name={cartInfo?.client_name} logo={carts?.client_logo} />
            <div className=" md:mt-[8vh] flex-1 h-[100%] mx-0 w-full px-4 md:px-6 lg:px-12 xl:px-24 z-50">
              <article className="w-full flex flex-col gap-4">
                <div className="flex space-x-2 py-2 px-1 rounded-md bg-[#FFEFD2] items-center ">
                  <Avatar className="w-5 h-5 md:h-5 md:w-5">
                    <AvatarImage src="./assets/info-circle.svg" alt="@shadcn" />
                    <AvatarFallback>logo</AvatarFallback>
                  </Avatar>
                  <p className="font-aeonik text-[14px] font-light text[#101010]">
                    Please{" "}
                    <strong className="font-aeonik text-[12px] font-bold">
                      DO NOT
                    </strong>{" "}
                    refresh this page. Before beginning a new application and/or
                    making a payment, please visit the embassy’s website or
                    immigration office for interview information, dates, times
                    and hours of operation.
                  </p>
                </div>

                <div className=" flex flex-col  w-full bg-background gap-3">
                  <p className=" my-2 font-aeonik font-[700] font-16  text-black font-[24px]">
                    Complete checkout
                  </p>
                  <p className="font-aeonik  font-light text-muted-foreground">
                    Review orders and proceed to make payment
                  </p>
                </div>
                {/* w-11/12 sm:w-11/12 md:w-[68%] lg:w-[68%] */}
                <div className="w-full sm:w-11/12 md:w-[68%] lg:w-[68%] mt-4">
                  <div className="w-full flex flex-row items-center space-x-2 sm:space-x-2 md:space-x-5 lg:space-x-5 border-b border-[#E4E7EC] ">
                    {stepContent.map((item, index) => (
                      <StepItem
                        setStep={setStep}
                        item={item}
                        key={index}
                        currentStep={step}
                        acceptNotice={acceptNotice}
                      />
                    ))}
                  </div>
                </div>
              </article>

              <div className=" h-full  gap-2 w-full sm:gap-2 sm:w-full md:w-full  md:flex-col   lg:flex  lg:flex-row  lg:flex-1 lg:w-full lg:space-x-6 mt-2">
                <div className=" h-full w-full sm:w-full md:w-[70%] lg:w-[70%]  ">
                  {handleStepView(step)}
                </div>

                <div className=" w-[100%] flex flex-col sm:w-[100%] sm:flex sm:flex-col md:w-[30%] md:flex md:flex-col lg:w-[30%] lg:flex lg:flex-col ">
                  <div className="w-full mt-2 sm:mt-2 md:mt-2 lg:mt-0">
                    <Summary
                      policy={refundPolicy}
                      notice={importantNotice}
                      transaction={carts?.cart}
                      carts={carts}
                      totals={carts?.total}
                      symbol={carts.currency_symbol}
                      sub_total={carts.sub_total}
                      setIsAccept={setIsAccept}
                      isAccept={isAccept}
                      hasError={hasError}
                    />
                    {renderButtons(step)}
                    
                  </div>
                </div>
              </div>
            </div>
            {process.env.HAS_CONTACT && <Contact />}
          </main>
        )}
      </>
    </div>
  );
}
