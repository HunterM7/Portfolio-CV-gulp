import * as allFunctions from "./modules/functions.js";

allFunctions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

window.addEventListener('scroll', () => {
	const header = document.getElementById('header').classList;
	const activeClass = "header--scrolled";
	if (scrollY > 80) header.add(activeClass)
	else header.remove(activeClass)
})