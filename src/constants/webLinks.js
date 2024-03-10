import { github, linkedin, code_tag, facebook } from "../assets";

export const socialLink = (icon) => {
    icon === github
        ? window.open("https://github.com/GhaouiOssema", "_blank")
        : icon === linkedin
        ? window.open(
              "https://www.linkedin.com/in/oussema-ghaoui-624a171ba/",
              "_blank"
          )
        : icon === code_tag
        ? window.open(
              "https://developers.google.com/profile/u/OussemaGhaoui",
              "_blank"
          )
        : icon === facebook
        ? window.open("https://www.facebook.com/oussema.ghawi.222", "_blank")
        : null;
};

export const stringUrl = (text) => {
    text === "@Google Developers Summit Tunisia - GDS"
        ? window.open(
              "https://www.linkedin.com/company/google-community-summit-tn/",
              "_blank"
          )
        : text === "@AI Hack Tunisia 2022 ( Organizers Team )"
        ? window.open("https://ai-hack-tunisia.com/", "_blank")
        : text === "@GDG RANDOTEK ( First edition )"
        ? window.open(
              "https://www.facebook.com/events/903171040390540/903172823723695/",
              "_blank"
          )
        : text === "@Google Developer Groups - Béja"
        ? window.open("https://www.linkedin.com/company/gdg-beja/", "_blank")
        : text === "@GO MY CODE Center ( 1 months )"
        ? window.open("https://gomycode.com/TN-FR/home", "_blank")
        : null;
};

export const CertificationLink = (idx) => {
    idx === 0
        ? window.open(
              "https://diploma.gomycode.app/?id=343663a3ff13e95ad",
              "_blank"
          )
        : idx === 1
        ? window.open(
              "https://www.udemy.com/certificate/UC-49b01224-ff75-4ad1-926c-7aa805856b15/",
              "_blank"
          )
        : idx === 2
        ? window.open(
              "https://learn.gomycode.co/credentials/10fe4ced-993a-441a-94ef-526cc4afcc60/GYAOARMHSYYSCALOCEDEEEONI-CN-TC-O/00003779#certificate",
              "_blank"
          )
        : idx === 3
        ? window.open(
              "https://diploma.gomycode.app/?id=30965de830ef0c820",
              "_blank"
          )
        : idx === 4
        ? window.open(
              "https://www.credly.com/badges/f7836436-9e21-408a-a55d-23c494b3441a/linked_in",
              "_blank"
          )
        : idx === 5
        ? window.open(
              "https://www.coursera.org/account/accomplishments/professional-cert/APEJH2BTEBW5?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
              "_blank"
          )
        : idx === 6
        ? window.open(
              "https://www.coursera.org/account/accomplishments/professional-cert/HSUD8P4WQ2V2?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
              "_blank"
          )
        : idx === 7
        ? window.open(
              "https://www.datacamp.com/statement-of-accomplishment/track/13219a3ccbf185f809fe0acb68edbcd08e3d43ec",
              "_blank"
          )
        : null;
};

export const credlyLinks = (idx) => {
    console.log(idx);
    idx === 0
        ? window.open(
              "https://www.credly.com/badges/d0c29710-03ed-45ae-b0d0-ef64c4cd6110/public_url",
              "_blank"
          )
        : idx === 1
        ? window.open(
              "https://www.credly.com/badges/f25049b5-4ad3-4d0b-b104-9adb870d6ec9/public_url",
              "_blank"
          )
        : null;
};
