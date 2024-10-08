import FirstForm from "../components/firstForm";
import SecondForm from "./secondForm";

const ContactHeader = () => {
  return (
    <>
      {/* container */}
      <div className="flex justify-center">
        <div className="max-w-5xl">
          {/* contact container */}

          <div className="px-4 mx-3">
            <h1 className="font-bold text-3xl py-7 sm:text-6xl">Contact Us</h1>
            <p>
              LET’S CONNECT : WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM
              YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT,
              YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR
              BY PHONE, EMAIL, OR SOCIAL MEDIA.
            </p>
          </div>
          <FirstForm />
          <SecondForm />
        </div>
      </div>
    </>
  );
};

export default ContactHeader;
