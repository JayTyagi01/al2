import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2srp948",
        "template_b8zzggx",
        e.target,
        "t4fkAJ8OjdrmSx_m_"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  const notify = () => {
    toast.success("Form Submitted", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: undefined,
    });
  };
  return (
    <div>
      <form
        action="#"
        method="POST"
        className="px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-46"
        onSubmit={sendEmail}
      >
        <input
          className=" bg-[#a6bba688] form-control"
          placeholder="Full name"
          type="text"
          name="Full name"
          autoComplete="off"
          required
        />
        <input
          className=" bg-[#a6bba688] form-control"
          placeholder="Email address"
          type="email"
          name="Email"
          autoComplete="off"
          required
        />
        <textarea
          className="bg-[#a6bba688] textarea"
          placeholder="Message"
          name="message"
          autoComplete="off"
          required
        ></textarea>
        <button
          onClick={notify}
          type="submit"
          value="send"
          className="btn bg-accent hover:bg-accent-hover transition-all"
        >
          Send Message
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Mailer;
