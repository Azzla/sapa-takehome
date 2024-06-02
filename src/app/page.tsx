import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      {/* Hero Image*/}
      <div className="flex flex-col justify-between items-center bg-header-image bg-cover h-[500px] pointer-events-none ">
        <div className="flex items-center justify-between text-lg nav pt-16">
          <a>APPOINTMENTS</a>
          <a>MEDICAL CARD INFO</a>
          <a>FAQs</a>
          <a>PHARMACIES</a>
          <a>ABOUT</a>
        </div>
        {/* Logo */}
        <img className="mx-auto max-w-[40%]" src="/UtahGrownLogoWhiteBorder.png"></img>
      </div>
      
      {/* Upcoming Events */}
      <div className="flex items-center justify-between flex-col space-y-4">
        <h3>Utah's Cannabis Community</h3>
        <h1>Upcoming Utah Medical Card Events</h1>
        <div className="flex flex-col items-center justify-between space-y-4">
          <div className="flex justify-between items-center bg-grey-three border border-grey rounded-lg">
            <p className="px-8">Downtown SLC</p>
            <div className="flex flex-col px-8">
              <h2>Tuesday, October 3rd 2023</h2>
              <p>9:00 am - 2:00pm</p>
              <p>New Patients and Renewals</p>
            </div>
            <div className="btn-primary px-8">Book Time</div>
          </div>
          <div className="flex justify-between items-center bg-grey-three border border-grey rounded-lg">
            <p className="px-8">Price UT</p>
            <div className="flex flex-col px-8">
              <h2>Thursday, October 19th 2023</h2>
              <p>9:00 am - 4:00pm</p>
              <p>Renewals Only</p>
            </div>
            <div className="btn-primary px-8">Book Time</div>
          </div>
          <div className="flex justify-between items-center bg-grey-three border border-grey rounded-lg">
            <p className="px-8">&lt;Other Location&gt;</p>
            <div className="flex flex-col px-8">
              <h2>Friday, November 10th 2023</h2>
              <p>10:00 am - 2:00pm</p>
              <p>Special Event for Veterans</p>
            </div>
            <div className="btn-primary px-8">Book Time</div>
          </div>
        </div>
      </div>
      
      {/* Steps */}
      <div className="flex flex-col items-center justify-between w-[800px] mx-auto">
        <h1>Things to know before your appointment</h1>
        <div className="flex w-full space-x-8">
          {/* Item 1 */}
          <img className="mb-auto" src="/Number1.png"></img>
          <div className="flex flex-col">
            <p>You’re going to register with the state of Utah. You can start this before you arrive.</p>
            <div className="flex">
              <div className="btn-primary px-16">UtahID.org</div>
              <p>Obtain access to your Utah Digital ID</p>
            </div>
            <div className="flex">
              <div className="btn-primary px-16">EVS.Utah.gov</div>
              <p>Fill out all the fields until you get to “Awaiting Certification” status</p>
            </div>
            <img className="max-w-[200px] mx-auto" src="/AwaitingCert-Image.png"></img>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex w-full space-x-8">
          <img className="mb-auto" src="/Number2.png"></img>
          <p>Check in with your QMP</p>
          <ol className="list-decimal">
            <li>QMP Registration</li>
            <li>Medical Evaluation/Consultation</li>
            <li>Payment</li>
          </ol>
        </div>

        {/* Item 3 */}
        <div className="flex w-full space-x-8">
          <img className="mb-auto" src="/Number3.png"></img>
          <p>Renewal or New Patient?</p>
          <div className="flex flex-col">
            <p>If this is a renewal, congratulations you are ready to shop...</p>
            <p>If you are a new patient, here are some helps to get you started...</p>
            <ol className="list-decimal self-center">
              <li>QMP Registration</li>
              <li>Medical Evaluation/Consultation</li>
              <li>Payment</li>
              <span>**Dont forget to take advantage of new patient deals**</span>
            </ol>
          </div>
        </div>
      </div>

      <img className="max-w-[800px] self-center" src="/MockBannerAd.png"></img>
      <div className="flex max-w-[800px] self-center">
        <img className="max-w-half" src="/Consultation.png"></img>
        <div className="flex flex-col">
          <h1>Utah Medical Cards</h1>
          <p>
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
    </main>
  );
}
