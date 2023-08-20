import {generateMedia} from "styled-media-query";

export const mediaQueries = generateMedia({
    small: "576px",
    medium: "768px",
    large: "992px",
    huge: "1200px",
});