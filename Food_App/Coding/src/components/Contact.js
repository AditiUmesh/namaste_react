// import ContactUs from "../../assets/contact-us-image.avif";

const Contact = () => {
  return (
    <div className="m-4 p-4 flex flex-wrap justify-evenly">
      <div className="w-[30%] m-4 p-4 items-center justify-center">
        {/* <img src={ContactUs}></img> */}
      </div>
      <div className="text-center justify-center items-center m-3 p-4">
        <div className="font-bold text-4xl m-4 p-4">Contact Us</div>
        <form className="flex flex-col">
          <input
            className="border border-gray-500 rounded p-3 m-2"
            type="text"
            placeholder="Name"
            name="Name"
            required
          />
          <input
            className="border border-gray-500 rounded p-3 m-2"
            type="email"
            placeholder="Email"
            name="Email"
            required
          />
          <textarea
            className="border border-gray-500 rounded p-3 m-2"
            placeholder="Type your Message here..."
            data-testid="textbox"
            required
          ></textarea>
          <button className="border rounded-full text-center font-semibold m-2 py-2.5 px-4 bg-blue-500 text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
