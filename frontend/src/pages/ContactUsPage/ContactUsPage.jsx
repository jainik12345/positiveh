import ContactUsPageBanner from "./ContactUsPageBanner/ContactUsPageBanner";
import ContactUsPageContactDetailsSection from "./ContactUsPageContactDetailsSection/ContactUsPageContactDetailsSection";
import ContactUsPageContactFormSection from "./ContactUsPageContactFormSection/ContactUsPageContactFormSection";
import ContactUsPageMapSection from "./ContactUsPageMapSection/ContactUsPageMapSection";

const ContactUsPage = () => {
  return (
    <>
      <ContactUsPageBanner />
      <ContactUsPageContactDetailsSection />
      <ContactUsPageContactFormSection />
      <ContactUsPageMapSection />
    </>
  );
};

export default ContactUsPage;
