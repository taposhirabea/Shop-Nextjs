import React from "react";
import {IoIosArrowUp} from "react-icons/io";
import { useSidebarContext } from "@/context/sidebar_context";

export default () => {
    const { height } = useSidebarContext();
    const scrollBackToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    };
    return (
        <section>
            <button className={height > 100 ? "scroll-btn show-scroll-btn" : "scroll-btn"} onClick={scrollBackToTop}>
        <IoIosArrowUp/>
            </button>
        </section>
     );
};

// const Wrapper = styled.article`
//     .scroll-btn {
//   position: fixed;
//   right: 1.5rem;
//   bottom: 4rem;
//   border-radius: 50%;
//   background: var(--primaryColor);
//   border: 1px solid var(--primaryColor);
//   color: var(--mainWhite);
//   z-index: -100;
//   opacity: 0;
//   transition: var(--mainTransition);
//   font-size: 2rem;
//   line-height: 0;
//   padding: 0.1rem 0.1rem;
//   cursor: pointer;
// }
// .show-scroll-btn {
//   z-index: 100;
//   opacity: 1;
// }
// `