//HOW TO STYLE REACT COMPONENTS WITH CSS
// 
// (NOT INCLUDING EXTERNAL FRAMEWORK OR PREPROCESSORS)


//1. EXTERNAL
//2. MODULES
//3. INLINE


import styles from "./Button_Module/Button.module.css"

function Button() {

    const inLineSyle = {
        "backgroundColor": "hsl(200, 100%, 50%)",
        "color": "white",
        "padding": "10px 20px",
        "borderRadius": "5px",
        "border": "none",
        "margin": "10px",
        "cursor": "pointer",
    }

    return (
        <>
            <button className="button">Click Me</button>

            <button className={styles.btnModule}>Click Me</button>

            <button style={inLineSyle}>Click Me</button>
        </>
    );
}


export default Button