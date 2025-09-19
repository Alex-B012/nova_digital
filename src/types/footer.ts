import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface PromoText {
   id: number;
   text: string;
}

export interface FooterSocial {
   id: number;
   name: string;
   icon: IconDefinition;
   url: string;
}

export interface FooterContact {
   email: string;
   phone: string;
}

export interface FooterHelp {
   id: number;
   name: string;
   url: string;
}

export interface FooterMenu {
   id: number;
   name: string;
   url: string;
}

export interface FooterBottom {
   contacts: FooterContact;
   address: string[];
   help: FooterHelp[];
   menu: FooterMenu[];
}

export interface FooterData {
   text: string;
   promo_text: PromoText[];
   social: FooterSocial[];
   footer_bottom: FooterBottom;
}
