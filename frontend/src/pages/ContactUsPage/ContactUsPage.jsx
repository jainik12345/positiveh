import ContactUsPageBanner from "./ContactUsPageBanner/ContactUsPageBanner";
import ContactUsPageContactDetailsSection from "./ContactUsPageContactDetailsSection/ContactUsPageContactDetailsSection";
import ContactUsPageContactFormSection from "./ContactUsPageContactFormSection/ContactUsPageContactFormSection";
import ContactUsPageFormSection from "./ContactUsPageFormSection/ContactUsPageFormSection";
import ContactUsPageContactInfoSection from "./ContactUsPageContactInfoSection/ContactUsPageContactInfoSection";

const ContactUsPage = () => {
  return (
    <>
      <ContactUsPageBanner />
      <ContactUsPageContactInfoSection />
      <ContactUsPageFormSection />
      {/* <ContactUsPageContactDetailsSection /> no need for now  but do not remove it */}
      {/* <ContactUsPageContactFormSection />  no need for now  but do not remove it */}
    </>
  );
};

export default ContactUsPage;
