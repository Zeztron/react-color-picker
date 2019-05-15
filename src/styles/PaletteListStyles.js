import sizes from './sizes';
import bg from './bg.svg';
export default {
    "@global": {
        "fade-exit": {
            opacity: 1
        },
        "fade-exit-active": {
            opacity: 0,
            transition: "opacity 0.5s ease-out"
        }
    },
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: '#fff',
        backgroundImage: `url(${bg})`,
        /* background by SVGBackgrounds.com */
        overflow: 'scroll'
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        [sizes.down('lg')]: {
            width: '80%'
        },
        [sizes.down('xs')]: {
            width: '75%'
        }
    },
    heading: {
        fontSize: '2rem'
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: 'space-between',
        alignItems: "center",
        color: "#fff",
        "& a": {
            color: "#fff",
            textDecoration: "none",
            border: "1px solid #fff",
            borderRadius: "5px",
            padding: "0.5rem",
            transition: "all 0.4s",
            "&:hover": {
                backgroundColor: "#fff",
                color: "blue",
                border: "1px solid blue"
            }
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "1.5rem",
        [sizes.down('md')]: {
            gridTemplateColumns: "repeat(2, 50%)",
        },
        [sizes.down('xs')]: {
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: '1.4rem'
        }
    }
}