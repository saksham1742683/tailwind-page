import "./App.css";

function App() {
  return (
    <>
      <body className="bg-slate-950 min-h-screen">
        {/* navbar starts here */}
        <nav className="w-full h-14 bg-violet-200 flex justify-between px-4 md:px-14 items-center ">
          <div className="text-2xl font-bold text-violet-600"> Pw skills </div>
          <ul className="md:flex font-semibold hidden ">
            <li className="mx-[10px] cursor-pointer">Home </li>
            <li className="mx-[10px] cursor-pointer">About Us</li>
            <li className="mx-[10px] cursor-pointer">Contact us</li>
          </ul>
          <div className=" hidden md:block px-2 py-2 bg-violet-700 text-white font-bold cursor-pointer rounded-md ">
            Login/SignUp
          </div>
          <div className="md:hidden">
            <a className="text-4xl font-semibold" href="#">
              &#8801;
            </a>
          </div>
        </nav>
        {/* navbar ends here */}

        {/* image section starts here */}
        <header className=" w-full h-auto">
          <img
            className="w-full  hidden md:block"
            src="https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/0815f9c0-cff6-4838-b0a9-2d3e2e05472c.jpeg"
            alt=""
          />

          <img
            className="w-full md:hidden "
            src="https://media.licdn.com/dms/image/D5622AQHMsLpD3IzqVA/feedshare-shrink_800/0/1707223677803?e=2147483647&v=beta&t=NecabVWFUH3wwSSwraCkCzCEywfz9rM2J3BZUpGfo3g"
            alt=""
          />
        </header>
        {/* image section ends here */}

        {/* student section  starts here*/}

        <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10  ">
          <div className=" w-full h-auto flex flex-wrap flex-col items-center ">
            <p className=" text-3xl text-violet-600 font-semibold text-center md:text-5xl">
              {" "}
              Pure Hardwork, No Shortcut!{" "}
            </p>
            <div className=" h-1 w-36 border-b-4 border-yellow-400 mt-2  rounded-2xl mb-10  md:mt-4">
              {" "}
            </div>
          </div>
          <div className=" w-full  flex flex-wrap justify-evenly ">
            <div className="w-46 flex flex-col items-center mb-12 ">
              <img
                className="h-44 w-44  "
                src="https://media.istockphoto.com/id/863958484/vector/book-icon.jpg?s=612x612&w=0&k=20&c=LTS6ZK5BwnXAqNVPzJeGwxi_tz-LPgxR0qpZH6Y_B_c="
                alt=""
              />
              <p className="text-3xl font-bold text-white ">600+</p>
              <p className="text-3xl font-bold text-gray-500 ">
                Different Courses
              </p>
            </div>
            <div className="w-46 flex flex-col items-center mb-12 ">
              <img
                className="h-44 w-44  "
                src="https://media.istockphoto.com/id/863958484/vector/book-icon.jpg?s=612x612&w=0&k=20&c=LTS6ZK5BwnXAqNVPzJeGwxi_tz-LPgxR0qpZH6Y_B_c="
                alt=""
              />
              <p className="text-3xl font-bold text-white ">600+</p>
              <p className="text-3xl font-bold text-gray-500 ">
                Different Courses
              </p>
            </div>
            <div className="w-46 flex flex-col items-center mb-12 ">
              <img
                className="h-44 w-44  "
                src="https://media.istockphoto.com/id/863958484/vector/book-icon.jpg?s=612x612&w=0&k=20&c=LTS6ZK5BwnXAqNVPzJeGwxi_tz-LPgxR0qpZH6Y_B_c="
                alt=""
              />
              <p className="text-3xl font-bold text-white ">600+</p>
              <p className="text-3xl font-bold text-gray-500 ">
                Different Courses
              </p>
            </div>
          </div>
        </div>
        {/* student section  starts here*/}

        {/* product section starts */}

        <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10  ">
          <div className=" w-full h-auto flex flex-wrap flex-col items-center ">
            <p className=" text-3xl text-violet-600 font-semibold text-center md:text-5xl">
              {" "}
              Our Products{" "}
            </p>
            <div className=" h-1 w-36 border-b-4 border-yellow-400 mt-2  rounded-2xl mb-10  md:mt-4">
              {" "}
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-evenly">
            <div className=" w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2 ">
              <img
                src="https://w1.pngwing.com/pngs/536/984/png-transparent-book-logo-book-design-childrens-literature-cartoon-page-text-orange-line.png"
                alt=""
              />
              <p className="text-3xl font bold text-white"> PW Skills Lab</p>
              <p className="text-xl font bold text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint!
              </p>
            </div>
            <div className=" w-64 flex flex-col items-center mb-12 p-2 ">
              <img
                src="https://w1.pngwing.com/pngs/536/984/png-transparent-book-logo-book-design-childrens-literature-cartoon-page-text-orange-line.png"
                alt=""
              />
              <p className="text-3xl font bold text-white"> PW Skills Lab</p>
              <p className="text-xl font bold text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint!
              </p>
            </div>
            <div className=" w-64 flex flex-col items-center mb-12 p-2 ">
              <img
                src="https://w1.pngwing.com/pngs/536/984/png-transparent-book-logo-book-design-childrens-literature-cartoon-page-text-orange-line.png"
                alt=""
              />
              <p className="text-3xl font bold text-white"> PW Skills Lab</p>
              <p className="text-xl font bold text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint!
              </p>
            </div>
            <div className=" w-64 flex flex-col items-center mb-12 p-2 ">
              <img
                src="https://w1.pngwing.com/pngs/536/984/png-transparent-book-logo-book-design-childrens-literature-cartoon-page-text-orange-line.png"
                alt=""
              />
              <p className="text-3xl font bold text-white"> PW Skills Lab</p>
              <p className="text-xl font bold text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint!
              </p>
            </div>
            <div className=" w-64 flex flex-col items-center mb-12 p-2 ">
              <img
                src="https://w1.pngwing.com/pngs/536/984/png-transparent-book-logo-book-design-childrens-literature-cartoon-page-text-orange-line.png"
                alt=""
              />
              <p className="text-3xl font bold text-white"> PW Skills Lab</p>
              <p className="text-xl font bold text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint!
              </p>
            </div>
          </div>
        </div>
        {/* product section ends here */}

        {/* Our footer section starts */}
        <footer className="w-full bg-gray-900 px-4 text-white pt-8  flex flex-col md:flex-row  flex-wrap justify-between md:px-12  ">
          <div>
            <img
              className="h-16 w-20  "
              src="https://media.istockphoto.com/id/863958484/vector/book-icon.jpg?s=612x612&w=0&k=20&c=LTS6ZK5BwnXAqNVPzJeGwxi_tz-LPgxR0qpZH6Y_B_c="
              alt=""
            />
            <p className="my-5">email us at PHYSICSwalllay@email.con</p>
            <img
              className="h-32 w-32  "
              src="https://w1.pngwing.com/pngs/536/984/png-transparent-book-logo-book-design-childrens-literature-cartoon-page-text-orange-line.png"
              alt=""
            />
          </div>

          <div>
            <h2 className=" font-bold text-2xl mt-5 ">PW skills</h2>
            <div className=" h-1 w-32 border-b-4 border-yellow-200 rounded-2xl  my-2 "></div>
            <div>
              <p>About us</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div>
            <h2 className=" font-bold text-2xl mt-5 ">Products</h2>
            <div className=" h-1 w-32 border-b-4 border-yellow-200 rounded-2xl  my-2 "></div>
            <div>
              <p> PW Skills Lab</p>
              <p>Experience </p>
              <p>Become an affiliate </p>
              <p> Hall of fame</p>
            </div>
          </div>

          <div>
            <h2 className=" font-bold text-2xl mt-5 ">Links</h2>
            <div className=" h-1 w-32 border-b-4 border-yellow-200 rounded-2xl  my-2 "></div>
            <div>
              <p>Discord Channel </p>
              <p>PW Youtube </p>
              <p>Careers</p>
            </div>
          </div>
        </footer>

        {/* Our footer section starts */}
      </body>
    </>
  );
}

export default App;
