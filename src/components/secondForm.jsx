import Button2 from "../componentButton/button2";
import contactImage from "../assets/image/contactImage.jpg";

export default function SecondForm() {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("name", event.target[1].value);
    console.log("email", event.target[2].value);
    console.log("textarea", event.target[3].value);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col space-y-10 lg:flex-row sm:px-2 lg:space-y-0 ">
        <div className="border-b border-gray-900/10">
          <Button2 />
          <div className="grid grid-cols-1 mx-3 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="w-full sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id=" Full Name"
                  name=" Full Name"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div className="w-full sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>
            <div className="w-full col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  rows={2}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>
            <div>
              <button className="relative z-10 flex items-center gap-2 px-5 py-2 mb-2 overflow-hidden font-semibold bg-white border-2 border-black rounded-md isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 hover:text-white">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        <div className="w-full px-3 lg:ml-4">
          <img src={contactImage} alt="image" />
        </div>
      </div>
    </form>
  );
}
