import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      {/* Hero Image*/}
      <div className="flex flex-col justify-between items-center bg-header-image xl:bg-header-image-2x bg-cover h-[500px] border-b-[32px] border-green-one">
        <div className="flex flex-col text-2xl space-y-4 md:flex-row md:text-xl md:space-y-0 mx-auto items-center justify-between pt-16 px-4 w-[90%] max-w-[1000px]">
          <a>APPOINTMENTS</a>
          <a>MEDICAL CARD INFO</a>
          <a>FAQs</a>
          <a>PHARMACIES</a>
          <a>ABOUT</a>
        </div>
        {/* Logo */}
        <img className="mx-auto max-w-[300px] md:max-w-[600px] w-[80%] relative top-6" src="/UtahGrownLogoWhiteBorder@2x.png"></img>
      </div>
      
      <div className="px-8 flex flex-col">
        {/* Upcoming Events */}
        <div className="flex items-center justify-between flex-col space-y-4 pt-4 max-w-[800px] w-full mx-auto">
          <h3 className="text-2xl text-center">Utah's Cannabis Community</h3>
          <h1 className="text-4xl font-semibold py-4 text-center md:text-left">Upcoming Utah Medical Card Events</h1>
          <div className="flex flex-col items-center justify-between space-y-4 w-full text-green-two text-lg">
            <div className="flex flex-col space-y-2 md:flex-row items-center bg-grey-three border border-grey rounded-lg w-full py-4">
              <p className="md:pl-8 md:w-[22%] text-center">Downtown<br/>SLC</p>
              <div className="flex flex-col px-8 md:w-[55%]">
                <h2 className="text-green-one font-bold text-2xl">Tuesday, October 3rd 2023</h2>
                <p>9:00 am - 2:00pm</p>
                <p>New Patients and Renewals</p>
              </div>
              <div className="btn-primary">Book Time</div>
            </div>
            <div className="flex flex-col space-y-2 md:flex-row items-center bg-grey-three border border-grey rounded-lg w-full py-4">
              <p className="md:pl-8 md:w-[22%] text-center">Price UT</p>
              <div className="flex flex-col px-8 md:w-[55%]">
                <h2 className="text-green-one font-bold text-2xl">Thursday, October 19th 2023</h2>
                <p>9:00 am - 4:00pm</p>
                <p>Renewals Only</p>
              </div>
              <div className="btn-primary">Book Time</div>
            </div>
            <div className="flex flex-col space-y-2 md:flex-row items-center bg-grey-three border border-grey rounded-lg w-full py-4">
              <p className="md:pl-8 md:w-[22%] text-center">&lt;Other Location&gt;</p>
              <div className="flex flex-col px-8 md:w-[55%]">
                <h2 className="text-green-one font-bold text-2xl">Friday, November 10th 2023</h2>
                <p>10:00 am - 2:00pm</p>
                <p>Special Event for Veterans</p>
              </div>
              <div className="btn-primary">Book Time</div>
            </div>
          </div>
        </div>
        
        {/* Steps */}
        <div className="flex flex-col items-center justify-between max-w-[800px] w-full mx-auto mt-16 font-medium">
          <h1 className="text-3xl text-center">Things to know before your appointment</h1>
          <div className="flex flex-col md:flex-row w-full space-x-8 mt-8">
            {/* Item 1 */}
            <img className="mb-auto max-w-[80px] self-center" src="/Number1.png"></img>
            <div className="flex flex-col space-y-4 pt-6">
              <p className="text-lg">You’re going to register with the state of Utah. You can start this before you arrive.</p>
              <div className="flex items-center">
                <div className="btn-primary px-0 py-2 max-w-[150px] w-full md:w-44 text-center mr-8">UtahID.org</div>
                <p>Obtain access to your Utah Digital ID</p>
              </div>
              <div className="flex items-center">
                <div className="btn-primary px-2 py-2 max-w-[150px] w-full md:w-44 text-center mr-8">EVS.Utah.gov</div>
                <p>Fill out all the fields until you get to “Awaiting Certification” status</p>
              </div>
              <img className="max-w-[200px] mx-auto relative md:right-[60px]" src="/AwaitingCert-Image.png"></img>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col md:flex-row w-full space-x-8 mt-16">
            <img className="mb-auto max-w-[80px] self-center" src="/Number2.png"></img>
            <p className="text-lg mt-6">Check in with your QMP</p>
            <ol className="list-decimal mt-6 pl-6">
              <li>QMP Registration</li>
              <li>Medical Evaluation/Consultation</li>
              <li>Payment</li>
            </ol>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col md:flex-row w-full space-x-8 mt-16">
            <img className="mb-auto max-w-[80px] self-center" src="/Number3.png"></img>
            <p className="text-lg mt-6">Renewal or New Patient?</p>
            <div className="flex flex-col mt-6 space-y-4">
              <p>If this is a renewal, congratulations you are ready to shop...</p>
              <p>If you are a new patient, here are some helps to get you started...</p>
              <ol className="list-decimal self-center space-y-2 md:pl-20">
                <li>QMP Registration</li>
                <li>Medical Evaluation/Consultation</li>
                <li>Payment</li>
                <p className="relative right-4">**Dont forget to take advantage of new patient deals**</p>
              </ol>
            </div>
          </div>
        </div>

        <img className="max-w-[900px] w-full self-center mt-28" src="/MockBannerAd.png"></img>
        <span className="max-w-[900px] w-full self-center flex justify-end pr-2 text-grey-two font-bold">Ad</span>

        <div className="flex flex-col md:flex-row max-w-[900px] self-center mt-16">
          <img className="md:max-w-half self-center" src="/Consultation.png"></img>
          <div className="flex flex-col md:pl-12 pt-4">
            <h1 className="font-medium text-[44px] text-center md:text-left">Utah Medical Cards</h1>
            <p className="font-medium text-grey-two leading-8 md:pr-4">
              A medical cannabis card, also known as a medical marijuana
              card, is a state-issued identification card that allows
              qualified patients to legally purchase and use medical
              cannabis for the treatment of specific medical conditions.
              In Utah, a card is required to access and purchase medical
              cannabis products from state-licensed dispensaries.
              Having a medical card does not allow you to possess any
              cannabis product but only the products you purchased
              under your PAT (Medical Card ID number).
            </p>
          </div>
        </div>
        
        {/* Review Banner*/}
        <div className="w-full max-w-[900px] self-center bg-review-banner bg-cover h-[124px] flex flex-col mt-20 py-4 px-8">
          <h1 className="text-xl text-center md:text-4xl md:text-left text-tan-two">We'd love to hear from you!</h1>
          <div className="max-w-56 btn-primary text-green-two font-light text-center sm:text-xl py-2 mt-2">Review Us Here!</div>
        </div>

        {/* FAQ */}
        <div className="w-full max-w-[900px] self-center flex flex-col mt-16">
          <h1 className="font-semibold text-4xl">FAQs</h1>
          <ul className="pt-4 text-green-two text-xl space-y-2">
            <li>If I don’t qualify, do i still have to pay the QMP?</li>
            <li>What are Utah’s qualifying medical conditions?</li>
            <li>Is documentation required to prove you have a medical condition?</li>
            <li>If I have a medical cannabis card, can I consume in public?</li>
            <li>What are the eligiblity requirements for a Utah medical cannabis card?</li>
            <li>What is the complete cost to get a medical cannabis card?</li>
            <li>How long does it take to receive your card?</li>
            <li>Where can I purchase medical cannabis in Utah?</li>
            <li>Can I grow my own cannabis plants with a medical cannabis card?</li>
            <li>How long is a medical cannabis card valid?</li>
            <li>Is my personal information confidential when applying for a medical cannabis card?</li>
          </ul>
        </div>
        
        {/* Pharmacies */}
        <div className="w-full max-w-[900px] self-center mt-16 font-medium text-grey-two flex flex-col space-y-4 overflow-hidden">
          <h1 className="font-semibold text-4xl text-green-one">Utah Medical Cannabis Pharmacies</h1>
          
          <div className="items-center justify-between grid md:grid-cols-4">
            <div className="flex flex-col col-span-2">
              <h3 className="text-green-two text-2xl md:text-xl">DragonFly Wellness</h3>
              <span>711 South State Street, Salt Lake City UT 84111</span>
              <span>20 Main Street, Price UT 84501</span>
              <div className="btn-primary rounded-lg font-light max-w-48 py-1 px-2 mt-4 text-center">New Patient Specials</div>
            </div>
            <div className="flex flex-col text-xs md:text-base">
              <span className="opacity-0">spacer</span>
              <span>801-413-6945</span>
              <span>435-637-3770</span>
            </div>
            <a className="text-xs md:text-base text-right">www.dragonflywellness.com</a>
          </div>

          <div className="items-center justify-between grid md:grid-cols-4">
            <div className="flex flex-col col-span-2">
              <h3 className="text-green-two text-2xl md:text-xl">Bloc Pharmacy</h3>
              <span>10392 South Jordan Gateway South Jordan UT 84095</span>
              <span>1624 S Convention Center Dr. St. George UT 84790</span>
            </div>
            <div className="flex flex-col text-xs md:text-base">
              <span className="opacity-0">spacer</span>
              <span>385-249-9400</span>
              <span>435-216-3400</span>
            </div>
            <a className="text-xs md:text-base text-right">www.blocdispensary.com</a>
          </div>
          
          <div className="items-center justify-between grid md:grid-cols-4">
            <div className="flex flex-col col-span-2">
              <h3 className="text-green-two text-2xl md:text-xl">Beehive Farmacy</h3>
              <span>1991 S 3600 W Salt Lake City UT 84004</span>
              <span>870 W 1150 S Suite C Brigham City UT 84032</span>
            </div>
            <div className="flex flex-col text-xs md:text-base">
              <span className="opacity-0">spacer</span>
              <span>385-212-0088</span>
              <span>435-919-0966</span>
            </div>
            <a className="text-xs md:text-base text-right">www.beehivefarmacy.com</a>
          </div>

          <div className="items-center justify-between grid md:grid-cols-4">
            <div className="flex flex-col col-span-2">
              <h3 className="text-green-two text-2xl md:text-xl">Cannabist</h3>
              <span>484 South 1750 West Springville UT 84663</span>
            </div>
            <div className="flex flex-col text-xs md:text-base">
              <span className="opacity-0">spacer</span>
              <span>385-327-0922</span>
            </div>
            <a className="text-xs md:text-base text-right">www.gocannabist.com</a>
          </div>
          
          <div className="items-center justify-between grid md:grid-cols-4">
            <div className="flex flex-col col-span-2">
              <h3 className="text-green-two text-2xl md:text-xl">Curaleaf</h3>
              <span>3633 N Thanksgiving Way, Lehi UT 84043</span>
              <span>1351 Kearns Blvd Suite 110-B Park City UT 84060</span>
              <span>222 N Draper Ln Provo UT 84601</span>
              <span>757 S 1040 W Payson UT 84651</span>
            </div>
            <div className="flex flex-col text-xs md:text-base">
              <span className="opacity-0">spacer</span>
              <span>385-338-8010</span>
              <span>435-252-1052</span>
              <span>801-872-7447</span>
              <span>385-404-4422</span>
            </div>
            <a className="text-xs md:text-base text-right">www.curaleaf.com</a>
          </div>
          
          <div className="items-center justify-between grid md:grid-cols-4">
            <div className="flex flex-col col-span-2">
              <h3 className="text-green-two text-2xl md:text-xl">The Flower Shop</h3>
              <span>3775 S Wall Ave South Odgen UT 84405</span>
              <span>2150 N Main St. Suite 1 North Logan UT 84341</span>
            </div>
            <div className="flex flex-col text-xs md:text-base">
              <span className="opacity-0">spacer</span>
              <span>385-289-1800(Ext 1)</span>
              <span>385-289-1800(Ext 2)</span>
            </div>
            <a className="text-xs md:text-base text-right">www.theflowershopusa.com</a>
          </div>

          <div className="items-center justify-between grid md:grid-cols-4">
            <div className="flex flex-col col-span-2">
              <h3 className="text-green-two text-2xl md:text-xl">WholesomeCo</h3>
              <span>580 W 100 N Suite 1, West Bountiful UT 84010</span>
            </div>
            <div className="flex flex-col text-xs md:text-base">
              <span className="opacity-0">spacer</span>
              <span>801-695-4480</span>
            </div>
            <a className="text-xs md:text-base text-right">www.wholesome.co</a>
          </div>

          <div className="items-center justify-between grid md:grid-cols-4">
            <div className="flex flex-col col-span-2">
              <h3 className="text-green-two text-2xl md:text-xl">Zion Medicinal</h3>
              <span>301 S Main St. Cedar City UT 84720</span>
            </div>
            <div className="flex flex-col text-xs md:text-base">
              <span className="opacity-0">spacer</span>
              <span>435-244-4485</span>
            </div>
            <a className="text-xs md:text-base text-right">www.zionmed.co</a>
          </div>
        </div>
        
        {/* About */}
        <div className="w-full max-w-[900px] self-center flex flex-col md:flex-row mt-12 md:mt-32">
          <div className="flex flex-col pt-8">
            <h1 className="font-semibold text-4xl text-green-one">About Utah Grown</h1>
            <p className="mb-16 text-grey-two font-medium leading-8 pt-4 pr-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
              suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
              autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
              consequat, vel illum dolore.
            </p>
            <h1 className="font-semibold text-4xl text-green-one">Utah Grown Office</h1>
            <p className="font-medium text-grey-two text-xl pt-2">730 State Street <br/>Salt Lake City, Utah 84111</p>
          </div>
          <img className="max-w-half relative top-4 self-center" src="/NormalizeItUtah.png"></img>
        </div>
      </div>

      <hr/>
      
      {/* Footer */}
      <footer className="flex flex-col">
        <div className="flex flex-col md:flex-row items-baseline max-w-[900px] w-full mx-auto pl-8 py-2">
          <img className="h-[100px]" src="/UtahGrownLogo-Green.png"></img>
          <span className="pl-[10%] md:pl-8 text-green-two">UTAH'S CANNABIS COMMUNITY</span>
        </div>
        <div className="flex bg-green-one text-white text-center font-light h-24 justify-end md:pr-[10%] md:text-left pt-4 px-8 space-x-8">
          <a>&copy;2023 All Rights Reserved.</a>
          <a>Terms and Conditions</a>
          <a>Privacy Policy</a>
        </div>
      </footer>
    </main>
  );
}
