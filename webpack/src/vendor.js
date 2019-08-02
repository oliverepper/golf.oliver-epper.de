import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import "bootstrap";
require("./.modernizrrc.js");
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons/faThumbsUp";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons/faEuroSign";


library.add(faPhone, faEnvelope, faFacebook, faAngleDown, faSearch, faThumbsUp, faEuroSign);
dom.watch();