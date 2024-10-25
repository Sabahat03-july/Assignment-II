//****************************************************************************Assignment II *********************************************************************** */
// Default export function for the Home component
export default function Home() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-16 bg-[#252B42] overflow-hidden">

      {/* Navigation bar */}
      <nav className="p-4 w-full">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          {/* Brand Name */}
          <div className="text-white text-[24px] font-bold mt-4">
            <span>BrandName</span>
          </div>

          {/* Navigation Links */}
          <div className="space-x-8 text-white hidden md:flex ml-16 gap-4 text-[14px] leading-[24px] mt-[16px]">
            <span>Home</span>
            <span>Product</span>
            <span>Pricing</span>
            <span>Contact</span>
          </div>

          {/* Login and Join Us Buttons */}
          <div className="flex space-x-4 items-center">
            <span className="text-[#ffffff] text-[14px] hover:text-[#cccccc]">Login</span>
            <button className="bg-[#23A6F0] text-white px-4 py-2 rounded-l text-[14px]">
              JOIN US
            </button>
          </div>
        </div>
      </nav>

      {/* Main content area */}
      <div className="flex flex-col items-center gap-[40px] mt-[64px] sm:mt-[104px]">
        {/* Welcome section */}
        <div className="text-center">
          <div className="text-[#35A6F0] text-[16px] font-bold">Welcome</div>
          <p className="text-[32px] sm:text-[58px] font-bold text-[#ffffff] leading-[40px] sm:leading-[80px] mt-4">
            Selling on the <br /> internet like a pro
          </p>
          <p className="text-[#ffffff] mt-4 max-w-[542px] mx-auto leading-[30px]">
            We know how large objects will act, but things on a <br /> small scale just do not act that way.
          </p>
          {/* Buttons for actions */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 mt-[40px] justify-center items-center">
            <button className="bg-[#35A6F0] text-white px-6 py-2 rounded">Get Quote Now</button>
            <button className="border border-[#35A6F0] text-[#35A6F0] px-6 py-2 rounded">Learn More</button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center mt-[80px] gap-[30px] mb-[80px]">
          {/* Card components */}
          {[
            { title: "Training Courses", description: "The gradual accumulation of information about atomic and small-scale behaviour...", color: "#FCEBEB" },
            { title: "2,769 online courses", description: "The gradual accumulation of information about atomic and small-scale behaviour...", color: "#B9EAA8" },
            { title: "Special Feature", description: "The gradual accumulation of information about atomic and small-scale behaviour...", color: "#35A6F0", textColor: "text-white" },
          ].map((card, index) => (
            <div key={index} className={`bg-white text-black p-[20px] rounded-lg shadow-md w-[328px] ${card.textColor || 'text-black'}`}>
              <div className={`w-20 h-20 rounded-xl bg-[${card.color}] mx-auto mb-4`}></div>
              <h2 className="font-bold mt-[20px]">{card.title}</h2>
              <div className="h-[2px] bg-[#FFDCD1] w-[50px] my-[10px]"></div>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
//******************************************************** Author  SABAHAT 104073 GIAIC   ************************************************************************ */